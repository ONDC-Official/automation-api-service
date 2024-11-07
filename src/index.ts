import createServer from "./server";
import { config } from "./config/serverConfig";
import logger from "./utils/logger";

const app = createServer();

const server = app.listen(config.port, () => {
  logger.info(
    `Server running on port ${config.port} in ${config.environment} mode`
  );
});

// Graceful Shutdown
process.on("SIGTERM", () => {
  logger.info("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    logger.info("HTTP server closed");
  });
});

process.on("SIGINT", () => {
  logger.info("SIGINT signal received: closing HTTP server");
  server.close(() => {
    logger.info("HTTP server closed");
  });
});
