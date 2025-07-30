import { Request, Response, NextFunction } from "express";
import zlib from "zlib";
import getRawBody from "raw-body";
import logger from "@ondc/automation-logger";
import { getLoggerMetaData } from "../utils/loggingUtils";

export function gzipOrJsonBodyParser({ limit = "50mb" } = {}) {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const encoding = req.headers["content-encoding"];
			logger.info(`Content-Encoding: ${encoding}`, getLoggerMetaData(req));
			if (encoding === "gzip") {
				const raw = await getRawBody(req, { limit });
				const decompressed = zlib.gunzipSync(raw);
				req.body = JSON.parse(decompressed.toString());
				logger.info(
					"Request body decompressed successfully from gzip",
					getLoggerMetaData(req)
				);
			} else if (!encoding || encoding === "identity") {
				logger.info(
					"No content-encoding or identity encoding, parsing as JSON",
					getLoggerMetaData(req),
					{ encoding: encoding }
				);
				const raw = await getRawBody(req, {
					limit,
					encoding: true, // decode to string
				});
				req.body = JSON.parse(raw);
				logger.info(
					"Request body parsed successfully as JSON",
					getLoggerMetaData(req)
				);
			} else {
				logger.warning(
					`Unsupported content-encoding: ${encoding}`,
					getLoggerMetaData(req)
				);
				res.status(415).send(`Unsupported content-encoding: ${encoding}`);
				return;
			}
			next();
		} catch (err: any) {
			logger.error(
				"Error in gzipOrJsonBodyParser:",
				{
					...getLoggerMetaData(req),
					body: req.body,
					encoding: req.headers["content-encoding"],
				},
				err
			);
			console.log(err);
			res.status(400).send("Invalid request body");
			return;
		}
	};
}
