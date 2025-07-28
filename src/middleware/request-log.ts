import { Request, Response, NextFunction } from "express";
import logger from "@ondc/automation-logger";
import { getLoggerMetaData } from "../utils/loggingUtils";

export default (req: Request, _res: Response, next: NextFunction) => {
	const transaction_id = req.body?.transaction_id;
	logger.info(`Request Log: ${req.method} ${req.url}`, {
		transaction_id,
		method: req.method,
		url: req.url,
		body: req.body,
		...getLoggerMetaData(req),
	});
	next();
};
