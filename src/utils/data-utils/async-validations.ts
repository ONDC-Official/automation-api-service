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
import logger from "@ondc/automation-logger";

export function validateAsyncContext(
	subject: BecknContext,
	transactionData: TransactionCache,
	requestProperties: RequestProperties,
	loggingMeta: any
) {
	logger.info("Validating Transaction History", loggingMeta);
	const flowPayloads = transactionData.apiList.filter(
		(item) => item.entryType === "API"
	) as ApiData[];
	const allResponse = flowPayloads.map((payload) => payload.response);

	if (
		requestProperties.difficulty.stopAfterFirstNack &&
		!checkAllAck(allResponse)
	) {
		logger.warning("Transaction history has a failed response", loggingMeta);
		return {
			valid: false,
			error: `Transaction history already has a failed response`,
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
			logger.warning(
				`${predecessorName} for ${subjectAction} not found in the flow history`,
				loggingMeta
			);
			return {
				valid: false,
				error: `${predecessorName} for ${subjectAction} not found in the flow history`,
			};
		}
		if (predecessor.messageId != subject.message_id) {
			logger.warning(
				`message_id mismatch between ${predecessorName} and ${subjectAction}`,
				loggingMeta
			);
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
			logger.warning(
				"Duplicate message_id found in the flow history",
				loggingMeta
			);
			return {
				valid: false,
				error: `Duplicate message_id found in the transaction history, ${subject.message_id}`,
			};
		}
	} else {
		const supportedActions = getSupportedActions(transactionData.latestAction);
		if (transactionData.messageIds.includes(subject.message_id)) {
			logger.warning(
				"Duplicate message_id found in the flow history",
				loggingMeta
			);
			return {
				valid: false,
				error: `Duplicate message_id found in the flow history`,
			};
		}
		if (!supportedActions.includes(subjectAction)) {
			logger.warning(
				`${subjectAction} not supported after ${transactionData.latestAction}`,
				loggingMeta
			);
			return {
				valid: false,
				error: `${subjectAction} not supported after ${transactionData.latestAction}`,
			};
		}
	}
	return validateTransactionId(subjectAction, sortedContexts, loggingMeta);
}

function validateTransactionId(
	action: string,
	sortedContexts: ApiData[],
	loggingMeta: any
) {
	logger.info("Running Transaction Id Checks", loggingMeta);
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
		logger.warning(
			`Transaction partners ${notFound.join(
				", "
			)} not found in the transaction history to proceed with ${action}`,
			loggingMeta
		);
		return {
			valid: false,
			error: `Transaction partners ${notFound.join(
				", "
			)} not found in the transaction history to proceed with ${action}`,
		};
	}
	logger.info("Transaction History Checks passed", loggingMeta);
	return {
		valid: true,
	};
}

function getAsyncPredecessor(action: string) {
	if (action in apiProperties) {
		return apiProperties[action as keyof typeof apiProperties]
			.async_predecessor;
	}
	return null;
}

function getSupportedActions(action: string) {
	if (action === "") {
		action = "null";
	}
	if (action in supportedActions) {
		return supportedActions[action as keyof typeof supportedActions];
	}
	return [] as string[];
}

function getTransactionPartners(action: string) {
	if (action in apiProperties) {
		return apiProperties[action as keyof typeof apiProperties]
			.transaction_partner;
	}
	return [] as string[];
}

function findFirstMatches(array: ApiData[], actions: string[]): ApiData[] {
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
	return result;
}

export function checkAllAck(responses: any[]) {
	return responses.every((response) => {
		if (response?.message?.ack?.status === "ACK") {
			return true;
		}
		return false;
	});
}
