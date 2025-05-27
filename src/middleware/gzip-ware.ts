import { Request, Response, NextFunction } from "express";
import zlib from "zlib";
import getRawBody from "raw-body";
import { logger } from "../utils/logger";

export function gzipOrJsonBodyParser({ limit = "50mb" } = {}) {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const encoding = req.headers["content-encoding"];
			console.log("Content-Encoding:", encoding);
			if (encoding === "gzip") {
				const raw = await getRawBody(req, { limit });
				const decompressed = zlib.gunzipSync(raw);
				req.body = JSON.parse(decompressed.toString());
			} else if (!encoding || encoding === "identity") {
				const raw = await getRawBody(req, {
					limit,
					encoding: true, // decode to string
				});
				req.body = JSON.parse(raw);
			} else {
				res.status(415).send(`Unsupported content-encoding: ${encoding}`);
				return;
			}
			next();
		} catch (err) {
			logger.error("Error in gzipOrJsonBodyParser:", err);
			res.status(400).send("Invalid request body");
		}
	};
}
