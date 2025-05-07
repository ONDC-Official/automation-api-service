import { RedisService } from "ondc-automation-cache-lib";
import { BecknContext } from "../../models/beckn-types";
import { SessionData } from "../../types/session-types";
import { logError, logger, logInfo } from "../logger";

export async function saveContextData(
	context: BecknContext,
	subscriberUrl: string
) {
	logInfo({
		message: "Entering saveContextData Function. Saving context data to cache",
		meta: {
			action: context.action,
			subscriberUrl,
			transactionId: context.transaction_id,
		},	
		transaction_id: context.transaction_id,
	});
	const sessionData = await loadData(subscriberUrl);
	if (sessionData === undefined) {
		// logger.info("Session data not found for subscriber URL: " + subscriberUrl);
		logInfo({
			message: "Exiting saveContextData Function. Session data not found for subscriber URL: skipping saving",
			meta: {
				subscriberUrl,
				action: context.action,
				transactionId: context.transaction_id,
			},
			transaction_id: context.transaction_id,
		});
		return;
	}
	if (!sessionData.current_flow_id) {
		// logger.error("Current flow id not found in session data");
		logInfo({
			message: "Exiting saveContextData Function. Current flow id not found in session data",
			meta: {
				subscriberUrl,
				action: context.action,
				transactionId: context.transaction_id,
			},
			transaction_id: context.transaction_id,
		});
		return;
	}
	sessionData.context_cache[sessionData.current_flow_id].latest_action =
		context.action;
	sessionData.context_cache[sessionData.current_flow_id].latest_timestamp =
		context.timestamp;
	sessionData.context_cache[sessionData.current_flow_id].message_ids.push(
		context.message_id
	);
	// logger.info("Saving context data to cache latest action", context.action);
	logInfo({
		message: "Exiting saveContextData Function. Saving context data to cache latest action",
		meta: {
			subscriberUrl,
			action: context.action,
			transactionId: context.transaction_id,
		},
		transaction_id: context.transaction_id,
	});
	await RedisService.setKey(subscriberUrl, JSON.stringify(sessionData));
}

export async function savePayloadData(
	context: BecknContext,
	response: any,
	requestID: string,
	subscriberUrl: string
) {
	logInfo({
		message: "Entering savePayloadData Function. Saving payload data to cache",
		meta: {
			action: context.action,
			subscriberUrl,
			transactionId: context.transaction_id,
		},
		transaction_id: context.transaction_id,
	});
	const sessionData = await loadData(subscriberUrl);
	if (sessionData === undefined) {
		// logger.info("Session data not found for subscriber URL: " + subscriberUrl);
		logInfo({
			message: "Exiting savePayloadData Function. Session data not found for subscriber URL: skipping saving",
			meta: {
				subscriberUrl,
				action: context.action,
				transactionId: context.transaction_id,
			},
			transaction_id: context.transaction_id,
		});
		return;
	}
	if (!sessionData.current_flow_id) {
		// logger.error("Current flow id not found in session data");
		logInfo({
			message: "Exiting savePayloadData Function. Current flow id not found in session data",
			meta: {
				subscriberUrl,
				action: context.action,
				transactionId: context.transaction_id,
			},
			transaction_id: context.transaction_id,
		});
		return;
	}
	if (
		!Array.isArray(sessionData.session_payloads[sessionData.current_flow_id])
	) {
		sessionData.session_payloads[sessionData.current_flow_id] = [];
	}
	if (!sessionData.session_payloads[sessionData.current_flow_id]) {
		sessionData.session_payloads[sessionData.current_flow_id] = [];
	}
	sessionData.session_payloads[sessionData.current_flow_id].push({
		request: context,
		payload_id: requestID,
		response: response,
	});
	await RedisService.setKey(subscriberUrl, JSON.stringify(sessionData));
	logInfo({
		message: "Exiting savePayloadData Function. Payload data saved to cache",
		meta: {
			subscriberUrl,
			action: context.action,
			transactionId: context.transaction_id,
		},
		transaction_id: context.transaction_id,
	});
}

export async function loadData(subscriberUrl: string) {
	logInfo({
		message: "Entering loadData Function. Loading data from cache",
		meta: {
			subscriberUrl,
		},
	});
	if (await RedisService.keyExists(subscriberUrl)) {
		// logger.info("Loading data from cache " + subscriberUrl);
		const data = await RedisService.getKey(subscriberUrl);
		logInfo({
			message: "Exiting loadData Function. Loading data from cache",
			meta: {
				subscriberUrl,
			},
		});
		return JSON.parse(data ?? "{}") as SessionData;
	}
	logInfo({
		message: "Exiting loadData Function. No data found in cache",
		meta: {
			subscriberUrl,
		},
	});
	return undefined;
}

export async function saveLog(
	sessionId: string,
	message: string,
	level: "info" | "error" | "debug" = "info"
) {
	logInfo({
		message: "Entering saveLog Function. Saving log to Redis",
		meta: {
			sessionId,
			message,
			level,
		},
	});
	try {
		const timestamp = new Date().toISOString();
		const logEntry = {
			timestamp,
			level,
			message,
		};

		// Get existing logs array or create new one
		let logs = [];
		const key = `consoleLogs:${sessionId}`;

		if (await RedisService.keyExists(key)) {
			const existingLogs = await RedisService.getKey(key);
			logs = JSON.parse(existingLogs ?? "[]");
		}

		// Add new log entry
		logs.push(logEntry);

		// Store updated logs
		await RedisService.setKey(key, JSON.stringify(logs));
		logInfo({
			message: "Exiting saveLog Function. Log saved to Redis",
			meta: {
				sessionId,
				message,
				level,
			},
		});
	} catch (error) {
		// logger.error("Error saving log to Redis:", error);
		logError({
			message: "Exiting saveLog Function. Error saving log to Redis",
			meta: {
				sessionId,
				message,
				level,
			},
			error,
		});	
	}
}

export async function getLogs(sessionId: string) {
	logInfo({
		message: "Entering getLogs Function. Retrieving logs from Redis",
		meta: {
			sessionId,
		},
	});
	try {
		const key = `consoleLogs:${sessionId}`;
		const logs = await RedisService.getKey(key);
		logInfo({
			message: "Exiting getLogs Function. Logs retrieved from Redis",
			meta: {
				sessionId,
				logs,
			},
		});
		return JSON.parse(logs ?? "[]");
	} catch (error) {
		// logger.error("Error getting logs from Redis:", error);
		logError({
			message: "Exiting getLogs Function. Error getting logs from Redis",
			meta: {
				sessionId,
			},
			error,
		});
		return [];
	}
}

export async function demoLogFunctionality() {
	const testTransactionId = "demo-transaction-" + Date.now();

	// Test saving different log levels
	await saveLog(testTransactionId, "Starting demo test", "info");
	await saveLog(testTransactionId, "This is a debug message", "debug");
	await saveLog(testTransactionId, "This is an error message", "error");

	// Small delay to ensure logs are saved
	await new Promise((resolve) => setTimeout(resolve, 100));

	// Retrieve and print logs
	const logs = await getLogs(testTransactionId);
	console.log("Retrieved logs:", JSON.stringify(logs, null, 2));

	return logs;
}
