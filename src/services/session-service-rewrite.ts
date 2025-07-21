import { RedisService } from "ondc-automation-cache-lib";
import { logError, logger, logInfo } from "../utils/logger";
import {
	Expectation,
	RequestProperties,
	SessionCache,
	SubscriberCache,
	TransactionCache,
} from "../types/cache-types";
import { BecknContext } from "../models/beckn-types";
import { setFlowStatusService } from "./mock-flow-status";

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
		subscriberType: "BAP" | "BPP"
	): Promise<RequestProperties> => {
		logInfo({
			message: `Received request for action ${action} and transactionId ${body.context?.transaction_id} from subscriber ${subscriberUrl}`,
			meta: {
				action,
				subscriberUrl,
				subscriberType,
			},
			transaction_id: body.context?.transaction_id,
		});
		const txnId = body.context.transaction_id;
		if (
			await this.transactionService.checkIfTransactionExists(
				this.transactionService.createTransactionKey(txnId, subscriberUrl)
			)
		) {
			logInfo({
				message: `Transaction already exists for ${txnId} and subscriber ${subscriberUrl}`,
				meta: {
					action,
					subscriberUrl,
					subscriberType,
				},
				transaction_id: body.context?.transaction_id,
			});
			return await this.handleExistingTransaction(txnId, action, subscriberUrl);
		} else {
			if (await this.subscriberService.checkIfSubscriberExists(subscriberUrl)) {
				const subscriber =
					await this.subscriberService.loadSubscriberThatExists(subscriberUrl);
				const fulfilled = await this.tryFulfillExpectation(
					subscriber,
					subscriberUrl,
					action
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
					logInfo({
						message: `Exiting receiveRequestFromNp Function.  Successfully fulfilled expectation for ${txnId} and subscriber ${subscriberUrl}`,
						meta: {
							action,
							subscriberUrl,
							subscriberType,
						},
						transaction_id: body.context?.transaction_id,
					});
					return {
						action: action,
						transactionId: txnId,
						subscriberUrl: subscriberUrl,
						subscriberType: subscriberType,
						defaultMode: false,
						sessionId: fulfilled.sessionId,
						flowId: fulfilled.flowId,
						difficulty: sessionData.sessionDifficulty,
						env: sessionData.env,
					};
				}
			}
			logInfo({
				message: `Exiting receiveRequestFromNp Function.`,
				meta: {
					action,
					subscriberUrl,
					subscriberType,
				},
				transaction_id: body.context?.transaction_id,
			});
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
		sessionId?: string,
		flowId?: string
	): Promise<RequestProperties> => {
		logInfo({
			message: `Entering receiveRequestFromMock Function.`,
			meta: {
				action,
				subscriberUrl,
				subscriberType,
				sessionId,
				flowId,
			},
			transaction_id: body.context?.transaction_id,
		});
		const txnId = body.context.transaction_id;
		if (
			await this.transactionService.checkIfTransactionExists(
				this.transactionService.createTransactionKey(txnId, subscriberUrl)
			)
		) {
			logInfo({
				message: `Exiting receiveRequestFromMock Function.  Transaction already exists for ${txnId} and subscriber ${subscriberUrl}`,
				meta: {
					action,
					subscriberUrl,
					subscriberType,
				},
				transaction_id: body.context?.transaction_id,
			});
			return await this.handleExistingTransaction(txnId, action, subscriberUrl);
		}

		logInfo({
			message: `Received request for action ${action} and transactionId ${txnId} from mock with session ${
				sessionId ?? "default"
			}`,
			meta: {
				action,
				subscriberUrl,
				subscriberType,
			},
			transaction_id: body.context?.transaction_id,
		});
		if (flowId && sessionId) {
			const session =
				await this.sessionService.loadSessionThatExists(sessionId);
			if (session.flowMap[flowId] === undefined) {
				await this.assignTransactionToSession(sessionId, flowId, txnId);
			}
			logInfo({
				message: `Transaction assigned to session ${sessionId} and
				flow ${flowId} for ${txnId} and subscriber ${subscriberUrl}`,
				meta: {
					action,
					subscriberUrl,
					subscriberType,
					sessionId,
					flowId,
				},
				transaction_id: body.context?.transaction_id,
			});
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
		logInfo({
			message: `Exiting receiveRequestFromMock Function.`,
			meta: {
				action,
				subscriberUrl,
				subscriberType,
				sessionId,
				flowId,
			},
			transaction_id: body.context?.transaction_id,
		});
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
		logInfo({
			message: `Entering handleExistingTransaction Function.`,
			meta: {
				txnId,
				action,
				subscriberUrl,
			},
			transaction_id: txnId,
		});
		const transaction = await this.transactionService.loadTransactionThatExists(
			this.transactionService.createTransactionKey(txnId, subscriberUrl)
		);
		const relatedData = transaction;
		logInfo({
			message: `Transaction exists with id ${txnId}`,
			meta: {
				txnId,
				action,
				subscriberUrl,
			},
			transaction_id: txnId,
		});
		let difficulty = this.defaultDifficulties;
		let session: SessionCache | undefined = undefined;
		if (
			relatedData.sessionId &&
			(await this.sessionService.checkIfSessionExists(relatedData.sessionId))
		) {
			session = await this.sessionService.loadSessionThatExists(
				relatedData.sessionId as string
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
		};
		return properties;
	};

	tryFulfillExpectation = async (
		subscriber: SubscriberCache,
		subscriberUrl: string,
		action: string
	) => {
		// logger.info(
		// 	`trying to fulfill expectation for action ${action} in subscriber ${subscriberUrl}`
		// );
		logInfo({
			message: `Entering tryFulfillExpectation Function. Trying to fulfill expectation for action ${action} in subscriber ${subscriberUrl}`,
			meta: {
				action,
				subscriberUrl,
			},
		});
		let expectations = subscriber.activeSessions.filter(
			(e) => Date.now() < new Date(e.expireAt).getTime()
		);
		const target = expectations.find((exp) => exp.expectedAction === action);
		if (target) {
			// logger.info(
			// 	`FOUND! expectation for action ${action} in subscriber ${subscriberUrl}`
			// );
			logInfo({
				message: `Found expectation for action ${action} in subscriber ${subscriberUrl}`,
				meta: {
					action,
					subscriberUrl,
				},
			});
			expectations = expectations.filter((e) => e.expectedAction !== action);
			subscriber.activeSessions = expectations;
			await this.subscriberService.updateSubscriber(subscriber, subscriberUrl);
			logInfo({
				message: `Exiting tryFulfillExpectation Function.`,
				meta: {
					action,
					subscriberUrl,
				},
			});
			return target;
		}
		await this.subscriberService.updateSubscriber(subscriber, subscriberUrl);
		logInfo({
			message: `Exiting tryFulfillExpectation Function.`,
			meta: {
				action,
				subscriberUrl,
			},
		});
		return undefined;
	};

	assignTransactionToSession = async (
		sessionId: string,
		flowId: string,
		transactionId: string
	) => {
		logInfo({
			message: `Entering assignTransactionToSession Function.`,
			meta: {
				sessionId,
				flowId,
				transactionId,
			},
			transaction_id: transactionId,
		});
		await this.sessionService.updateSessionCache(
			sessionId,
			flowId,
			transactionId
		);
		logInfo({
			message: `Exiting assignTransactionToSession Function.`,
			meta: {
				sessionId,
				flowId,
				transactionId,
			},
			transaction_id: transactionId,
		});
	};

	getDefaultProperties = async (
		action: string,
		transactionId: string,
		subscriberUrl: string,
		subscriberType: "BAP" | "BPP"
	) => {
		logInfo({
			message: `Entering getDefaultProperties Function.`,
			meta: {
				action,
				transactionId,
				subscriberUrl,
				subscriberType,
			},
			transaction_id: transactionId,
		});
		const defaultProp: RequestProperties = {
			difficulty: this.defaultDifficulties,
			env: "STAGING",
			defaultMode: true,
			action: action,
			transactionId: transactionId,
			subscriberType: subscriberType,
			subscriberUrl: subscriberUrl,
		};
		logInfo({
			message: `Exiting getDefaultProperties Function.`,
			meta: {
				action,
				transactionId,
				subscriberUrl,
				subscriberType,
			},
			transaction_id: transactionId,
		});

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
		logInfo({
			message: `Entering tryLoadTransaction Function.`,
			meta: {
				transactionId,
				subscriberUrl,
			},
		});

		const key = this.createTransactionKey(transactionId, subscriberUrl);
		if (await this.checkIfTransactionExists(key)) {
			logInfo({
				message: `Exiting tryLoadTransaction Function. Transaction with id ${transactionId} found`,
				meta: {
					transactionId,
					subscriberUrl,
				},
			});
			return this.loadTransactionThatExists(key);
		}
		logInfo({
			message: `Exiting tryLoadTransaction Function. Transaction with id ${transactionId} not found`,
			meta: {
				transactionId,
				subscriberUrl,
			},
		});
		return undefined;
	};
	checkIfTransactionExists = async (transSubKey: string) => {
		logInfo({
			message: `Entering checkIfTransactionExists Function.`,
			meta: {
				transSubKey,
			},
		});
		let exists = await RedisService.keyExists(transSubKey);
		// logger.info(
		// 	`cache for transaction with id ${transSubKey} exists ${exists}`
		// );
		logInfo({
			message: `Cache for transaction with id ${transSubKey} exists ${exists}`,
			meta: {
				transSubKey,
			},
		});
		logInfo({
			message: `Exiting checkIfTransactionExists Function.`,
			meta: {
				transSubKey,
			},
		});
		return exists;
	};
	loadTransactionThatExists = async (transSubKey: string) => {
		logInfo({
			message: `Entering loadTransactionThatExists Function.`,
			meta: {
				transSubKey,
			},
		});
		const rawData = await RedisService.getKey(transSubKey);
		if (!rawData) {
			// logger.error(`Transaction with id ${transSubKey} not found`);
			logInfo({
				message: `Exiting loadTransactionThatExists Function. Transaction with id ${transSubKey} not found`,
				meta: {
					transSubKey,
				},
			});
			throw new Error(`Transaction with id ${transSubKey} not found`);
		}
		logInfo({
			message: `Exiting loadTransactionThatExists Function.`,
			meta: {
				transSubKey,
			},
		});
		return JSON.parse(rawData) as TransactionCache;
	};
	updateTransactionCache = async (
		payloadID: string,
		requestBody: any,
		responseBody: any,
		subscriberUrl?: string
	) => {
		logInfo({
			message: `Entering updateTransactionCache Function.`,
			meta: {
				payloadID,
				requestBody,
				responseBody,
				subscriberUrl,
			},
			transaction_id: requestBody.context.transaction_id,
		});

		if (!subscriberUrl) {
			// logger.error(`Subscriber url not provided for transaction cache update`);
			logInfo({
				message: `Exiting updateTransactionCache Function. Subscriber url not provided for transaction cache update`,
				meta: {
					payloadID,
					requestBody,
					responseBody,
					subscriberUrl,
				},
				transaction_id: requestBody.context.transaction_id,
			});
			return;
		}
		const txnId = requestBody.context.transaction_id;
		const key = this.createTransactionKey(txnId, subscriberUrl);
		if (await this.checkIfTransactionExists(key)) {
			const transaction = await this.loadTransactionThatExists(key);
			transaction.apiList.push({
				action: requestBody.context.action,
				messageId: requestBody.context.message_id,
				payloadId: payloadID,
				response: responseBody,
				timestamp: requestBody.context.timestamp,
			});
			transaction.latestAction = requestBody.context.action;
			transaction.latestTimestamp = requestBody.context.timestamp;
			// logger.info(`updated transaction with id ${txnId}`);
			await RedisService.setKey(key, JSON.stringify(transaction));
			await setFlowStatusService(txnId, subscriberUrl, "AVAILABLE");
			logInfo({
				message: `Exiting updateTransactionCache Function. Transaction with id ${txnId} updated`,
				meta: {
					payloadID,
					requestBody,
					responseBody,
					subscriberUrl,
				},
				transaction_id: requestBody.context.transaction_id,
			});
		} else {
			// logger.error(`Transaction with id ${txnId} not found`);
			logInfo({
				message: `Exiting updateTransactionCache Function. Transaction with id ${txnId} not found`,
				meta: {
					payloadID,
					requestBody,
					responseBody,
					subscriberUrl,
				},
				transaction_id: requestBody.context.transaction_id,
			});
		}
	};
	createTransaction = async (
		transSubKey: string,
		request: RequestProperties,
		context: BecknContext
	) => {
		logInfo({
			message: `Entering createTransaction Function.`,
			meta: {
				transSubKey,
				request,
				context,
			},
			transaction_id: context.transaction_id,
		});
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
		};
		await RedisService.setKey(transSubKey, JSON.stringify(transaction));
		// logger.info(`created transaction with id ${transSubKey}`);
		logInfo({
			message: `Exiting createTransaction Function. Transaction with id ${transSubKey} created`,
			meta: {
				transSubKey,
				request,
				context,
			},
			transaction_id: context.transaction_id,
		});
		return transaction;
	};
	createTransactionKey = (transactionId: string, subscriberUrl: string) => {
		logInfo({
			message: `Inside createTransactionKey Function.`,
			meta: {
				transactionId,
				subscriberUrl,
			},
		});
		return `${transactionId.trim()}::${subscriberUrl.trim()}`;
	};
}

export class SessionCacheService {
	checkIfSessionExists = async (sessionId?: string) => {
		logInfo({
			message: `Entering checkIfSessionExists Function.`,
			meta: {
				sessionId,
			},
		});
		if (!sessionId) {
			// logger.error(`Session id is not provided`);
			logInfo({
				message: `Exiting checkIfSessionExists Function. Session id is not provided`,
				meta: {
					sessionId,
				},
			});
			return false;
		}
		const exists = await RedisService.keyExists(sessionId);
		// logger.info(`cache for session with id ${sessionId} exists ${exists}`);
		logInfo({
			message: `Exiting checkIfSessionExists Function. Cache for session with id ${sessionId} exists ${exists}`,
			meta: {
				sessionId,
			},
		});
		return exists;
	};
	loadSessionThatExists = async (sessionId: string) => {
		logInfo({
			message: `Entering loadSessionThatExists Function.`,
			meta: {
				sessionId,
			},
		});
		const rawData = await RedisService.getKey(sessionId);
		if (!rawData) {
			// logger.error(`Session with id ${sessionId} not found`);
			logInfo({
				message: `Exiting loadSessionThatExists Function. Session with id ${sessionId} not found`,
				meta: {
					sessionId,
				},
			});
			throw new Error(`Session with id ${sessionId} not found`);
		}
		logInfo({
			message: `Exiting loadSessionThatExists Function.`,
			meta: {
				sessionId,
			},
		});
		return JSON.parse(rawData) as SessionCache;
	};
	updateSessionCache = async (
		sessionId: string,
		flowId: string,
		transactionId: string
	) => {
		logInfo({
			message: `Entering updateSessionCache Function.`,
			meta: {
				sessionId,
				flowId,
				transactionId,
			},
			transaction_id: transactionId,
		});
		if ((await this.checkIfSessionExists(sessionId)) === false) {
			// logger.warn(`Session with id ${sessionId} not found skipping update`);
			logInfo({
				message: `Exiting updateSessionCache Function. Session with id ${sessionId} not found skipping update`,
				meta: {
					sessionId,
					flowId,
					transactionId,
				},
				transaction_id: transactionId,
			});
			return;
		}
		const session = await this.loadSessionThatExists(sessionId);
		session.transactionIds.push(transactionId);
		session.flowMap[flowId] = transactionId;
		await RedisService.setKey(sessionId, JSON.stringify(session));
		// logger.info(`updated session with id ${sessionId}`);
		logInfo({
			message: `Exiting updateSessionCache Function. Session with id ${sessionId} updated`,
			meta: {
				sessionId,
				flowId,
				transactionId,
			},
			transaction_id: transactionId,
		});
	};
}

export class SubscriberCacheService {
	checkIfSubscriberExists = async (subscriberUrl: string) => {
		logInfo({
			message: `Entering checkIfSubscriberExists Function.`,
			meta: {
				subscriberUrl,
			},
		});
		const exists = await RedisService.keyExists(subscriberUrl);
		// logger.info(
		// 	`cache for subscriber with url ${subscriberUrl} exists ${exists}`
		// );
		logInfo({
			message: `Cache for subscriber with url ${subscriberUrl} exists ${exists}`,
			meta: {
				subscriberUrl,
			},
		});
		logInfo({
			message: `Exiting checkIfSubscriberExists Function.`,
			meta: {
				subscriberUrl,
			},
		});
		return exists;
	};
	loadSubscriberThatExists = async (subscriberUrl: string) => {
		logInfo({
			message: `Entering loadSubscriberThatExists Function.`,
			meta: {
				subscriberUrl,
			},
		});

		const rawData = await RedisService.getKey(subscriberUrl);
		if (!rawData) {
			// logger.error(`Subscriber with url ${subscriberUrl} not found`);
			logInfo({
				message: `Exiting loadSubscriberThatExists Function. Subscriber with url ${subscriberUrl} not found`,
				meta: {
					subscriberUrl,
				},
			});
			throw new Error(`Subscriber with url ${subscriberUrl} not found`);
		}

		const data = JSON.parse(rawData) as SubscriberCache;
		if (data.activeSessions === undefined) {
			data.activeSessions = [];
		}
		logInfo({
			message: `Exiting loadSubscriberThatExists Function.`,
			meta: {
				subscriberUrl,
			},
		});
		return data;
	};
	updateSubscriber = async (
		subscriber: SubscriberCache,
		subscriberUrl: string
	) => {
		logInfo({
			message: `Entering updateSubscriber Function.`,
			meta: {
				subscriberUrl,
			},
		});
		await RedisService.setKey(subscriberUrl, JSON.stringify(subscriber));
		// logger.info(`updated subscriber with url ${subscriberUrl}`);
		logInfo({
			message: `Exiting updateSubscriber Function.`,
			meta: {
				subscriberUrl,
			},
		});
	};
}
