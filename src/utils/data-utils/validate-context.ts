import { BecknContext } from "../../models/beckn-types";
import { validateAsyncContext } from "./async-validations";
import { logInfo } from "../logger";
import { RequestProperties } from "../../types/cache-types";
import { TransactionCacheService } from "../../services/session-service-rewrite";

export async function performContextValidations(
	context: BecknContext,
	apiProperties: RequestProperties
): Promise<{
	valid: boolean;
	error?: string;
}> {
	logInfo({
		message: "Entering performContextValidations Function",
		meta: {
			action: context.action,
			transactionId: context.transaction_id,
		},
		transaction_id: context.transaction_id,
	});
	const transService = new TransactionCacheService();
	let transactionData = await transService.tryLoadTransaction(
		apiProperties.transactionId,
		apiProperties.subscriberUrl
	);
	if (!transactionData) {
		// logger.info("Transaction not found, creating new transaction");
		logInfo({
			message: "Transaction not found, creating new transaction",
			meta: {
				action: context.action,
				transactionId: context.transaction_id,
			},
			transaction_id: context.transaction_id,
		});
		transactionData = await transService.createTransaction(
			transService.createTransactionKey(
				apiProperties.transactionId,
				apiProperties.subscriberUrl
			),
			apiProperties,
			context
		);
	}
	if (apiProperties.difficulty && apiProperties.difficulty.timeValidations) {
		if (
			new Date(context.timestamp).getTime() <=
			new Date(transactionData.latestTimestamp).getTime()
		) {
			logInfo({
				message:
					"Exiting performContextValidations Function. Invalid timestamp in context",
				meta: {
					action: context.action,
					transactionId: context.transaction_id,
					latestTimestamp: transactionData.latestTimestamp,
					latestAction: transactionData.latestAction,
					contextTimestamp: context.timestamp,
				},
				transaction_id: context.transaction_id,
			});
			return {
				valid: false,
				error: `Invalid timestamp in context should be greater than ${transactionData.latestTimestamp}
                of last ${transactionData.latestAction} action but got ${context.timestamp}`,
			};
		}
	} else {
		// logger.info("Time validations are disabled");
		logInfo({
			message: "Time validations are disabled",
			meta: {
				action: context.action,
				transactionId: context.transaction_id,
			},
			transaction_id: context.transaction_id,
		});
	}
	logInfo({
		message:
			"Exiting performContextValidations Function. Calling validateAsyncContext",
		meta: {
			action: context.action,
			transactionId: context.transaction_id,
		},
		transaction_id: context.transaction_id,
	});
	return validateAsyncContext(context, transactionData, apiProperties);
}

export function isValidJSON(input: string): boolean {
	try {
		JSON.parse(input);
		return true; // Input is valid JSON
	} catch (error) {
		return false; // Input is not valid JSON
	}
}
