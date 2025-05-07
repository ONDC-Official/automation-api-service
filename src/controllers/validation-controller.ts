import { NextFunction, Request, Response } from "express";
import { logger, logInfo, logError } from "../utils/logger";
import {
	setAckResponse,
	setBadRequestNack,
	setInternalServerNack,
} from "../utils/ackUtils";
import { performL0Validations } from "../validations/L0-validations/schemaValidations";
import { performL1validations } from "../validations/L1-validations";
import {
	isValidJSON,
	performContextValidations,
} from "../utils/data-utils/validate-context";
import { getPublicKeys } from "../utils/headerUtils";
import { isHeaderValid } from "ondc-crypto-sdk-nodejs";
import { DataService } from "../services/data-service";
import { computeSubscriberUri } from "../utils/subscriber-utils";
import { ApiServiceRequest } from "../types/request-types";
import { saveLog } from "../utils/data-utils/cache-utils";
import { performL1CustomValidations } from "../validations/L1-custom-validations";

export class ValidationController {
	validateRequestBodyNp = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		logInfo({
			message: "Entering validateRequestBodyNp Middleware",
			meta: {
				action: req.params.action,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
		const body = req.body;
		if (!isValidJSON(JSON.stringify(body))) {
			// logger.error("Invalid request body", body);
			logError({
				message: "Exiting validateRequestBodyNp Middleware. Invalid request body",
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
			res
				.status(200)
				.send(setBadRequestNack(": Invalid request body is not a valid JSON"));
			return;
		}
		const action = req.params.action;
		if (!body) {
			// logger.error("Invalid request body", body);
			logError({
				message: "Exiting validateRequestBodyNp Middleware. Invalid request body",
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
			res.status(200).send(setBadRequestNack(": Invalid request body"));
			return;
		}
		if (!body.context) {
			// logger.error("Invalid request body", body);
			logError({
				message: "Exiting validateRequestBodyNp Middleware. Context is missing",
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
			res.status(200).send(setBadRequestNack(": Context is missing"));
			return;
		}
		try {
			computeSubscriberUri(body.context, action, false);
		} catch (error) {
			// logger.error("Ambiguous subscriber URL", error);
			logError({
				message: "Exiting validateRequestBodyNp Middleware. Ambiguous subscriber URL",
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
			res
				.status(200)
				.send(setBadRequestNack(": Ambiguous subscriber URL inside context"));
			return;
		}
		logInfo({
			message: "Exiting validateRequestBodyNp Middleware",
			meta: {
				action: req.params.action,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
		next();
	};

	validateSignatureNp = async (
		req: ApiServiceRequest,
		res: Response,
		next: NextFunction
	) => {
		try {
			// logger.info("Validating signature");
			logInfo({
				message: "Entering validateSignatureNp Middleware",
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
			if (
				req.requestProperties &&
				req.requestProperties.difficulty.headerValidaton === false
			) {
				// logger.info("Signature validations are disabled");
				logInfo({
					message: "Exiting validateSignatureNp Middleware. Signature validations are disabled",
					meta: {
						action: req.params.action,
					},
					transaction_id: req.body?.context?.transaction_id,
				});
				next();
				return;
			}
			const auth = req.headers.authorization;
			if (!auth) {
				// logger.info("Responding with invalid signature");
				logInfo({
					message: "Exiting validateSignatureNp Middleware. Responding with invalid signature",
					meta: {
						action: req.params.action,
					},
					transaction_id: req.body?.context?.transaction_id,
				});
				res
					.status(200)
					.send(setAckResponse(false, req.body, "Invalid Signature", "10001"));
				return;
			}
			const header = JSON.stringify(req.headers);
			const key = await getPublicKeys(header, req.body);
			const valid = await isHeaderValid({
				header: auth,
				body: JSON.stringify(req.body),
				publicKey: key,
			});
			// logger.info("Signature validation result " + valid);
			logInfo({
				message: "Signature validation result " + valid,
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
			if (!valid) {
				logInfo({
					message: "Exiting validateSignatureNp Middleware. Responding with invalid signature",
					meta: {
						action: req.params.action,
					},
					transaction_id: req.body?.context?.transaction_id,
				});
				res
					.status(200)
					.send(setAckResponse(false, req.body, "Invalid Signature", "10001"));
				return;
			}
			logInfo({
				message: "Exiting validateSignatureNp Middleware. Signature is valid",
				meta: {
					action: req.params.action,
				},	
				transaction_id: req.body?.context?.transaction_id,
			});
			next();
		} catch (error) {
			// logger.info("error while validation signature", error);
			logError({
				message: "Exiting validateSignatureNp Middleware. Error while validating signature",
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
			res
				.status(200)
				.send(setAckResponse(false, req.body, "Invalid Signature", "10001"));
			return;
		}
	};
	// Middleware: Validate request body
	validateRequestBodyMock = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		// logger.info("recived request from mock server");
		logInfo({
			message: "Entering validateRequestBodyMock Middleware",
			meta: {
				action: req.params.action,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
		const body = req.body;
		if (!body || !body.context || !body.context.action) {
			// logger.error("Invalid request body", body);
			logError({
				message: "Exiting validateRequestBodyMock Middleware. Invalid request body",
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});

			res.status(200).send(setBadRequestNack());
			return;
		}
		try {
			computeSubscriberUri(body.context, body.context.action, true);
		} catch {
			// logger.error("Ambiguous subscriber URL", body);
			logError({
				message: "Exiting validateRequestBodyMock Middleware. Ambiguous subscriber URL",
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});

			res.status(200).send(setBadRequestNack());
			return;
		}
		logInfo({
			message: "Exiting validateRequestBodyMock Middleware",
			meta: {
				action: req.params.action,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
		next();
	};

	// Middleware: L0 validations
	validateL0(req: Request, res: Response, next: NextFunction) {
		const { action } = req.params;
		const body = req.body;
		// logger.info(
		// 	"Starting L0 validations for action: " +
		// 		JSON.stringify(body.context, null, 2)
		// );
		logInfo({
			message: "Entering validateL0 Middleware. Starting L0 validations for action: " + action,
			meta: {
				action: action,
				context: body.context,
			},	
			transaction_id: req.body?.context?.transaction_id,
		});
		const l0Result = performL0Validations(body, action);
		if (!l0Result.valid) {
			// logger.error("L0 validations failed");
			logError({
				message: "Exiting validateL0 Middleware. L0 validations failed",
				meta: {
					action: action,
					context: body.context,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
			res
				.status(200)
				.send(setAckResponse(false, req.body, l0Result.errors, "400"));
			return;
		}
		// logger.info("L0 validations passed");
		logInfo({
			message: " Exiting validateL0 Middleware. L0 validations passed",
			meta: {
				action: action,
				context: body.context,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
		next();
	}

	// Middleware: L1 validations
	validateL1 = async (
		req: ApiServiceRequest,
		res: Response,
		next: NextFunction
	) => {
		logInfo({
			message: "Entering validateL1 Middleware",
			meta: {
				action: req.params.action,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
		const { action } = req.params;
		const body = req.body;
		const sessionId =
			(req as ApiServiceRequest).requestProperties?.sessionId ?? "unknown";
		if (
			req.requestProperties &&
			!req.requestProperties.difficulty.protocolValidations
		) {
			// logger.info("L1 validations are disabled");
			logInfo({
				message: "Exiting L1 Validations Middleware. L1 validations are disabled",
				meta: {
					action: action,
					context: body.context,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
			next();
			return;
		}

		const l1Result = performL1validations(action, body, true);
		const invalidResult = l1Result.filter(
			(result) => !result.valid && result.code !== 200
		);
		// console.log("invalidResult", invalidResult);
		if (invalidResult.length > 0) {
			const error = invalidResult[0].description;
			const code = invalidResult[0].code as number;
			await saveLog(sessionId, `L1 validation failed: ${error}`, "error");
			logInfo({
				message: "Exiting L1 Validations Middleware. L1 validations failed",
				meta: {
					action: action,
					context: body.context,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
			res
				.status(200)
				.send(setAckResponse(false, req.body, error, code.toString()));
			return;
		}
		await saveLog(sessionId, "first level validations passed successfully");
		// logger.info("L1 validations passed");
		logInfo({
			message: "Exiting L1 Validations Middleware. L1 validations passed",
			meta: {
				action: action,
				context: body.context,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
		next();
	};

	validateL1Custom = async (
		req: ApiServiceRequest,
		res: Response,
		next: NextFunction
	) => {
		logInfo({
			message: "Entering validateL1Custom Middleware",
			meta: {
				action: req.params.action,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
		try {
			const { action } = req.params;
			const body = req.body;
			const sessionId =
				(req as ApiServiceRequest).requestProperties?.sessionId ?? "unknown";
			if (
				req.requestProperties &&
				!req.requestProperties.difficulty.protocolValidations
			) {
				// logger.info("L1 validations are disabled");
				logInfo({
					message: "Exiting validateL1Custom Middleware. L1 custom validations are disabled",
					meta: {
						action: action,
						context: body.context,
					},
					transaction_id: req.body?.context?.transaction_id,
				});
				next();
				return;
			}
			const l1CustomResult = await performL1CustomValidations(body, action);
			const invalidResult = l1CustomResult.filter(
				(result) => !result.valid && result.code !== 200
			);
			if (invalidResult.length > 0) {
				const error = invalidResult[0].description;
				const code = invalidResult[0].code as number;
				await saveLog(sessionId, `L1 validation failed: ${error}`, "error");
				logInfo({
					message: "Exiting validateL1Custom Middleware. L1 custom validations failed",
					meta: {
						action: action,
						context: body.context,
					},
					transaction_id: req.body?.context?.transaction_id,
				});

				res
					.status(200)
					.send(setAckResponse(false, req.body, error, code.toString()));
				return;
			}
			await saveLog(sessionId, "second level validations passed successfully");
			// logger.info("L1 validations passed");
			logInfo({
				message: "Exiting validateL1Custom Middleware. L1 custom validations passed",
				meta: {
					action: action,
					context: body.context,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
			next();
		} catch (error) {
			// logger.error("error in L1 custom validations", error);
			logError({
				message: "Exiting validateL1Custom Middleware. Error in L1 custom validations",
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});

			next();
			// res.status(200).send(setInternalServerNack);
		}
	};

	validateSingleL1 = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		const { action } = req.params;
		const body = req.body;
		const l1Result = performL1validations(action, { ...body }, true);
		const isValid = l1Result.every((result) => result.valid);
		if (!isValid) {
			const allErrors = l1Result
				.filter((result) => !result.valid)
				.map((result) => result.description)
				.join("\n");
			const code = l1Result[0].code as number;
			res
				.status(200)
				.send(setAckResponse(false, req.body, allErrors, code.toString()));
			return;
		}
		logger.info("L1 validations passed");
		next();
	};

	// Middleware: Context validations
	async validateContextFromNp(
		req: ApiServiceRequest,
		res: Response,
		next: NextFunction
	) {
		logInfo({
			message: "Entering validateContextFromNp Middleware",
			meta: {
				action: req.params.action,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
		const body = req.body;
		if (!req.requestProperties) {
			// logger.error("[FATAL]: Request properties not found");
			logError({
				message: "Exiting validateContextFromNp Middleware. Request properties not found",
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
			next();
			return;
		}
		const contextValidations = await performContextValidations(
			body.context,
			req.requestProperties
		);
		if (!contextValidations.valid) {
			logError({
				message: "Exiting validateContextFromNp Middleware. Context validations failed",
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
			res
				.status(200)
				.send(setAckResponse(false, req.body, contextValidations.error, "400"));
			return;
		}
		// logger.info("Context validations passed");
		logInfo({
			message: "Exiting validateContextFromNp Middleware. Context validations passed",
			meta: {
				action: req.params.action,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
		next();
	}

	async validateContextFromMock(
		req: ApiServiceRequest,
		res: Response,
		next: NextFunction
	) {
		if (!req.requestProperties) {
			// logger.error("[FATAL]: Request properties not found");
			logError({
				message: "Exiting validateContextFromMock Middleware. Request properties not found",
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
			next();
			return;
		}
		const context = req.body.context;
		const contextValidations = await performContextValidations(
			context,
			req.requestProperties
		);
		if (!contextValidations.valid) {
			logError({
				message: "Exiting validateContextFromMock Middleware. Context validations failed",
				meta: {
					action: req.params.action,
				},	
				transaction_id: req.body?.context?.transaction_id,	
				});
			res
				.status(200)
				.send(setAckResponse(false, req.body, contextValidations.error, "400"));
			return;
		}
		logInfo({
			message: "Exiting validateContextFromMock Middleware. Context validations passed",
			meta: {
				action: req.params.action,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
		next();
	}

	async validateSessionFromNp(req: Request, res: Response, next: NextFunction) {
		const { action } = req.params;
		const body = req.body;
		const context = body.context;
		const validSession = await new DataService().checkSessionExistence(
			computeSubscriberUri(context, action, false).subUrl
		);
		if (!validSession) {
			logger.info("responding with invalid session");
			res
				.status(200)
				.send(setAckResponse(false, req.body, "Invalid Session", "90001"));
			return;
		}
		logger.info("Session validated");
		next();
	}

	async validateSessionFromMock(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		const subscriberUrl =
			(req.query.subscriber_url as string) ??
			computeSubscriberUri(req.body.context, req.params.action, true);

		const validSession = await new DataService().checkSessionExistence(
			subscriberUrl
		);
		if (!validSession) {
			logger.info("responding with invalid session");
			res
				.status(200)
				.send(setAckResponse(false, req.body, "Invalid Session", "90001"));
			return;
		}
		next();
	}
}
