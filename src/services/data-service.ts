import axios from "axios";
import logger from "../utils/logger";
import { RedisService } from "ondc-automation-cache-lib";
import { loadData } from "../utils/data-utils/cache-utils";
import { getAxiosErrorMessage } from "../utils/axiosUtils";

export class DataService {
	saveSessionToDB = async (
		subscriberUri: string,
		payload: any,
		response: any,
		code: number,
		requestId: string
	) => {
		try {
			const dbUrl = process.env.DATA_BASE_URL;
			const sessionData = await loadData(subscriberUri);
			if (sessionData === undefined) {
				logger.error(
					"Session data not found for subscriber URL: skipping presitant saving " +
						subscriberUri
				);
				return;
			}
			const checkSessionUrl = `${dbUrl}/api/sessions/check/${sessionData.active_session_id}`;
			const postUrl = `${dbUrl}/api/sessions`;
			const exists = await axios.get(checkSessionUrl);
			if (!exists.data) {
				logger.info("Session does not exist in DB, creating new session");
				const sessionPayload = {
					sessionId: sessionData.active_session_id,
					npType: sessionData.type,
					npId: sessionData.context_cache.subscriber_id,
					domain: sessionData.domain,
					version: sessionData.version,
					sessionType: "AUTOMATION",
					sessionActive: true,
				};
				await axios.post(postUrl, sessionPayload);
			}
			const action = payload.context.action as string;

			const requestBody = {
				messageId: payload.context.message_id,
				transactionId: payload.context.transaction_id,
				payloadId: requestId,
				action: action.toUpperCase(),
				bppId: payload.context.bpp_id ?? "",
				bapId: payload.context.bap_id,
				jsonRequest: payload,
				jsonResponse: { response: response },
				httpStatus: code,
				flowId: sessionData.current_flow_id,
				sessionDetails: {
					sessionId: sessionData.active_session_id,
				},
			};
			const res = await axios.post(postUrl + "/payload", requestBody);
			logger.info(
				`Data saved to DB with response: ${res.data} and payloadID: ${requestId}`
			);
		} catch (error) {
			logger.error("Error in saving data to DB ", getAxiosErrorMessage(error));
		}
	};

	checkSessionExistence = async (subscriberUri: string) => {
		return await RedisService.keyExists(subscriberUri);
	};
}
