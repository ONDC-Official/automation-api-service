import { Request, Response, NextFunction } from "express";
import logger from "@ondc/automation-logger";
import { getLoggerMetaData } from "../utils/loggingUtils";

export default (req: Request, res: Response, next: NextFunction) => {
	const originalJson = res.json;
	const originalSend = res.send;
	res.json = function (data: any) {
		logger.info(`Response Log`, getLoggerMetaData(req), {
			data: data,
			statusCode: res.statusCode,
		});
		return originalJson.call(this, data);
	};
	res.send = function (data: any) {
		logger.info(`Response Log`, getLoggerMetaData(req), {
			data: data,
			statusCode: res.statusCode,
		});
		return originalSend.call(this, data);
	};
	next();
};
