import { BecknContext } from "../../models/beckn-types";
import { validateAsyncContext } from "./async-validations";
import logger from "@ondc/automation-logger";
import { RequestProperties } from "../../types/cache-types";
import { TransactionCacheService } from "../../services/session-service-rewrite";

export async function performContextValidations(
	context: BecknContext,
	apiProperties: RequestProperties,
	loggingMeta: any
): Promise<{
	valid: boolean;
	error?: string;
}> {
	logger.info(`Running Context Validations`, loggingMeta);
	const transService = new TransactionCacheService();
	let transactionData = await transService.tryLoadTransaction(
		apiProperties.transactionId,
		apiProperties.subscriberUrl
	);
	if (!transactionData) {
		logger.info("Transaction not found, creating new transaction", loggingMeta);
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
			const errorMessage = `Invalid timestamp in context should be greater than ${transactionData.latestTimestamp} of last ${transactionData.latestAction} action but got ${context.timestamp}`;
			logger.warning("Invalid timestamp in context", {
				...loggingMeta,
				error: errorMessage,
			});
			return {
				valid: false,
				error: errorMessage,
			};
		}
	} else {
		logger.info("Skipping timestamp validation as difficulty.", loggingMeta);
	}
	return validateAsyncContext(
		context,
		transactionData,
		apiProperties,
		loggingMeta
	);
}

export function isValidJSON(input: string): boolean {
	try {
		JSON.parse(input);
		return true; // Input is valid JSON
	} catch (error) {
		return false; // Input is not valid JSON
	}
}
