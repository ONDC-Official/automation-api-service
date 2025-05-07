import { setAckResponse, setInternalServerNack } from "../utils/ackUtils";
import { Response } from "express";
import { logError, logger, logInfo } from "../utils/logger";
import { CommunicationService } from "../services/forwarding-service";
import { BecknContext } from "../models/beckn-types";
import { loadData, saveLog } from "../utils/data-utils/cache-utils";
import { ApiServiceRequest } from "../types/request-types";

export class CommunicationController {
	communicationService: CommunicationService;

	constructor() {
		this.communicationService = new CommunicationService();
	}

	forwardToMockServer = async (req: ApiServiceRequest, res: Response) => {
		logInfo({
			message: "Entering forwardToMockServer Middleware",
			meta: {
				action: req.params.action,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
		if (req.requestProperties?.defaultMode) {
			logInfo({
				message: "Default mode is enabled, skipping mock server",
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
			res.status(204).send();
			return;
		}
		res.status(200).send(setAckResponse(true, req.body));
		const sessionId = req.requestProperties?.sessionId ?? "unknown";
		try {
			await saveLog(sessionId, "Forwarding request to mock server");
			await new CommunicationService().forwardApiToMock(
				req.body,
				req.requestProperties
			);
			await saveLog(sessionId, "Successfully forwarded request to mock server");
			logInfo({
				message: "Successfully forwarded request to mock server",
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
		} catch (error) {
			await saveLog(
				sessionId,
				`Error forwarding request to mock server: ${error}`,
				"error"
			);
			// logger.error("Error in forwarding request to mock server", error);
			logError({
				message: "Error in forwarding request to mock server",
				error,
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
		}
	};

	handleRequestFromMockServer = async (
		req: ApiServiceRequest,
		res: Response
	) => {
		logInfo({
			message: "Entering handleRequestFromMockServer Middleware",
			meta: {
				action: req.params.action,
			},
			transaction_id: req.body?.context?.transaction_id,
		});
		const sessionId = req.requestProperties?.sessionId ?? "unknown";
		try {
			if (!req.requestProperties) {
				// logger.error("[FATAL]: Request properties not found");
				logError({
					message: "Exiting handleRequestFromMockServer Middleware. Request properties not found",
					meta: {
						action: req.params.action,
					},
					transaction_id: req.body?.context?.transaction_id,
				});
				res.status(200).send(setInternalServerNack);
				return;
			}
			const context: BecknContext = req.body.context;
			const bpp_uri = context.bpp_uri;
			if (bpp_uri) {
				await saveLog(sessionId, "Forwarding request to NP server");
				// logger.info("Forwarding request to NP server");
				logInfo({
					message: "Forwarding request to NP server",
					meta: {
						action: req.params.action,
					},
					transaction_id: req.body?.context?.transaction_id,
				});	
				const response = await this.communicationService.forwardApiToNp(
					req.body,
					req.params.action
				);
				res.status(response.status).send(response.data);
				logInfo({
					message: "Exiting handleRequestFromMockServer Middleware.  Successfully forwarded request to NP server",
					meta: {
						action: req.params.action,
					},
					transaction_id: req.body?.context?.transaction_id,
					});

				return;
			}
			const subUrl = req.requestProperties.subscriberUrl;
			const useGateway = req.requestProperties.difficulty.useGateway;
			if (useGateway) {
				// logger.info("Forwarding request to Gateway server");
				logInfo({
					message: "Forwarding request to Gateway server",
					meta: {
						action: req.params.action,
					},
					transaction_id: req.body?.context?.transaction_id,
				});
				const response = await this.communicationService.forwardApiToGateway(
					req.body
				);
				res.status(response.status).send(response.data);
				logInfo({
					message: "Exiting handleRequestFromMockServer Middleware.  Successfully forwarded request to Gateway server",
					meta: {
						action: req.params.action,
					},
					transaction_id: req.body?.context?.transaction_id,
					});
				return;
			} else {
				// logger.info("Forwarding request to NP server");
				logInfo({
					message: "Forwarding request to NP server",
					meta: {
						action: req.params.action,
					},
					transaction_id: req.body?.context?.transaction_id,
				});

				const response = await this.communicationService.forwardApiToNp(
					req.body,
					req.params.action,
					subUrl
				);
				res.status(response.status).send(response.data);
				logInfo({
					message: "Exiting handleRequestFromMockServer Middleware.  Successfully forwarded request to NP server",
					meta: {
						action: req.params.action,
					},
					transaction_id: req.body?.context?.transaction_id,
					});
				return;
			}
		} catch (error) {
			await saveLog(
				sessionId,
				`Error handling request from mock server: ${error}`,
				"error"
			);
			// logger.error("Error in handling request from mock server", error);
			logError({
				message: "Error in handling request from mock server",
				error,
				meta: {
					action: req.params.action,
				},
				transaction_id: req.body?.context?.transaction_id,
			});
			res.status(200).send(setInternalServerNack);
		}
	};
}
