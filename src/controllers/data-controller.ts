import { Request } from "express";
import { DataService } from "../services/data-service";
import { computeSubscriberUri } from "../utils/subscriber-utils";
import { saveLog } from "../utils/data-utils/cache-utils";
import { ApiServiceRequest } from "../types/request-types";
import logger from "@ondc/automation-logger";
import { getLoggerMetaData } from "../utils/loggingUtils";
export class DataController {
	dbUrl: string;
	dataService: DataService;

	constructor() {
		if (process.env.DATA_BASE_URL) {
			this.dbUrl = process.env.DATA_BASE_URL;
			this.dataService = new DataService();
			logger.info(`Data Controller initialized`, {
				dbUrl: this.dbUrl,
			});
			return;
		}
		throw new Error("DB_URL not found in environment variables");
	}

	savePayloadInDb(
		req: Request,
		responseBody: any,
		fromMock: boolean,
		code: number,
		reqId: string
	) {
		let url = computeSubscriberUri(
			req.body.context,
			req.params.action,
			fromMock
		).subUrl;
		if (fromMock) {
			url = (req.query.subscriber_url as string) ?? url;
		}
		const auth = req.headers.authorization ?? "no-auth";
		logger.info("Trying to save payload data to DB", getLoggerMetaData(req));
		this.dataService
			.saveSessionToDB(
				url,
				req.body,
				auth,
				responseBody,
				code,
				reqId,
				getLoggerMetaData(req)
			)
			.then(() =>
				logger.info(
					`Completed trying saving data to DB ${req.params.action}`,
					getLoggerMetaData(req)
				)
			)
			.catch((err) => {
				logger.error(
					`Error in trying to save payload data to database for action: ${req.params.action}`,
					getLoggerMetaData(req),
					err
				);
			});
	}
}
