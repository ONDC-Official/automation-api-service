import createServer from "./server";
import { config } from "./config/serverConfig";
import { logError, logger, logInfo } from "./utils/logger";
import { RedisService } from "ondc-automation-cache-lib";
import { configPromise } from "./config/supported-actions";

configPromise
	.then(() => {
		RedisService.useDb(0);
		const app = createServer();
		const server = app.listen(config.port, () => {
			logInfo(
				{ message: `Server running on port ${config.port} in ${config.environment} mode` }
			);
		});
		// Graceful Shutdown
		process.on("SIGTERM", () => {
			logInfo({ message: "SIGTERM signal received: closing HTTP server" });
			server.close(() => {
				logInfo({ message: "HTTP server closed" });
			});
		});
		process.on("SIGINT", () => {
			logInfo({ message: "SIGINT signal received: closing HTTP server" });
			server.close(() => {
				logInfo({ message: "HTTP server closed" });
			});
		});
	})
	.catch((error) => {
		// logger.error("Error loading config from API:", error);
		logError({
			message: "Error loading config from API",
			error: error,
		});
	});
