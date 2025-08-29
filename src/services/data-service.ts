import axios from "../utils/axios";
import logger from "@ondc/automation-logger";
import { RedisService } from "ondc-automation-cache-lib";
import { TransactionCacheService } from "./session-service-rewrite";
import { generateHash } from "../utils/hash";

export class DataService {
	saveSessionToDB = async (
		subscriberUri: string,
		payload: any,
		reqHeader: any,
		response: any,
		code: number,
		requestId: string,
		loggingMeta: any
	) => {
		try {
			logger.info("Saving data to DB", loggingMeta, {
				payloadId: requestId,
			});
			const dbUrl = process.env.DATA_BASE_URL;
			const sessionData =
				await new TransactionCacheService().tryLoadTransaction(
					payload.context.transaction_id,
					subscriberUri
				);
			let key = `${new TransactionCacheService().createTransactionKey(
				payload.context.transaction_id,
				subscriberUri
			)}`;
			key = generateHash(key);
			if (sessionData === undefined) {
				logger.warning(
					"User Session data not found, skipping DB save",
					loggingMeta
				);
				return;
			}
			const checkSessionUrl = `${dbUrl}/api/sessions/check/${
				sessionData.sessionId ?? key
			}`;
			const postUrl = `${dbUrl}/api/sessions`;
			const exists = await axios.get(checkSessionUrl);
			if (!exists.data) {
				logger.info(
					"Session does not exist in DB, creating new session",
					loggingMeta
				);
				const sessionPayload = {
					sessionId: sessionData.sessionId ?? key,
					npType: sessionData.subscriberType,
					npId: subscriberUri,
					domain: payload.context.domain,
					version: payload.context.version ?? payload.context.core_version,
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
				reqHeader: reqHeader,
				jsonRequest: payload,
				jsonResponse: { response: response },
				httpStatus: code,
				flowId: sessionData.flowId,
				sessionDetails: {
					sessionId: sessionData.sessionId ?? key,
				},
			};

			const res = await axios.post(postUrl + "/payload", requestBody);
			logger.info(
				`Data saved to DB with payloadID: ${requestId}`,
				loggingMeta,
				{ response: JSON.stringify(res.data) }
			);
		} catch (error: any) {
			logger.error(
				`Error in saving data to DB for action: ${payload.context.action}`,
				loggingMeta,
				error
			);
		}
	};
}
