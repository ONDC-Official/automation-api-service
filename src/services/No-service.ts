import logger from "@ondc/automation-logger";
import axios from "../utils/axios";
import { ApiServiceRequest } from "../types/request-types";
import { getLoggerMetaData } from "../utils/loggingUtils";

export function sendLogsToNo(req: ApiServiceRequest, body: any) {
	if (req.body.context) {
		postLogsToNoService(
			getNoType("request", req.body),
			req.body,
			getLoggerMetaData(req)
		);
		if (!body.context) {
			postLogsToNoService(
				getNoType("response", req.body),
				{ ...body, context: req.body.context },
				getLoggerMetaData(req)
			);
		} else {
			postLogsToNoService(
				getNoType("response", body),
				body,
				getLoggerMetaData(req)
			);
		}
	} else {
		logger.warning("Context not found in the payload skipping NO logs");
	}
}

export async function postLogsToNoService(
	type: string | undefined,
	payload: any,
	loggerMeta: any
) {
	try {
		logger.info("Posting logs to No", { type }, loggerMeta);
		if (!type) {
			throw new Error("Type is undefined");
		}
		if (process.env.HOSTED_ENV !== "STAGING") {
			logger.info(
				"Skipping posting logs to No in non-staging environment",
				loggerMeta
			);
			return;
		}

		const noUrl = process.env.NO_URL;
		const noToken = process.env.NO_TOKEN;

		if (!noUrl || !noToken) {
			logger.error("No-service URL or token not configured", loggerMeta);
			return;
		}

		const body = {
			type: type,
			data: payload,
		};
		const endpoint = "v1/api/push-txn-logs";
		const completeUrl = noUrl.endsWith("/")
			? noUrl + endpoint
			: noUrl + "/" + endpoint;
		const res = await axios.post(completeUrl, body, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${noToken}`,
			},
		});
		logger.info(
			"Logs posted to No-service for type " + type,
			{ noResponse: res.data },
			loggerMeta
		);
	} catch (err) {
		logger.error(
			"Error in posting logs to No-service for type " + type,
			loggerMeta
		);
		logger.error("Error in posting logs to No-service", {}, err);
		return;
	}
}

export function getNoType(
	dataType: "request" | "response",
	payload: any
): string | undefined {
	const action = payload?.context?.action;
	if (!action) {
		logger.error("Action not found in payload, cannot determine No type", {
			payload,
		});
		return undefined;
	}
	if (dataType === "request") {
		return action;
	} else if (dataType === "response") {
		return action + "_response";
	}
}
