import axios from "../utils/axios";
import { logError, logger, logInfo } from "../utils/logger";
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
		requestId: string
	) => {
		logInfo({
			message: "Entering saveSessionToDB Function",
			meta: {
				subscriberUri,
				action: payload.context.action,
				transactionId: payload.context.transaction_id,
			},
			transaction_id: payload.context.transaction_id,
		});
		try {
			// logger.info("Saving data to DB");
			logInfo({
				message: "Saving data to DB",
				meta: {
					subscriberUri,
					action: payload.context.action,
					transactionId: payload.context.transaction_id,
				},
				transaction_id: payload.context.transaction_id,
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
				// logger.error(
				// 	"Session data not found for subscriber URL: skipping persistent saving " +
				// 		subscriberUri
				// );
				logInfo({
					message: "Session data not found for subscriber URL: skipping persistent saving",
					meta: {
						subscriberUri,
						action: payload.context.action,
						transactionId: payload.context.transaction_id,
					},
					transaction_id: payload.context.transaction_id,
				});
				return;
			}
			const checkSessionUrl = `${dbUrl}/api/sessions/check/${
				sessionData.sessionId ?? key
			}`;
			const postUrl = `${dbUrl}/api/sessions`;
			const exists = await axios.get(checkSessionUrl);
			if (!exists.data) {
				// logger.info("Session does not exist in DB, creating new session");
				logInfo({
					message: "Session does not exist in DB, creating new session",
					meta: {
						subscriberUri,
						action: payload.context.action,
						transactionId: payload.context.transaction_id,
					},
					transaction_id: payload.context.transaction_id,
				});
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
			// logger.info(
			// 	`Data saved to DB with response: ${res.data} and payloadID: ${requestId}`
			// );
			logInfo({
				message: `Exiting saveSessionToDB Function. Data saved to DB with response: ${res.data} and payloadID: ${requestId}`,
				meta: {
					subscriberUri,
					action: payload.context.action,
					transactionId: payload.context.transaction_id,
				},
				transaction_id: payload.context.transaction_id,
			});
		} catch (error) {
			// logger.error("Error in saving data to DB ", error);
			logError({
				message: "Error in saving data to DB",
				error,
				meta: {
					subscriberUri,
					action: payload.context.action,
					transactionId: payload.context.transaction_id,
				},
				transaction_id: payload.context.transaction_id,
			});
		}
	};
	checkSessionExistence = async (subscriberUri: string) => {
		logInfo({
			message: "Inside checkSessionExistence Function. Checking session existence",
			meta: {
				subscriberUri,
			},
		});
		return await RedisService.keyExists(subscriberUri);
	};
}
