import { RedisService } from "ondc-automation-cache-lib";
import logger from "@ondc/automation-logger";
import {
	RequestProperties,
	SessionCache,
	SubscriberCache,
	TransactionCache,
} from "../types/cache-types";
import { BecknContext } from "../models/beckn-types";
import { setFlowStatusService } from "./mock-flow-status";
import { isoDurationToSeconds } from "../utils/generic";

export class SessionManagementService {
	transactionService: TransactionCacheService;
	sessionService: SessionCacheService;
	subscriberService: SubscriberCacheService;
	constructor() {
		this.transactionService = new TransactionCacheService();
		this.sessionService = new SessionCacheService();
		this.subscriberService = new SubscriberCacheService();
	}
	receiveRequestFromNp = async (
		body: any,
		action: string,
		subscriberUrl: string,
		subscriberType: "BAP" | "BPP",
		loggerMeta: any
	): Promise<RequestProperties> => {
		logger.info(
			`Received request for action ${action} and transactionId ${body.context?.transaction_id} from subscriber ${subscriberUrl}`,
			loggerMeta
		);
		const txnId = body.context.transaction_id;
		if (
			await this.transactionService.checkIfTransactionExists(
				this.transactionService.createTransactionKey(txnId, subscriberUrl)
			)
		) {
			logger.info(
				`Transaction already exists for ${txnId} and subscriber ${subscriberUrl}`,
				loggerMeta
			);
			return await this.handleExistingTransaction(txnId, action, subscriberUrl);
		} else {
			if (await this.subscriberService.checkIfSubscriberExists(subscriberUrl)) {
				const subscriber =
					await this.subscriberService.loadSubscriberThatExists(subscriberUrl);
				const fulfilled = await this.tryFulfillExpectation(
					subscriber,
					subscriberUrl,
					action,
					loggerMeta
				);
				if (fulfilled) {
					const sessionData = await this.sessionService.loadSessionThatExists(
						fulfilled.sessionId
					);

					if (sessionData.flowMap[fulfilled.flowId] === undefined) {
						await this.assignTransactionToSession(
							fulfilled.sessionId,
							fulfilled.flowId,
							txnId
						);
					}
					logger.info(
						`Successfully fulfilled expectation for ${txnId} and subscriber ${subscriberUrl}`,
						loggerMeta
					);
					return {
						action: action,
						transactionId: txnId,
						subscriberUrl: subscriberUrl,
						subscriberType: subscriberType,
						defaultMode: false,
						sessionId: fulfilled.sessionId,
						flowId: fulfilled.flowId,
						difficulty: sessionData.sessionDifficulty,
						sessionData: sessionData,
						env: sessionData.env,
					};
				}
			}
			logger.info(
				"No existing transaction found, using default properties",
				loggerMeta
			);
			return await this.getDefaultProperties(
				action,
				txnId,
				subscriberUrl,
				subscriberType
			);
		}
	};

	receiveRequestFromMock = async (
		body: any,
		action: string,
		subscriberUrl: string,
		subscriberType: "BAP" | "BPP",
		loggerMeta: any,
		sessionId?: string,
		flowId?: string
	): Promise<RequestProperties> => {
		const txnId = body.context.transaction_id;
		if (
			await this.transactionService.checkIfTransactionExists(
				this.transactionService.createTransactionKey(txnId, subscriberUrl)
			)
		) {
			logger.info(
				`Transaction already exists for ${txnId} and subscriber ${subscriberUrl}`,
				loggerMeta
			);
			return await this.handleExistingTransaction(txnId, action, subscriberUrl);
		}

		logger.info(
			`Received request for action ${action} and transactionId ${txnId} from mock with session ${
				sessionId ?? "default"
			}`,
			loggerMeta
		);
		if (flowId && sessionId) {
			const session =
				await this.sessionService.loadSessionThatExists(sessionId);
			if (session.flowMap[flowId] === undefined) {
				await this.assignTransactionToSession(sessionId, flowId, txnId);
			}

			logger.info(
				`Transaction assigned to session ${sessionId} and flow ${flowId} for ${txnId} and subscriber ${subscriberUrl}`,
				loggerMeta
			);
			return {
				action: action,
				transactionId: txnId,
				subscriberUrl: subscriberUrl,
				subscriberType: subscriberType,
				defaultMode: false,
				sessionId: sessionId,
				flowId: flowId,
				difficulty: session.sessionDifficulty,
				env: session.env,
				sessionData: session,
			};
		}
		logger.info(
			"No existing transaction found, using default properties",
			loggerMeta
		);
		return await this.getDefaultProperties(
			action,
			txnId,
			subscriberUrl,
			subscriberType
		);
	};

