import { TransactionCacheService } from "./session-service-rewrite";
import logger from "@ondc/automation-logger";
export async function htmlFormService(
	transactionId: string,
	subscriberUrl: string,
	formId: string,
	loggerMeta: any,
	formType: "HTML_FORM" | "DYNAMIC_FORM",
	submissionId?: string,
	error?: any

) {
	logger.info("Processing form submission", loggerMeta, {
		transactionId,
		subscriberUrl,
		submissionId,
		formId,
		formType

	});
	const transactService = new TransactionCacheService();
	const transactionData = await transactService.tryLoadTransaction(
		transactionId,
		subscriberUrl
	);
	if (!transactionData) {
		throw new Error("Transaction data not found");
	}
	transactionData.apiList.push({
		entryType: "FORM",
		formId: formId,
		submissionId: submissionId,
		error: error,
		timestamp: new Date().toISOString(),
		formType
	});
	await transactService.overrideTransaction(
		subscriberUrl,
		transactionId,
		transactionData
	);
	logger.info("transactionData=>>>>>>>>>>>", transactionData);
	logger.info("HTML form submission processed successfully", loggerMeta, {
		transactionId,
		subscriberUrl,
		submissionId,
		formId,
	});
}
