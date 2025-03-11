import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import logger from "./utils/logger";
import { config } from "./config/serverConfig";
import routes from "./routes/public-routes";
import testRoutes from "./routes/test-routes";
import { setAckResponse, setBadRequestNack } from "./utils/ackUtils";
import router from "./routes/private-routes";

const createServer = (): Application => {
	const app = express();

	// Middleware
	app.use(express.json({ limit: "50mb" }));
	app.use(cors());

	// Log all requests in development
	if (config.port !== "production") {
		app.use((req: Request, res: Response, next: NextFunction) => {
			logger.debug(`${req.method} ${req.url}`);
			next();
		});
	}

	// Routes
	app.use("/api", routes);
	app.use("/api-service/mock", router);
	app.use("/test", testRoutes);

	// Health Check
	app.get("/health", (req: Request, res: Response) => {
		res.status(200).send(setAckResponse(true));
	});
	app.get("/latest", (req: Request, res: Response) => {
		res.status(200).send("11 march 11:06AM");
	});

	// Error Handling Middleware
	app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
		logger.error(err.message, { stack: err.stack });
		res.status(200).send(setBadRequestNack(err.message));
	});

	return app;
};

export default createServer;