	handleExistingTransaction = async (
		txnId: string,
		action: string,
		subscriberUrl: string
	) => {
		const transaction = await this.transactionService.loadTransactionThatExists(
			this.transactionService.createTransactionKey(txnId, subscriberUrl)
		);
		const relatedData = transaction;
		let difficulty = this.defaultDifficulties;
		let session: SessionCache | undefined = undefined;
		if (
			relatedData.sessionId &&
			(await this.sessionService.checkIfSessionExists(relatedData.sessionId))
		) {
			session = await this.sessionService.loadSessionThatExists(
				relatedData.sessionId
			);
			difficulty = session.sessionDifficulty;
		}
		const properties: RequestProperties = {
			action: action,
			transactionId: txnId,
			subscriberUrl: subscriberUrl,
			subscriberType: relatedData.subscriberType,
			defaultMode: relatedData.type === "default",
			sessionId: relatedData.sessionId,
			flowId: relatedData.flowId,
			difficulty: difficulty,
			transactionHistory: relatedData,
			sessionData: session,
			env: session?.env ?? "STAGING",
		};
		return properties;
	};

	tryFulfillExpectation = async (
		subscriber: SubscriberCache,
		subscriberUrl: string,
		action: string,
		loggerMeta: any
	) => {
		logger.info(
			`Trying to fulfill expectation for action ${action} in subscriber ${subscriberUrl}`,
			loggerMeta
		);
		let expectations = subscriber.activeSessions.filter(
			(e) => Date.now() < new Date(e.expireAt).getTime()
		);
		const target = expectations.find((exp) => exp.expectedAction === action);
		if (target) {
			logger.info(
				`FOUND! expectation for action ${action} in subscriber ${subscriberUrl}`,
				loggerMeta
			);
			expectations = expectations.filter((e) => e.expectedAction !== action);
			subscriber.activeSessions = expectations;
			await this.subscriberService.updateSubscriber(subscriber, subscriberUrl);
			return target;
		}
		logger.warning(
			`No expectation found for action ${action} in subscriber ${subscriberUrl}`,
			loggerMeta
		);
		await this.subscriberService.updateSubscriber(subscriber, subscriberUrl);
		return undefined;
	};

	assignTransactionToSession = async (
		sessionId: string,
		flowId: string,
		transactionId: string
	) => {
		await this.sessionService.updateSessionCache(
			sessionId,
			flowId,
			transactionId
		);
	};

	getDefaultProperties = async (
		action: string,
		transactionId: string,
		subscriberUrl: string,
		subscriberType: "BAP" | "BPP"
	) => {
		const defaultProp: RequestProperties = {
			difficulty: this.defaultDifficulties,
			env: "STAGING",
			defaultMode: true,
			action: action,
			transactionId: transactionId,
			subscriberType: subscriberType,
			subscriberUrl: subscriberUrl,
		};
		return defaultProp;
	};

	defaultDifficulties = {
		sensitiveTTL: true,
		useGateway: true,
		stopAfterFirstNack: false,
		protocolValidations: true,
		timeValidations: true,
		headerValidaton: true,
		useGzip: false,
	};
}

