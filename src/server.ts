require("./config/otelConfig");
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import logger from "@ondc/automation-logger";
import apiRouter from "./routes/public-routes";
import testRoutes from "./routes/test-routes";
import { setAckResponse, setBadRequestNack } from "./utils/ackUtils";
import mockRouter from "./routes/private-routes";
import requestLog from "./middleware/request-log";
import responseLog from "./middleware/response-log";
import { gzipOrJsonBodyParser } from "./middleware/gzip-ware";
import { getLoggerMetaData } from "./utils/loggingUtils";
import formRouter from "./routes/form-routes";

const createServer = (): Application => {
	console.log("running api service server...");
	const app = express();

	// Middleware
	// app.use(express.json({ limit: "50mb" }));
	app.use(gzipOrJsonBodyParser({ limit: "50mb" }));
	app.use(logger.getCorrelationIdMiddleware());
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
		logger.error("Domain and version are required in env");
		throw new Error("Domain and version are required in env");
	}

	const base = `/api-service/${domain}/${version}`;
	// Routes
	// app.use(`${base}/api`, routes);
	app.use(`${base}/buyer`, apiRouter);
	app.use(`${base}/seller`, apiRouter);
	app.use(`${base}/mock`, mockRouter);
	app.use(`${base}/test`, testRoutes);
	app.use(`${base}/form`, formRouter);

	// Health Check
	app.get(`${base}/health`, (req: Request, res: Response) => {
		logger.info("Health check endpoint hit", getLoggerMetaData(req));
		res.status(200).send(setAckResponse(true, req.body));
	});

	// --- CATCH-ALL FOR UNMATCHED ROUTES ---
	// This middleware will only be reached if no other route handler above it has sent a response.
	app.use((req: Request, res: Response, next: NextFunction) => {
		const availableEndpoints = [
			`${base}/buyer/<ACTION>`,
			`${base}/seller/<ACTION>`,
			`${base}/test/<ACTION>`,
			// You might want to refer to your API documentation for full details
		];

		logger.warning(
			`404 Not Found: ${req.method} ${req.url}`,
			getLoggerMetaData(req)
		);

		res.status(404).json({
			message: `The requested endpoint '${req.url}' was not found.`,
			error: "Not Found",
			availableEndpoints: availableEndpoints,
			suggestion:
				"Please check the URL or refer to the API documentation for valid endpoints.",
		});
	});

	// Error Handling Middleware
	app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
		// logger.error(err.message, { stack: err.stack });
		logger.error(
			`Internal Server Error: ${err.message}`,
			getLoggerMetaData(req),
			err
		);
		res.status(200).send(setBadRequestNack(err.message));
	});

	return app;
};

export default createServer;
