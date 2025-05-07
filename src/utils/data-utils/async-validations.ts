import {
	apiProperties,
	supportedActions,
} from "../../config/supported-actions";
import { BecknContext } from "../../models/beckn-types";
import {
	ApiData,
	RequestProperties,
	TransactionCache,
} from "../../types/cache-types";
import { logger, logInfo } from "../logger";

export function validateAsyncContext(
	subject: BecknContext,
	transactionData: TransactionCache,
	requestProperties: RequestProperties
) {
	logInfo({
		message: "Entering validateAsyncContext Function",
		meta: {
			action: subject.action,
			transactionId: subject.transaction_id,	
			},
		transaction_id: subject.transaction_id,
	});
	const flowPayloads = transactionData.apiList;

	const allResponse = flowPayloads.map((payload) => payload.response);

	if (
		requestProperties.difficulty.stopAfterFirstNack &&
		!checkAllAck(allResponse)
	) {
		logInfo({
			message: "Exiting validateAsyncContext Function. Flow history already has a failed response",
			meta: {
				action: subject.action,
				transactionId: subject.transaction_id,
			},
			transaction_id: subject.transaction_id,
		});
		return {
			valid: false,
			error: `flow history already has a failed response`,
		};
	}

	const sortedContexts = flowPayloads
		.sort(
			(a, b) =>
				new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
		)
		.reverse();

	const subjectAction = subject.action;
	const predecessorName = getAsyncPredecessor(subjectAction);
	if (predecessorName) {
		const predecessor = sortedContexts.find(
			(context) => context.action === predecessorName
		);
		if (!predecessor) {
			logInfo({
				message: "Exiting validateAsyncContext Function. Predecessor not found in the flow history",
				meta: {
					action: subject.action,
					transactionId: subject.transaction_id,
				},
				transaction_id: subject.transaction_id,
			});
			return {
				valid: false,
				error: `${predecessorName} for ${subjectAction} not found in the flow history`,
			};
		}
		if (predecessor.messageId != subject.message_id) {
			logInfo({
				message: "Exiting validateAsyncContext Function. message_id mismatch between predecessor and subject",
				meta: {
					action: subject.action,
					transactionId: subject.transaction_id,
				},
				transaction_id: subject.transaction_id,
			});
			return {
				valid: false,
				error: `message_id mismatch between ${predecessorName} and ${subjectAction}
                expected ${predecessor.messageId} but found ${subject.message_id}`,
			};
		}
		const filteredContexts = sortedContexts
			.filter((c) => JSON.stringify(c) !== JSON.stringify(predecessor))
			.map((c) => c.messageId);
		if (filteredContexts.includes(subject.message_id)) {
			logInfo({
				message: "Exiting validateAsyncContext Function. Duplicate message_id found in the flow history",
				meta: {
					action: subject.action,
					transactionId: subject.transaction_id,
				},
				transaction_id: subject.transaction_id,
			});
			return {
				valid: false,
				error: `Duplicate message_id found in the flow history`,
			};
		}
	} else {
		const supportedActions = getSupportedActions(transactionData.latestAction);
		if (transactionData.messageIds.includes(subject.message_id)) {

			logInfo({
				message: "Exiting validateAsyncContext Function. Duplicate message_id found in the flow history",
				meta: {
					action: subject.action,
					transactionId: subject.transaction_id,
				},
				transaction_id: subject.transaction_id,
			});
			return {
				valid: false,
				error: `Duplicate message_id found in the flow history`,
			};
		}
		if (!supportedActions.includes(subjectAction)) {
			logInfo({
				message: `Exiting validateAsyncContext Function. ${subjectAction} not supported after ${transactionData.latestAction}`,
				meta: {
					action: subject.action,
					transactionId: subject.transaction_id,
				},
				transaction_id: subject.transaction_id,
			});
			return {
				valid: false,
				error: `${subjectAction} not supported after ${transactionData.latestAction}`,
			};
		}
	}
	logInfo({
		message: "Exiting validateAsyncContext Function. Calling validateTransactionId",
		meta: {
			action: subject.action,
			transactionId: subject.transaction_id,
		},
		transaction_id: subject.transaction_id,
	});
	return validateTransactionId(subjectAction, sortedContexts);
}