export class TransactionCacheService {
	tryLoadTransaction = async (transactionId: string, subscriberUrl: string) => {
		const key = this.createTransactionKey(transactionId, subscriberUrl);
		if (await this.checkIfTransactionExists(key)) {
			return this.loadTransactionThatExists(key);
		}
		return undefined;
	};
	checkIfTransactionExists = async (transSubKey: string) => {
		let exists = await RedisService.keyExists(transSubKey);
		return exists;
	};
	loadTransactionThatExists = async (transSubKey: string) => {
		const rawData = await RedisService.getKey(transSubKey);
		if (!rawData) {
			throw new Error(`Transaction with id ${transSubKey} not found`);
		}
		return JSON.parse(rawData) as TransactionCache;
	};
	updateTransactionCache = async (
		payloadID: string,
		requestBody: any,
		responseBody: any,
		subscriberUrl?: string
	) => {
		if (!subscriberUrl) {
			logger.error(`Subscriber url not provided for transaction cache update`, {
				transactionId: requestBody.context.transaction_id,
				action: requestBody.context.action,
			});
			return;
		}
		const txnId = requestBody.context.transaction_id;
		const key = this.createTransactionKey(txnId, subscriberUrl);
		if (await this.checkIfTransactionExists(key)) {
			const transaction = await this.loadTransactionThatExists(key);
			transaction.apiList.push({
				entryType: "API",
				action: requestBody.context.action,
				messageId: requestBody.context.message_id,
				payloadId: payloadID,
				response: responseBody,
				timestamp: requestBody.context.timestamp,
				ttl: isoDurationToSeconds(requestBody.context.ttl ?? "PT10M"),
			});
			transaction.latestAction = requestBody.context.action;
			transaction.latestTimestamp = requestBody.context.timestamp;
			await RedisService.setKey(key, JSON.stringify(transaction));
			await setFlowStatusService(txnId, subscriberUrl, "AVAILABLE");
		} else {
			logger.error(`Transaction with id ${txnId} not found`, {
				transactionId: txnId,
				action: requestBody.context.action,
				subscriberUrl: subscriberUrl,
			});
		}
	};
	createTransaction = async (
		transSubKey: string,
		request: RequestProperties,
		context: BecknContext
	) => {
		// ! this will over write already existing subscriber transaction
		const transaction: TransactionCache = {
			sessionId: request.sessionId,
			flowId: request.flowId,
			latestAction: "",
			subscriberType: request.subscriberType,
			latestTimestamp: new Date(0).toISOString(),
			type: request.defaultMode ? "default" : "manual",
			messageIds: [],
			apiList: [],
			referenceData: {},
		};
		await RedisService.setKey(transSubKey, JSON.stringify(transaction));
		return transaction;
	};
	createTransactionKey = (transactionId: string, subscriberUrl: string) => {
		// remove trailing slash from subscriber url
		subscriberUrl = subscriberUrl.replace(/\/$/, "");
		return `${transactionId.trim()}::${subscriberUrl.trim()}`;
	};
	overrideTransaction = async (
		subscriberUrl: string,
		transactionId: string,
		transaction: TransactionCache
	) => {
		const key = this.createTransactionKey(transactionId, subscriberUrl);
		await RedisService.setKey(key, JSON.stringify(transaction));
		await setFlowStatusService(transactionId, subscriberUrl, "AVAILABLE");
		logger.info(`Transaction with id ${transactionId} overridden`, {
			transactionId: transactionId,
			subscriberUrl: subscriberUrl,
		});
	};
}

export class SessionCacheService {
	checkIfSessionExists = async (sessionId?: string) => {
		if (!sessionId) {
			logger.error(`Session id is not provided`);
			return false;
		}
		const exists = await RedisService.keyExists(sessionId);
		return exists;
	};
	loadSessionThatExists = async (sessionId: string) => {
		const rawData = await RedisService.getKey(sessionId);
		if (!rawData) {
			throw new Error(`Session with id ${sessionId} not found`);
		}
		return JSON.parse(rawData) as SessionCache;
	};
	updateSessionCache = async (
		sessionId: string,
		flowId: string,
		transactionId: string
	) => {
		if ((await this.checkIfSessionExists(sessionId)) === false) {
			logger.warning(`Session with id ${sessionId} not found skipping update`, {
				sessionId,
				flowId,
				transactionId,
			});
			return;
		}
		const session = await this.loadSessionThatExists(sessionId);
		session.transactionIds.push(transactionId);
		session.flowMap[flowId] = transactionId;
		await RedisService.setKey(sessionId, JSON.stringify(session));
	};
}

export class SubscriberCacheService {
	checkIfSubscriberExists = async (subscriberUrl: string) => {
		const exists = await RedisService.keyExists(subscriberUrl);
		return exists;
	};
	loadSubscriberThatExists = async (subscriberUrl: string) => {
		const rawData = await RedisService.getKey(subscriberUrl);
		if (!rawData) {
			logger.error(`Subscriber with url ${subscriberUrl} not found`);
			throw new Error(`Subscriber with url ${subscriberUrl} not found`);
		}
		const data = JSON.parse(rawData) as SubscriberCache;
		if (data.activeSessions === undefined) {
			data.activeSessions = [];
		}
		return data;
	};
	updateSubscriber = async (
		subscriber: SubscriberCache,
		subscriberUrl: string
	) => {
		await RedisService.setKey(subscriberUrl, JSON.stringify(subscriber));
	};
}
