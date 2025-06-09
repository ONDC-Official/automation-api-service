import { NextFunction, Request, Response } from "express";
import { computeSubscriberUri } from "../utils/subscriber-utils";
import { ApiServiceRequest } from "../types/request-types";
import {
	SessionManagementService,
	TransactionCacheService,
} from "../services/session-service-rewrite";
import { logError, logger, logInfo } from "../utils/logger";
import { setInternalServerNack } from "../utils/ackUtils";
import { saveLog } from "../utils/data-utils/cache-utils";

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
		logInfo({
			message: "Entering receiveNewRequestFromNp Middleware",
			meta: {
				action: req.params.action,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
		const action = req.params.action;
		const body = req.body;
		const sub = computeSubscriberUri(body.context, action, false);
		const properties = await this.sessionService.receiveRequestFromNp(
			body,
			action,
			sub.subUrl,
			sub.partType
		);
		req.requestProperties = properties;

		if (properties.defaultMode) {
			res.status(428).send("no session found for: " + sub.subUrl);
			return;
		}

		properties.sessionId &&
			saveLog(
				properties.sessionId,
				`Received ${action} with Transaction ID: ${properties.transactionId}`
			);
		logInfo({
			message: "Exiting receiveNewRequestFromNp Middleware",
			meta: {
				action: req.params.action,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
		next();
	};

	receiveNewRequestFromMock = async (
		req: ApiServiceRequest,
		res: Response,
		next: NextFunction
	) => {
		logInfo({
			message: "Entering receiveNewRequestFromMock Middleware",
			meta: {
				action: req.params.action,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
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
			sessionID,
			flowID
		);
		req.requestProperties = properties;
		req.requestProperties.sessionId &&
			saveLog(
				req.requestProperties.sessionId,
				`Received Mock ${action} with Transaction ID: ${properties.transactionId}`
			);
		logInfo({
			message: "Exiting receiveNewRequestFromMock Middleware",
			meta: {
				action: req.params.action,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
		next();
	};

	createTransaction = async (
		req: ApiServiceRequest,
		res: Response,
		next: NextFunction
	) => {
		logInfo({
			message: "Entering createTransaction Middleware",
			meta: {
				action: req.params.action,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
		if (!req.requestProperties) {
			// logger.error("Request properties not found");
			logError({
				message:
					"Exiting createTransaction Middleware. Request properties not found",
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
			res.status(200).send(setInternalServerNack);
			return;
		}
		const transService = new TransactionCacheService();
		let transactionData = await transService.tryLoadTransaction(
			req.requestProperties.transactionId,
			req.requestProperties.subscriberUrl
		);
		if (!transactionData) {
			// logger.info("Transaction not found, creating new transaction");

			logInfo({
				message: "Transaction not found, creating new transaction",
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
			transactionData = await transService.createTransaction(
				transService.createTransactionKey(
					req.requestProperties.transactionId,
					req.requestProperties.subscriberUrl
				),
				req.requestProperties,
				req.body.context
			);
		}
		logInfo({
			message: "Exiting createTransaction Middleware",
			meta: {
				action: req.params.action,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
		next();
	};
}