function validateTransactionId(action: string, sortedContexts: ApiData[]) {
	logInfo({
		message: "Entering validateTransactionId Function",
		meta: {
			action,
			sortedContexts,
		},
	});
	const transactionPartners = getTransactionPartners(action);
	const transactionContexts = findFirstMatches(
		sortedContexts,
		transactionPartners
	);
	const notFound = transactionPartners.filter(
		(partner) =>
			!transactionContexts.some((context) => context.action === partner)
	);
	if (notFound.length > 0) {
		logInfo({
			message: "Exiting validateTransactionId Function. Transaction partners not found in the transaction history",
			meta: {
				action,
				notFound,
			},
		});
		return {
			valid: false,
			error: `Transaction partners ${notFound.join(
				", "
			)} not found in the transaction history to proceed with ${action}`,
		};
	}
	logInfo({
		message: "Exiting validateTransactionId Function.",
		meta: {
			action,
			transactionPartners: transactionPartners,
		},
	});
	return {
		valid: true,
	};
}

function getAsyncPredecessor(action: string) {
	// logger.info("apiProperties :" + JSON.stringify(apiProperties));
	logInfo({
		message: "Entering getAsyncOredecessor function. " +"apiProperties :" + JSON.stringify(apiProperties),
		meta: {
			action,
		},
	});
	if (action in apiProperties) {
		logInfo({
			message: "Exiting getAsyncPredecessor function. Returning async predecessor",
			meta: {
				action,
			},
		});
		return apiProperties[action as keyof typeof apiProperties]
			.async_predecessor;
	}
	logInfo({
		message: "Exiting getAsyncPredecessor function. Returning null",
		meta: {
			action,
		},
	});
	return null;
}

function getSupportedActions(action: string) {
	// logger.info("supportedActions :" + JSON.stringify(supportedActions));
	logInfo({
		message: "Entering getSupportedActions function. " + "supportedActions :" + JSON.stringify(supportedActions),
		meta: {
			action,
		},
	});	
	if (action === "") {
		action = "null";
	}
	if (action in supportedActions) {
		return supportedActions[action as keyof typeof supportedActions];
	}
	return [] as string[];
}

function getTransactionPartners(action: string) {
	logInfo({
		message: "Entering getTransactionPartners function",
		meta: {
			action,
		},
	});
	if (action in apiProperties) {
		logInfo({
			message: "Exiting getTransactionPartners function. Returning transaction partners",
			meta: {
				action,
			},
		});
		return apiProperties[action as keyof typeof apiProperties]
			.transaction_partner;
	}
	logInfo({
		message: "Exiting getTransactionPartners function. Returning empty array",
		meta: {
			action,
		},
	});		
	return [] as string[];
}

function findFirstMatches(array: ApiData[], actions: string[]): ApiData[] {
	logInfo({
		message: "Entering findFirstMatches function",
		meta: {
			actions,
			},
	});
	const result: ApiData[] = [];
	const foundActions = new Set<string>();
	for (const item of array) {
		if (actions.includes(item.action) && !foundActions.has(item.action)) {
			result.push(item);
			foundActions.add(item.action);
		}
		// Stop early if all actions are found
		if (foundActions.size === actions.length) {
			break;
		}
	}
	logInfo({
		message: "Exiting findFirstMatches function",
		meta: {
			result,
		},
	});
	return result;
}

export function checkAllAck(responses: any[]) {
	logInfo({
		message: "Entering checkAllAck function. checking all ACK",
		meta: {
			responses,
		},
	});
	return responses.every((response) => {
		if (response?.message?.ack?.status === "ACK") {
			return true;
		}
		return false;
	});
}
