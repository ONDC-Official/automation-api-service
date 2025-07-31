import axios from "../utils/axios";
import { BecknContext } from "../models/beckn-types";
import logger from "@ondc/automation-logger";
import { createAuthHeader } from "../utils/headerUtils";
import { config } from "../config/registryGatewayConfig";
import { getAxiosErrorMessage } from "../utils/axiosUtils";
import { RequestProperties } from "../types/cache-types";
import * as zlib from "zlib";
export class CommunicationService {
	forwardApiToMock = async (
		body: any,
		loggingMeta: any,
		requestProperties?: RequestProperties
	) => {
		let url = process.env.MOCK_SERVER_URL;
		const domain = process.env.DOMAIN;
		const version = process.env.VERSION;
		url = `${url}/${domain}/${version}`;
		const action = requestProperties?.action ?? body.context.action;
		if (requestProperties?.defaultMode === false) {
			url = `${url}/manual/${action}`;
		} else {
			url = `${url}/mock/${action}`;
		}
		logger.info("Forwarding request to Mock server to url " + url, loggingMeta);
		return await axios.post(url, body, {
			headers: {
				"X-Request-ID": loggingMeta.correlationId,
			},
		});
	};
	forwardApiToNp = async (
		body: any,
		action: string,
		loggingMeta: any,
		overwriteUrl?: string,
		requestProperties?: RequestProperties
	) => {
		const context: BecknContext = body.context;
		let finalUri = context.action.startsWith("on_")
			? context.bap_uri
			: context.bpp_uri;
		if (overwriteUrl) finalUri = overwriteUrl;
		logger.info("Forwarding request to NP server " + finalUri, loggingMeta);
		if (!requestProperties?.env) {
			logger.error(
				"Environment not specified in request properties",
				loggingMeta
			);
			throw new Error("Environment not specified in request properties");
		}
		const header = await createAuthHeader(
			body,
			requestProperties?.env,
			loggingMeta
		);
		let useGzip = false;
		if (requestProperties?.difficulty.useGzip && action.startsWith("on_")) {
			useGzip = true;
		}
		let bodyToSend = body;
		if (useGzip) {
			logger.info("Compressing request body using gzip", loggingMeta, {
				npUri: finalUri,
			});
			let b = zlib.gzipSync(JSON.stringify(body));
			bodyToSend = b;
		}
		try {
			logger.info("Forwarding request to NP server " + finalUri, loggingMeta, {
				body: bodyToSend,
			});
			const response = await axios.post(`${finalUri}/${action}`, bodyToSend, {
				headers: {
					Authorization: header,
					"Content-Type": useGzip ? "application/gzip" : "application/json",
					"Content-Encoding": useGzip ? "gzip" : undefined,
					"X-Request-ID": loggingMeta.correlationId,
				},
			});
			logger.info("Request forwarded to NP server successfully", {
				...loggingMeta,
				forwardedTo: finalUri,
			});
			return {
				status: response.status,
				data: response.data,
			};
		} catch (error: any) {
			logger.error(
				"Error in forwarding request to NP server",
				{
					...loggingMeta,
					forwardedTo: finalUri,
				},
				error
			);
			const status = error.response?.status || 500;
			return {
				status,
				data: getAxiosErrorMessage(error),
			};
		}
	};
	forwardApiToGateway = async (
		body: any,
		loggingMeta: any,
		requestProperties?: RequestProperties
	) => {
		let url = config.gateway.STAGING;

		if (requestProperties?.env) {
			const env = requestProperties.env.toUpperCase();
			if (env === "STAGING") {
				url = config.gateway.STAGING;
			} else if (env === "PRE-PRODUCTION") {
				url = config.gateway.PREPROD;
			} else if (env === "LOGGED-IN") {
				url = config.gateway.IN_HOUSE_REGISTRY;
			}
		}
		if (!requestProperties?.env) {
			throw new Error("Environment not specified in request properties");
		}
		const header = await createAuthHeader(
			body,
			requestProperties?.env,
			loggingMeta
		);
		try {
			logger.info("Forwarding request to Gateway server: " + url, loggingMeta);
			const response = await axios.post(`${url}search`, body, {
				headers: {
					Authorization: header,
				},
			});
			logger.info("Forwarded request to Gateway server", {
				...loggingMeta,
				forwardedTo: url,
				response: response.data,
			});
			return {
				status: response.status,
				data: response.data,
			};
		} catch (error: any) {
			logger.error(
				"Error in forwarding request to Gateway server",
				loggingMeta,
				error
			);
			const status = error.response?.status || 500;
			return {
				status,
				data: getAxiosErrorMessage(error),
			};
		}
	};
}
