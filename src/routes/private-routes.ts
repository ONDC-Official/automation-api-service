import express, { NextFunction, Response } from "express";
import { CommunicationController } from "../controllers/communication-controller";
import { DataController } from "../controllers/data-controller";
import { ValidationController } from "../controllers/validation-controller";
import logger from "@ondc/automation-logger";
import { v4 as uuidV4 } from "uuid";
import { SessionController } from "../controllers/session-controller";
import { TransactionCacheService } from "../services/session-service-rewrite";
import { ApiServiceRequest } from "../types/request-types";

const router = express();

// router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const commController = new CommunicationController();
const dbController = new DataController();
const validationController = new ValidationController();
const sessionController = new SessionController();
import otelTracing from "../services/tracing-service";
import { getLoggerMetaData } from "../utils/loggingUtils";
import { getNoType, postLogsToNoService } from "../services/No-service";

router.post(
	"/:action",
	otelTracing(
		"body.context.transaction_id",
		"body.session_id",
		"body.context.bap_id",
		"body.context.bpp_id"
	),
	validationController.validateRequestBodyMock,
	sessionController.receiveNewRequestFromMock,
	sessionController.createTransaction,
	modifyExpressSend,
	validationController.validateL0,
	validationController.validateContextFromMock,
	validationController.validateL1Custom,
	commController.handleRequestFromMockServer
);

function modifyExpressSend(
	req: ApiServiceRequest,
	res: Response,
	next: NextFunction
) {
	if (!res.locals.isSendWrapped) {
		res.locals.isSendWrapped = true; // Flag to indicate the wrapping is done
		const originalSend = res.send;
		res.send = function (body) {
			if (!res.locals.isCacheUpdated) {
				res.locals.isCacheUpdated = true; // Flag to ensure cache update happens only once
				const statusCode = res.statusCode;
				const payloadID = uuidV4();
				new TransactionCacheService().updateTransactionCache(
					payloadID,
					req.body,
					body,
					req?.requestProperties?.subscriberUrl
				);
				dbController.savePayloadInDb(req, body, true, statusCode, payloadID);
				postLogsToNoService(
					getNoType("request", req.body),
					req.body,
					getLoggerMetaData(req)
				);
				postLogsToNoService(
					getNoType("response", req.body),
					body,
					getLoggerMetaData(req)
				);
				logger.info("Now responding back to the mock", getLoggerMetaData(req), {
					response: body,
					code: statusCode,
				});
			}
			return originalSend.call(this, body); // Call the original send method
		};
	}
	next();
}

export default router;
