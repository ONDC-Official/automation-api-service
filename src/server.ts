require("./config/otelConfig");
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { logError, logger } from "./utils/logger";
import { config } from "./config/serverConfig";
import apiRouter from "./routes/public-routes";
import testRoutes from "./routes/test-routes";
import { setAckResponse, setBadRequestNack } from "./utils/ackUtils";
import mockRouter from "./routes/private-routes";
import requestLog from "./middleware/request-log";
import responseLog from "./middleware/response-log";
import { gzipOrJsonBodyParser } from "./middleware/gzip-ware";

const createServer = (): Application => {
	const app = express();

	// Middleware
	// app.use(express.json({ limit: "50mb" }));
	app.use(gzipOrJsonBodyParser({ limit: "50mb" }));
	app.use(cors());

	// Log all requests in development
	// if (config.port !== "production") {
	// 	app.use((req: Request, res: Response, next: NextFunction) => {
	// 		logger.debug(`${req.method} ${req.url}`);
	// 		next();
	// 	});
	// }

	// Logging Middleware
	app.use(requestLog);
	app.use(responseLog);
	var domain = process.env.DOMAIN;
	var version = process.env.VERSION;
	if (!domain || !version) {
		logError({
			message: "Domain and version are required in env",
		});
		throw new Error("Domain and version are required in env");
	}

	const base = `/api-service/${domain}/${version}`;
	// Routes
	// app.use(`${base}/api`, routes);
	app.use(`${base}/buyer`, apiRouter);
	app.use(`${base}/seller`, apiRouter);
	app.use(`${base}/mock`, mockRouter);
	app.use(`${base}/test`, testRoutes);

	// Health Check
	app.get(`${base}/health`, (req: Request, res: Response) => {
		res.status(200).send(setAckResponse(true, req.body));
	});

	// Error Handling Middleware
	app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
		// logger.error(err.message, { stack: err.stack });
		logError({
			message: "Internal Server Error",
			error: err,
			meta: { method: req.method, url: req.url },
		});
		res.status(200).send(setBadRequestNack(err.message));
	});

	return app;
};

export default createServer;
