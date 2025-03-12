import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";
import { setAckResponse, setBadRequestNack } from "../utils/ackUtils";
import { performL0Validations } from "../validations/L0-validations/schemaValidations";
import { performL1Validations } from "../validations/L1-validations";
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
import { performL1CustomValidations } from "../validations/L1-custom-validation";

export class ValidationController {
	validateRequestBodyNp = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		const body = req.body;
		if (!isValidJSON(JSON.stringify(body))) {
			logger.error("Invalid request body", body);
			res
				.status(200)
				.send(setBadRequestNack(": Invalid request body is not a valid JSON"));
			return;
		}
		const action = req.params.action;
		if (!body) {
			logger.error("Invalid request body", body);
			res.status(200).send(setBadRequestNack(": Invalid request body"));
			return;
		}
		if (!body.context) {
			logger.error("Invalid request body", body);
			res.status(200).send(setBadRequestNack(": Context is missing"));
			return;
		}
		try {
			computeSubscriberUri(body.context, action, false);
		} catch (error) {
			logger.error("Ambiguous subscriber URL", error);
			res
				.status(200)
				.send(setBadRequestNack(": Ambiguous subscriber URL inside context"));
			return;
		}
		next();
	};

	validateSignatureNp = async (
		req: ApiServiceRequest,
		res: Response,
		next: NextFunction
	) => {
		try {
			logger.info("Validating signature");
			if (
				req.requestProperties &&
				req.requestProperties.difficulty.headerValidaton === false
			) {
				logger.info("Signature validations are disabled");
				next();
				return;
			}
			const auth = req.headers.authorization;
			if (!auth) {
				logger.info("Responding with invalid signature");
				res
					.status(200)
					.send(setAckResponse(false, "Invalid Signature", "10001"));
				return;
			}
			const header = JSON.stringify(req.headers);
			const key = await getPublicKeys(header, req.body);
			const valid = await isHeaderValid({
				header: auth,
				body: JSON.stringify(req.body),
				publicKey: key,
			});
			logger.info("Signature validation result " + valid);
			if (!valid) {
				res
					.status(200)
					.send(setAckResponse(false, "Invalid Signature", "10001"));
				return;
			}
			next();
		} catch (error) {
			logger.info("error while validation signature", error);
			res.status(200).send(setAckResponse(false, "Invalid Signature", "10001"));
			return;
		}
	};
	// Middleware: Validate request body
	validateRequestBodyMock = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		logger.info("recived request from mock server");
		const body = req.body;
		if (!body || !body.context || !body.context.action) {
			logger.error("Invalid request body", body);
			res.status(200).send(setBadRequestNack());
			return;
		}
		try {
			computeSubscriberUri(body.context, body.context.action, true);
		} catch {
			logger.error("Ambiguous subscriber URL", body);
			res.status(200).send(setBadRequestNack());
			return;
		}
		next();
	};

	// Middleware: L0 validations
	validateL0(req: Request, res: Response, next: NextFunction) {
		const sessionId = (req as ApiServiceRequest).requestProperties?.sessionId ?? 'unknown';
		const { action } = req.params;
		const body = req.body;

		saveLog(sessionId, 'Starting L0 validations');
		const l0Result = performL0Validations(body, action);
		if (!l0Result.valid) {
			saveLog(sessionId, `L0 validation failed: ${l0Result.errors}`, 'error');
			res.status(200).send(setAckResponse(false, l0Result.errors, "400"));
			return;
		}
		saveLog(sessionId, 'L0 validations passed successfully');
		logger.info("L0 validations passed");
		next();
	}

	// Middleware: L1 validations
	validateL1 = async (
		req: ApiServiceRequest,
		res: Response,
		next: NextFunction
	) => {
		const { action } = req.params;
		const body = req.body;
		const sessionId = (req as ApiServiceRequest).requestProperties?.sessionId ?? 'unknown';
		if (
			req.requestProperties &&
			!req.requestProperties.difficulty.protocolValidations
		) {
			logger.info("L1 validations are disabled");
			next();
			return;
		}
		const apiLayerUrl = process.env.API_SERVICE_URL;
		const extraMessage = ` \n\n _note: find complete list of [validations](${apiLayerUrl}/test)_`;
		const l1Result = performL1Validations(action, body, true);
		const invalidResult = l1Result.filter(
			(result) => !result.valid && result.code !== 200
		);
		console.log("invalidResult", invalidResult);
		if (invalidResult.length > 0) {
			const error = invalidResult[0].description + extraMessage;
			const code = invalidResult[0].code as number;
			await saveLog(sessionId, `L1 validation failed: ${error}`, 'error');
			res.status(200).send(setAckResponse(false, error, code.toString()));
			return;
		}
		
		// Execute custom L1 validations
		try {
			const customValidationResult = performL1CustomValidations(action, body, true);
			const invalidCustomResult = customValidationResult.filter(
				(result) => !result.valid && result.code !== 200
			);
			
			if (invalidCustomResult.length > 0) {
				const error = invalidCustomResult[0].description + extraMessage;
				const code = invalidCustomResult[0].code as number;
				await saveLog(sessionId, `Custom L1 validation failed: ${error}`, 'error');
				res.status(200).send(setAckResponse(false, error, code.toString()));
				return;
			}
		} catch (error) {
			logger.error("Error in custom L1 validations:", error);
			await saveLog(sessionId, `Error in custom L1 validations: ${error}`, 'error');
			res.status(200).send(setAckResponse(false, "Error in custom L1 validations", "500"));
			return;
		}
		
		await saveLog(sessionId, 'L1 validations passed successfully');
		logger.info("L1 validations passed");
		next();
	};

	validateSingleL1 = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		const { action } = req.params;
		const { body } = req;
		const sessionId = (req as ApiServiceRequest).requestProperties?.sessionId ?? 'unknown';
		const apiLayerUrl = process.env.API_SERVICE_URL;
		const extraMessage = ` \n\n _note: find complete list of [validations](${apiLayerUrl}/test)_`;
		const l1Result = performL1Validations(action, { ...body }, true);
		const isValid = l1Result.every((result) => result.valid);
		if (!isValid) {
			const allErrors =
				l1Result
					.filter((result) => !result.valid)
					.map((result) => result.description)
					.join("\n") + extraMessage;
			const code = l1Result[0].code as number;
			res.status(200).send(setAckResponse(false, allErrors, code.toString()));
			return;
		}
		
		// Execute custom L1 validations
		try {
			const customValidationResult = performL1CustomValidations(action, body, true);
			const invalidCustomResult = customValidationResult.filter(
				(result) => !result.valid && result.code !== 200
			);
			
			if (invalidCustomResult.length > 0) {
				const error = invalidCustomResult[0].description + extraMessage || "Custom L1 validation failed";
				const code = invalidCustomResult[0].code as number;
				await saveLog(sessionId, `Custom L1 validation failed: ${error}`, 'error');
				res.status(200).send(setAckResponse(false, error, code.toString()));
				return;
			}
		} catch (error) {
			logger.error("Error in custom L1 validations:", error);
			await saveLog(sessionId, `Error in custom L1 validations: ${error}`, 'error');
			res.status(200).send(setAckResponse(false, "Error in custom L1 validations", "500"));
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
		const body = req.body;
		if (!req.requestProperties) {
			logger.error("[FATAL]: Request properties not found");
			next();
			return;
		}
		const contextValidations = await performContextValidations(
			body.context,
			req.requestProperties
		);
		if (!contextValidations.valid) {
			res
				.status(200)
				.send(setAckResponse(false, contextValidations.error, "400"));
			return;
		}
		logger.info("Context validations passed");
		next();
	}

	async validateContextFromMock(
		req: ApiServiceRequest,
		res: Response,
		next: NextFunction
	) {
		if (!req.requestProperties) {
			logger.error("[FATAL]: Request properties not found");
			next();
			return;
		}
		const context = req.body.context;
		const contextValidations = await performContextValidations(
			context,
			req.requestProperties
		);
		if (!contextValidations.valid) {
			res
				.status(200)
				.send(setAckResponse(false, contextValidations.error, "400"));
			return;
		}
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
			res.status(200).send(setAckResponse(false, "Invalid Session", "90001"));
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
			res.status(200).send(setAckResponse(false, "Invalid Session", "90001"));
			return;
		}
		next();
	}
}
