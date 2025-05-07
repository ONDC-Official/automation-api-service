import axios from "axios";
import { BecknContext } from "../models/beckn-types";
import { logError, logger, logInfo } from "../utils/logger";
import { createAuthHeader } from "../utils/headerUtils";
import { config } from "../config/registryGatewayConfig";
import { getAxiosErrorMessage } from "../utils/axiosUtils";
import { RequestProperties } from "../types/cache-types";

export class CommunicationService {
	forwardApiToMock = async (
		body: any,
		requestProperties?: RequestProperties
	) => {
		logInfo({
			message: "Entering forwardApiToMock Function",
			meta: {
				action: requestProperties?.action,
			},
			transaction_id: body?.context?.transaction_id,
		});
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
		// logger.info("Forwarding request to Mock server", url, action);
		logInfo({
			message: "Exiting forwardApiToMock Function.  Forwarding request to Mock server",
			meta: {
				url,
				action,
			},
			transaction_id: body?.context?.transaction_id,
		});
		return await axios.post(url, body);
	};
	forwardApiToNp = async (body: any, action: string, overwriteUrl?: string) => {
		logInfo({
			message: "Entering forwardApiToNp Function",
			meta: {
				action,
			},
			transaction_id: body?.context?.transaction_id,
		});
		const context: BecknContext = body.context;
		let finalUri = context.action.startsWith("on_")
			? context.bap_uri
			: context.bpp_uri;
		if (overwriteUrl) finalUri = overwriteUrl;
		// logger.info("Forwarding request to NP server", finalUri);
		logInfo({
			message: "Forwarding request to NP server",
			meta: {
				finalUri,
				action,
			},
			transaction_id: body?.context?.transaction_id,
		});

		const header = await createAuthHeader(body);
		try {
			const response = await axios.post(`${finalUri}/${action}`, body, {
				headers: {
					Authorization: header,
				},
			});
			logInfo({
				message: "Exiting forwardApiToNp Function. Forwarded request to NP server",
				meta: {
					finalUri,	
					action,
					response: response.data,
				},
				transaction_id: body?.context?.transaction_id,
			});
			return {
				status: response.status,
				data: response.data,
			};
		} catch (error: any) {
			// logger.error("Error in forwarding request to NP server");
			logInfo({
				message: "Exiting forwardApiToNp Function. Error in forwarding request to NP server",
				meta: {
					finalUri,
					action,
				},
				transaction_id: body?.context?.transaction_id,
			});
			const status = error.response?.status || 500;
			return {
				status,
				data: getAxiosErrorMessage(error),
			};
		}
	};

	forwardApiToGateway = async (body: any) => {
		logInfo({
			message: "Entering forwardApiToGateway Function",
			meta: {
				action: body.context.action,
			},
			transaction_id: body?.context?.transaction_id,
		});
		const url = config.gateway.STAGING;
		const header = await createAuthHeader(body);
		try {
			// logger.info("Forwarding request to Gateway server", url);
			logInfo({
				message: "Forwarding request to Gateway server",
				meta: {
					url,
					action: body.context.action,
				},
				transaction_id: body?.context?.transaction_id,
			});	
			const response = await axios.post(`${url}search`, body, {
				headers: {
					Authorization: header,
				},
			});
			// logger.info(JSON.stringify(response.data));
			logInfo({
				message: "Exiting forwardApiToGateway Function. Forwarded request to Gateway server",
				meta: {
					url,
					action: body.context.action,
					response: response.data,
				},
				transaction_id: body?.context?.transaction_id,
			});
			return {
				status: response.status,
				data: response.data,
			};
		} catch (error: any) {
			// logger.error("Error in forwarding request to Gateway server");
			logError({
				message: "Error in forwarding request to Gateway server",
				error,
				meta: {
					url,
					action: body.context.action,
				},
				transaction_id: body?.context?.transaction_id,
			});
			const status = error.response?.status || 500;
			return {
				status,
				data: getAxiosErrorMessage(error),
			};
		}
	};
}
