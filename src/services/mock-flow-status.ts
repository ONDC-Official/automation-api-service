import { RedisService } from "ondc-automation-cache-lib";
import { logError, logger, logInfo } from "../utils/logger";

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
	logInfo({
		message: "Inside createFlowStatus Function. Creating flow status cache key",
		meta: {
			transactionId,
			subscriberUrl,
		},
	});
	return `FLOW_STATUS_${transactionId}::${subscriberUrl}`;
}

export async function getFlowStatusService(
	transactionId: string,
	subscriberUrl: string
): Promise<MockFlowStatusCache> {
	logInfo({
		message: "Entering getFlowStatusService Function. Getting flow status from cache",
		meta: {
			transactionId,
			subscriberUrl,
		},
	});
	try {
		const key = createFlowStatusCacheKey(transactionId, subscriberUrl);
		if (await RedisService.keyExists(key)) {
			const flowStatus = await RedisService.getKey(key);
			if (flowStatus) {
				logInfo({
					message: "Flow status found in cache",
					meta: {
						transactionId,
						subscriberUrl,
						flowStatus,
					},
				});
				return JSON.parse(flowStatus) as MockFlowStatusCache;
			}
		}
		// logger.info;
		logInfo({
			message: "Flow status not found in cache, returning default status",
			meta: {
				transactionId,
				subscriberUrl,
			},
		});
		return {
			status: "AVAILABLE",
		};
	} catch (error) {
		// logger.error("Error in getting flow status", error);
		logError({
			message: "Error in getting flow status",
			error,
			meta: {
				transactionId,
				subscriberUrl,
			},
		});
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
	logInfo({
		message: "Entering setFlowStatusService Function. Setting flow status in cache",
		meta: {
			transactionId,
			subscriberUrl,
			flowStatus,
		},
	});
	try {
		const key = createFlowStatusCacheKey(transactionId, subscriberUrl);
		if (!(await RedisService.keyExists(key))) 
			{
				logInfo({
					message: "Exiting setFlowStatusService Function. Flow status not found in cache",
					meta: {
						transactionId,
						subscriberUrl,
					},
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
		logInfo({
			message: "Exiting setFlowStatusService Function. Flow status set in cache",
			meta: {
				transactionId,
				subscriberUrl,
				flowStatus,
			},
		});
	} catch (error) {
		// logger.error("Error in setting flow status", error);
		logError({
			message: "Error in setting flow status",
			error,
			meta: {
				transactionId,
				subscriberUrl,
				flowStatus,
			},
		});
	}
}

export async function deleteFlowStatusService(
	transactionId?: string,
	subscriberUrl?: string
) {
	logInfo({
		message: "Entering deleteFlowStatusService Function. Deleting flow status from cache",
		meta: {
			transactionId,
			subscriberUrl,
		},
	});
	if (!transactionId || !subscriberUrl) {
		// logger.error("Transaction ID or Subscriber URL is missing");
		logError({
			message: "Exiting deleteFlowStatusService Function. Transaction ID or Subscriber URL is missing",
			meta: {
				transactionId,
				subscriberUrl,
			},
		});
		return;
	}
	try {
		const key = createFlowStatusCacheKey(transactionId, subscriberUrl);
		if (await RedisService.keyExists(key)) {
			await RedisService.deleteKey(key);
			logInfo({
				message: "Exiting deleteFlowStatusService Function. Flow status found and deletedin cache",
				meta: {
					transactionId,
					subscriberUrl,
				},
			});
		}
		logError({
			message: "Exiting deleteFlowStatusService Function. Flow status not found in cache",
			meta: {
				transactionId,
				subscriberUrl,
			},
		});

	} catch (error) {
		// logger.error("Error in deleting flow status", error);
		logError({
			message: "Error in deleting flow status",
			error,
			meta: {
				transactionId,
				subscriberUrl,
			},
		});
	}
}
