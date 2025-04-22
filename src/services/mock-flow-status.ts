import { RedisService } from "ondc-automation-cache-lib";
import logger from "../utils/logger";

// key : FLOW_STATUS_{transaction_id}::{subscriber_url}::{flow_id}
type MockStatusCode = "WORKING" | "AVAILABLE" | "SUSPENDED";
type MockFlowStatusCache = {
	// targetedAction: string;
	status: MockStatusCode;
};

export function createFlowStatusCacheKey(
	transactionId: string,
	subscriberUrl: string
) {
	return `FLOW_STATUS_${transactionId}::${subscriberUrl}`;
}

export async function getFlowStatusService(
	transactionId: string,
	subscriberUrl: string
): Promise<MockFlowStatusCache> {
	try {
		const key = createFlowStatusCacheKey(transactionId, subscriberUrl);
		if (await RedisService.keyExists(key)) {
			const flowStatus = await RedisService.getKey(key);
			if (flowStatus) {
				return JSON.parse(flowStatus) as MockFlowStatusCache;
			}
		}
		logger.info;
		return {
			status: "AVAILABLE",
		};
	} catch (error) {
		logger.error("Error in getting flow status", error);
		return {
			status: "AVAILABLE",
		};
	}
}

export async function setFlowStatusService(
	transactionId: string,
	subscriberUrl: string,
	flowStatus: MockStatusCode
) {
	try {
		const key = createFlowStatusCacheKey(transactionId, subscriberUrl);
		if (!(await RedisService.keyExists(key))) return;
		await RedisService.setKey(
			key,
			JSON.stringify({
				status: flowStatus,
			}),
			60 * 60 * 5
		);
	} catch (error) {
		logger.error("Error in setting flow status", error);
	}
}

export async function deleteFlowStatusService(
	transactionId?: string,
	subscriberUrl?: string
) {
	if (!transactionId || !subscriberUrl) {
		logger.error("Transaction ID or Subscriber URL is missing");
		return;
	}
	try {
		const key = createFlowStatusCacheKey(transactionId, subscriberUrl);
		if (await RedisService.keyExists(key)) {
			await RedisService.deleteKey(key);
		}
	} catch (error) {
		logger.error("Error in deleting flow status", error);
	}
}
