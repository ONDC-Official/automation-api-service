import { NextFunction, Request, Response } from "express";
import logger from "@ondc/automation-logger";
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
import { computeSubscriberUri } from "../utils/subscriber-utils";
import { ApiServiceRequest } from "../types/request-types";
import { performL1CustomValidations } from "../validations/L1-custom-validations";
import { getLoggerMetaData } from "../utils/loggingUtils";

export class ValidationController {
	validateRequestBodyNp = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		const body = req.body;
		logger.info(
			`${req.params.action} request received from NP`,
			getLoggerMetaData(req)
		);
		if (!isValidJSON(JSON.stringify(body))) {
			logger.warning(
				"Invalid request body is not a valid JSON",
				getLoggerMetaData(req)
			);
			res
				.status(200)
				.send(setBadRequestNack(": Invalid request body is not a valid JSON"));
			return;
		}
		const action = req.params.action;
		if (!body) {
			logger.warning("Invalid request body", getLoggerMetaData(req));
			res.status(200).send(setBadRequestNack(": Invalid request body"));
			return;
		}
		if (!body.context) {
			logger.warning(
				"Context is missing in the request body",
				getLoggerMetaData(req)
			);
			res.status(200).send(setBadRequestNack(": Context is missing"));
			return;
		}
		try {
			if (!(action === action.toLowerCase())) {
				throw new Error("Invalid action: " + action);
			}
		} catch (error: any) {
			logger.error("Invalid action", getLoggerMetaData(req), error);
			res.status(200).send(setBadRequestNack("Invalid Action : " + action));
			return;
		}
		try {
			computeSubscriberUri(body.context, action, false);
		} catch (error: any) {
			logger.error("Ambiguous subscriber URL", getLoggerMetaData(req), error);
			res.status(200).send(setBadRequestNack(":" + error.message));
			return;
		}
		try {
			const payloadAction = body.context.action;
			if (!payloadAction) {
				logger.warning(
					"Invalid request body: action is missing",
					getLoggerMetaData(req)
				);
				res.status(200).send(setBadRequestNack(": Action is missing"));
				return;
			}
			if (payloadAction !== action) {
				logger.warning(
					"Invalid request body: Action in context does not match the route",
					getLoggerMetaData(req)
				);
				res
					.status(200)
					.send(
						setBadRequestNack(
							`: Action in context (${payloadAction}) does not match the route (${action})`
						)
					);
				return;
			}
		} catch (error) {}
		next();
	};

	validateSignatureNp = async (
		req: ApiServiceRequest,
		res: Response,
		next: NextFunction
	) => {
		try {
			logger.info("Validating signature", getLoggerMetaData(req));
			const encoding = req.headers["content-encoding"];
			if (encoding !== "gzip" && req.requestProperties?.difficulty.useGzip) {
				logger.warning(
					"content-encoding must be gzip as per flow settings",
					getLoggerMetaData(req)
				);
				res
					.status(406)
					.send("content-encoding must be gzip as per flow settings");
				return;
			}
			if (encoding === "gzip" && !req.requestProperties?.difficulty.useGzip) {
				logger.warning(
					"content-encoding must not be gzip as per flow settings",
					getLoggerMetaData(req)
				);
				res
					.status(406)
					.send("content-encoding must not be gzip as per flow settings");
				return;
			}
			if (
				req.requestProperties &&
				req.requestProperties.difficulty.headerValidaton === false
			) {
				logger.info(
					"Signature validations are disabled",
					getLoggerMetaData(req)
				);
				next();
				return;
			}
			const auth = req.headers.authorization;
			if (!auth) {
				logger.warning(
					"Authorization header is missing",
					getLoggerMetaData(req)
				);
				res.status(200).send(
					setAckResponse(
						false,
						req.body,
						`Invalid Signature for transaction_id: ${req.requestProperties?.transactionId} 
						and session_id: ${req.requestProperties?.sessionId}`,
						"10001",
						req.requestProperties
					)
				);
				return;
			}
			if (!req.requestProperties?.env) {
				logger.error(
					"Environment is not set in request properties",
					getLoggerMetaData(req)
				);
				res.status(200).send(setInternalServerNack);
				return;
			}
			const header = JSON.stringify(req.headers);
			const key = await getPublicKeys(
				header,
				req.body,
				req.requestProperties?.env,
				getLoggerMetaData(req)
			);
			logger.info("Public key retrieved successfully", getLoggerMetaData(req), {
				publicKey: key,
				header: header,
			});
			const valid = await isHeaderValid({
				header: auth,
				body: JSON.stringify(req.body),
				publicKey: key,
			});
			logger.info(
				"Signature validation result: " + valid,
				getLoggerMetaData(req)
			);
			if (!valid) {
				logger.info(
					"Responding with invalid signature",
					getLoggerMetaData(req)
				);
				res.status(200).send(
					setAckResponse(
						false,
						req.body,
						`Invalid Signature for transaction_id: ${req.requestProperties?.transactionId} 
						and session_id: ${req.requestProperties?.sessionId}, tip: you can disable signature validation in flow settings.`,
						"10001",
						req.requestProperties
					)
				);
				return;
			}
			logger.info("Signature validation passed", getLoggerMetaData(req));
			next();
		} catch (error) {
			logger.error(
				"Error while validating signature",
				getLoggerMetaData(req),
				error as Error
			);
			res.status(200).send(
				setAckResponse(
					false,
					req.body,
					`Invalid Signature for transaction_id: ${req.requestProperties?.transactionId} 
						and session_id: ${req.requestProperties?.sessionId}, tip: you can disable signature validation in flow settings.`,
					"10001",
					req.requestProperties
				)
			);
			return;
		}
	};
	// Middleware: Validate request body
	validateRequestBodyMock = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		const body = req.body;
		logger.info(
			`${req.params.action} request received from Mock Server`,
			getLoggerMetaData(req)
		);
		if (!body || !body.context || !body.context.action) {
			// logger.error("Invalid request body", body);
			logger.warning("Invalid request body", getLoggerMetaData(req));
			res.status(200).send(setBadRequestNack());
			return;
		}
		try {
			computeSubscriberUri(body.context, body.context.action, true);
		} catch (error: any) {
			logger.error("Ambiguous subscriber URL", getLoggerMetaData(req), error);
			res.status(200).send(setBadRequestNack());
			return;
		}
		next();
	};

	// Middleware: L0 validations
	validateL0(req: ApiServiceRequest, res: Response, next: NextFunction) {
		const { action } = req.params;
		const body = req.body;
		logger.info("Running L0 validations", getLoggerMetaData(req));
		const l0Result = performL0Validations(body, action, getLoggerMetaData(req));
		if (!l0Result.valid) {
			logger.error("L0 validations failed", {
				...getLoggerMetaData(req),
				errors: l0Result.errors,
			});
			res
				.status(200)
				.send(
					setAckResponse(
						false,
						req.body,
						l0Result.errors,
						"400",
						req.requestProperties
					)
				);
			return;
		}
		logger.info("L0 validations passed", getLoggerMetaData(req));
		next();
	}

	validateL1 = async (
		req: ApiServiceRequest,
		res: Response,
		next: NextFunction
	) => {
		logger.info("Performing L1 validations", getLoggerMetaData(req));
		const { action } = req.params;
		const body = req.body;

		if (
			req.requestProperties &&
			!req.requestProperties.difficulty.protocolValidations
		) {
			logger.info("L1 validations are disabled", getLoggerMetaData(req));
			next();
			return;
		}
		const profiler = logger.startTimer();
		const l1Result = performL1validations(action, body, true);
		profiler.done({
			message: `L1 validations completed in: `,
			...getLoggerMetaData(req),
		});
		const invalidResult = l1Result.filter(
			(result) => !result.valid && result.code !== 200
		);
		if (invalidResult.length > 0) {
			const error = invalidResult[0].description;
			const code = invalidResult[0].code as number;
			logger.warning("L1 validations failed", {
				...getLoggerMetaData(req),
				errors: error,
			});
			res
				.status(200)
				.send(
					setAckResponse(
						false,
						req.body,
						error,
						code.toString(),
						req.requestProperties
					)
				);
			return;
		}
		logger.info("L1 validations passed", getLoggerMetaData(req));
		next();
	};

	validateL1Custom = async (
		req: ApiServiceRequest,
		res: Response,
		next: NextFunction
	) => {
		try {
			logger.info("Performing L1 custom validations", getLoggerMetaData(req));
			const { action } = req.params;
			const body = req.body;
			if (
				req.requestProperties &&
				!req.requestProperties.difficulty.protocolValidations
			) {
				logger.info(
					"L1 custom validations are disabled",
					getLoggerMetaData(req)
				);
				next();
				return;
			}
			const profiler = logger.startTimer();
			const l1CustomResult = await performL1CustomValidations(
				JSON.parse(JSON.stringify(body)),
				action,
				req.requestProperties?.subscriberUrl ?? ""
			);
			profiler.done({
				message: `L1 custom validations completed in: `,
				...getLoggerMetaData(req),
			});
			const invalidResult = l1CustomResult.filter(
				(result) => !result.valid && result.code !== 200
			);
			if (invalidResult.length > 0) {
				const error = invalidResult[0].description;
				const code = invalidResult[0].code as number;
				logger.warning("L1 custom validations failed", {
					...getLoggerMetaData(req),
					errors: error,
				});
				res
					.status(200)
					.send(
						setAckResponse(
							false,
							req.body,
							error,
							code.toString(),
							req.requestProperties
						)
					);
				return;
			}
			logger.info("L1 custom validations passed", getLoggerMetaData(req));
			next();
		} catch (error: any) {
			logger.error(
				"Error in L1 custom validations",
				{
					...getLoggerMetaData(req),
				},
				error
			);
			next();
		}
	};

	validateSingleL1 = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		logger.info("Performing single L1 validations", getLoggerMetaData(req));
		const { action } = req.params;
		const body = req.body;
		const profiler = logger.startTimer();
		const l1Result = performL1validations(action, { ...body }, true);
		profiler.done({
			message: `Single L1 validations completed in: `,
			...getLoggerMetaData(req),
		});
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
		logger.info("L1 validations passed", getLoggerMetaData(req));
		next();
	};

	// Middleware: Context validations
	async validateContextFromNp(
		req: ApiServiceRequest,
		res: Response,
		next: NextFunction
	) {
		try {
			logger.info("Validating context from NP", getLoggerMetaData(req));
			const body = req.body;
			if (!req.requestProperties) {
				logger.error(
					"[FATAL]: Request properties not found in validateContextFromNp",
					getLoggerMetaData(req)
				);
				res.status(200).send(setInternalServerNack);
				return;
			}
			const contextValidations = await performContextValidations(
				body.context,
				req.requestProperties,
				getLoggerMetaData(req)
			);
			if (!contextValidations.valid) {
				logger.warning("Context validations failed", {
					...getLoggerMetaData(req),
					errors: contextValidations.error,
				});
				res
					.status(200)
					.send(
						setAckResponse(
							false,
							req.body,
							contextValidations.error,
							"400",
							req.requestProperties
						)
					);
				return;
			}
			logger.info("Context validations passed", getLoggerMetaData(req));
			next();
		} catch (error: any) {
			logger.error(
				"Error while validating context from NP",
				getLoggerMetaData(req),
				error
			);
			res.status(200).send(setInternalServerNack);
			return;
		}
	}

	async validateContextFromMock(
		req: ApiServiceRequest,
		res: Response,
		next: NextFunction
	) {
		try {
			logger.info("Validating context from NP", getLoggerMetaData(req));
			if (!req.requestProperties) {
				logger.error(
					"[FATAL]: Request properties not found in validateContextFromMock",
					getLoggerMetaData(req)
				);
				res.status(200).send(setInternalServerNack);
				return;
			}
			const context = req.body.context;
			const contextValidations = await performContextValidations(
				context,
				req.requestProperties,
				getLoggerMetaData(req)
			);
			if (!contextValidations.valid) {
				logger.warning("Context validations failed", {
					...getLoggerMetaData(req),
					errors: contextValidations.error,
				});
				res
					.status(200)
					.send(
						setAckResponse(false, req.body, contextValidations.error, "400")
					);
				return;
			}
			logger.info("Context validations passed", getLoggerMetaData(req));
			next();
		} catch (error: any) {
			logger.error(
				"Error while validating context from Mock Server",
				getLoggerMetaData(req),
				error
			);
			res.status(200).send(setInternalServerNack);
			return;
		}
	}
}
