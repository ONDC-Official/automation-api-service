import { RedisService } from "ondc-automation-cache-lib";
import logger from "@ondc/automation-logger";

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
				logger.info("Flow status found in cache", {
					transactionId,
					subscriberUrl,
					flowStatus,
				});
				return JSON.parse(flowStatus) as MockFlowStatusCache;
			}
		}
		logger.info("Flow status not found in cache, returning default status", {
			transactionId,
			subscriberUrl,
		});
		return {
			status: "AVAILABLE",
		};
	} catch (error: any) {
		logger.error(
			"Error in getting flow status",
			{
				transactionId,
				subscriberUrl,
			},
			error
		);
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
	logger.info("Setting flow status in cache", {
		transactionId,
		subscriberUrl,
		flowStatus,
	});
	try {
		const key = createFlowStatusCacheKey(transactionId, subscriberUrl);
		if (!(await RedisService.keyExists(key))) {
			logger.info("Flow status not found in cache", {
				transactionId,
				subscriberUrl,
			});
			return;
		}
		await RedisService.setKey(
			key,
			JSON.stringify({
				status: flowStatus,
			}),
			60 * 60 * 5
		);
		logger.info("Successfully set flow status in cache", {
			transactionId,
			subscriberUrl,
			flowStatus,
		});
	} catch (error: any) {
		logger.error(
			"Error in setting flow status",
			{
				transactionId,
				subscriberUrl,
				flowStatus,
			},
			error
		);
	}
}

export async function deleteFlowStatusService(
	transactionId?: string,
	subscriberUrl?: string
) {
	logger.info("Deleting flow status from cache", {
		transactionId,
		subscriberUrl,
	});
	if (!transactionId || !subscriberUrl) {
		logger.error("Transaction ID or Subscriber URL is missing", {
			transactionId,
			subscriberUrl,
		});
		return;
	}
	try {
		const key = createFlowStatusCacheKey(transactionId, subscriberUrl);
		if (await RedisService.keyExists(key)) {
			await RedisService.deleteKey(key);
			logger.info("Flow status found and deleted in cache", {
				transactionId,
				subscriberUrl,
			});
		}
		logger.info("Flow status not found in cache", {
			transactionId,
			subscriberUrl,
		});
	} catch (error: any) {
		logger.error(
			"Error in deleting flow status",
			{
				transactionId,
				subscriberUrl,
			},
			error
		);
	}
}
