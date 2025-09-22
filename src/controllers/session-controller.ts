import { NextFunction, Response } from "express";
import { computeSubscriberUri } from "../utils/subscriber-utils";
import { ApiServiceRequest } from "../types/request-types";
import {
	SessionManagementService,
	TransactionCacheService,
} from "../services/session-service-rewrite";
import logger from "@ondc/automation-logger";
import { setAckResponse, setInternalServerNack } from "../utils/ackUtils";
import { saveLog } from "../utils/data-utils/cache-utils";
import { getLoggerMetaData } from "../utils/loggingUtils";
import { performL0Validations } from "../validations/L0-validations/schemaValidations";
import { performL1validations } from "../validations/L1-validations";

export class SessionController {
	sessionService: SessionManagementService;
	constructor() {
		this.sessionService = new SessionManagementService();
	}

	receiveNewRequestFromNp = async (
		req: ApiServiceRequest,
		res: Response,
		next: NextFunction
	) => {
		const action = req.params.action;
		const body = req.body;
		const sub = computeSubscriberUri(body.context, action, false);
		const properties = await this.sessionService.receiveRequestFromNp(
			body,
			action,
			sub.subUrl,
			sub.partType,
			getLoggerMetaData(req)
		);
		req.requestProperties = properties;

		if (properties.defaultMode) {
			const message = `no session or active flow found for: url - ${sub.subUrl} which acts as a ${sub.partType}`;
			logger.info(
				"Running L0 Validations for request with no session!",
				getLoggerMetaData(req)
			);
			const l0Result = performL0Validations(
				body,
				action,
				getLoggerMetaData(req)
			);

			if (!l0Result.valid) {
				logger.warning("L0 Validations Failed", getLoggerMetaData(req));
				res
					.status(200)
					.send(
						setAckResponse(
							false,
							req.body,
							l0Result.errors + " \n " + message,
							"400",
							req.requestProperties
						)
					);
				return;
			}
			logger.info(
				"L0 Validations passed, now running L1 validations",
				getLoggerMetaData(req)
			);
			const l1Result = await performL1validations(action, body);
			const invalidResult = l1Result.filter(
				(result) => !result.valid && result.code !== 200
			);
			if (invalidResult.length > 0) {
				const error = invalidResult[0].description + " \n " + message;
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
			logger.warning(message, getLoggerMetaData(req));
			res.status(428).send(message);
			return;
		}
		logger.info(
			`Received request from Network Participant for action: ${action}, Transaction ID: ${properties.transactionId}`,
			getLoggerMetaData(req)
		);
		req.requestProperties.sessionId &&
			saveLog(
				req.requestProperties.sessionId,
				`Received request from Network Participant for action: ${action}, Transaction ID: ${properties.transactionId}`
			);
		next();
	};

	receiveNewRequestFromMock = async (
		req: ApiServiceRequest,
		res: Response,
		next: NextFunction
	) => {
		const action = req.params.action;
		const body = req.body;
		const sub = computeSubscriberUri(body.context, action, true);
		if (req.query.subscriber_url) {
			sub.subUrl = req.query.subscriber_url as string;
		}
		const sessionID = req.query.session_id as string;
		const flowID = req.query.flow_id as string;
		const properties = await this.sessionService.receiveRequestFromMock(
			body,
			action,
			sub.subUrl,
			sub.partType,
			getLoggerMetaData(req),
			sessionID,
			flowID
		);
		req.requestProperties = properties;
		logger.info(
			`Received Mock ${action} with Transaction ID: ${properties.transactionId}`,
			getLoggerMetaData(req)
		);
		req.requestProperties.sessionId &&
			saveLog(
				req.requestProperties.sessionId,
				`Received Mock ${action} with Transaction ID: ${properties.transactionId}`
			);
		next();
	};

	createTransaction = async (
		req: ApiServiceRequest,
		res: Response,
		next: NextFunction
	) => {
		if (!req.requestProperties) {
			logger.error(
				"[FATAL]: Request properties not found in createTransaction",
				getLoggerMetaData(req)
			);
			res.status(200).send(setInternalServerNack);
			return;
		}
		const transService = new TransactionCacheService();
		let transactionData = await transService.tryLoadTransaction(
			req.requestProperties.transactionId,
			req.requestProperties.subscriberUrl
		);
		if (!transactionData) {
			logger.info(
				`Creating new transaction cache for ${req.requestProperties.transactionId}`,
				getLoggerMetaData(req)
			);
			transactionData = await transService.createTransaction(
				transService.createTransactionKey(
					req.requestProperties.transactionId,
					req.requestProperties.subscriberUrl
				),
				req.requestProperties,
				req.body.context
			);
		}
		next();
	};
}
