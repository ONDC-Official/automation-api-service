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

export interface ContextValidationResult {
	valid: boolean;
	error?: string;
	forwardRequest: boolean;
}

export function validateAsyncContext(
	subject: BecknContext,
	transactionData: TransactionCache,
	requestProperties: RequestProperties,
	loggingMeta: any
): ContextValidationResult {
	logger.info("Validating Transaction History", loggingMeta);
	const flowPayloads = transactionData.apiList.filter(
		(item) => item.entryType === "API"
	) as ApiData[];

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
				forwardRequest: false,
			};
		}
		if (predecessor.messageId != subject.message_id) {
			logger.warning(
				`message_id mismatch between ${predecessorName} and ${subjectAction}`,
				loggingMeta
			);
			return {
				valid: false,
				forwardRequest: false,
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
				forwardRequest: false,
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
				forwardRequest: false,
			};
		}
		if (!supportedActions.includes(subjectAction)) {
			logger.warning(
				`${subjectAction} not supported after ${transactionData.latestAction}`,
				loggingMeta
			);
			return {
				forwardRequest: false,
				valid: false,
				error: `${subjectAction} not supported after ${transactionData.latestAction}`,
			};
		}
	}

	const ttlResult = validateTtl(
		subject,
		transactionData,
		requestProperties,
		loggingMeta
	);
	if (!ttlResult.valid) {
		return ttlResult;
	}
	return validateTransactionId(subjectAction, sortedContexts, loggingMeta);
}

function validateTransactionId(
	action: string,
	sortedContexts: ApiData[],
	loggingMeta: any
): ContextValidationResult {
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
			forwardRequest: false,
		};
	}
	logger.info("Transaction History Checks passed", loggingMeta);
	return {
		valid: true,
		forwardRequest: true,
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

export function validateTtl(
	subject: BecknContext,
	transactionData: TransactionCache,
	requestProperties: RequestProperties,
	loggingMeta: any
): ContextValidationResult {
	if (requestProperties.requestSource !== "NP") {
		logger.info(
			"Skipping TTL validation as request source is not NP",
			loggingMeta
		);
		return { valid: true, forwardRequest: true };
	}
	const action = subject.action;
	logger.info("Running TTL Validations for action: " + action, loggingMeta);
	if (!action.startsWith("on_")) {
		logger.info(
			"Skipping TTL validation for non-on_ action: " + action,
			loggingMeta
		);
		return { valid: true, forwardRequest: true };
	}
	// check if a <action> without 'on_' exists in the transaction history with same message_id
	const syncAction = action.replace("on_", "");
	const matchingContexts = transactionData.apiList.filter(
		(item) =>
			item.entryType === "API" &&
			item.action === syncAction &&
			item.messageId === subject.message_id
	) as ApiData[];
	if (matchingContexts.length === 0) {
		logger.warning(
			`No matching ${syncAction} found for ${action} with message_id: ${subject.message_id} , skipping TTL validation`,
			loggingMeta
		);
		return {
			valid: true,
			forwardRequest: true,
		};
	}
	const latestContext = matchingContexts.reduce((latest, current) => {
		return new Date(latest.timestamp) > new Date(current.timestamp)
			? latest
			: current;
	});
	const ttl = latestContext.ttl;
	if (ttl === undefined || ttl === null) {
		logger.warning(
			`No TTL defined for ${syncAction}, skipping TTL validation for ${action}`,
			loggingMeta
		);
		return { valid: true, forwardRequest: true };
	}
	const previousTimestamp = new Date(latestContext.timestamp).getTime(); // milliseconds since epoch
	const ttlExpiry = previousTimestamp + ttl * 1000; // Convert ttl to milliseconds
	const currentTimestamp = Math.floor(new Date(subject.timestamp).getTime());
	if (currentTimestamp > ttlExpiry) {
		logger.warning(
			`TTL expired for ${action}. Current timestamp: ${currentTimestamp}, TTL expiry: ${ttlExpiry}`,
			loggingMeta
		);
		return {
			valid: false,
			error: `TTL expired for ${action}. $.context.timestamp: ${new Date(currentTimestamp).toISOString()}, 
			TTL expiry: ${new Date(ttlExpiry).toISOString()}`,
			forwardRequest: true,
		};
	}
	logger.info(`TTL validation passed for ${action}`, loggingMeta);
	return { valid: true, forwardRequest: true };
}
