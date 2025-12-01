import { setAckResponse, setInternalServerNack } from "../utils/ackUtils";
import { Response } from "express";
import logger from "@ondc/automation-logger";
import { CommunicationService } from "../services/forwarding-service";
import { BecknContext } from "../models/beckn-types";
import { ApiServiceRequest } from "../types/request-types";
import { getLoggerMetaData } from "../utils/loggingUtils";

export class CommunicationController {
	communicationService: CommunicationService;

	constructor() {
		this.communicationService = new CommunicationService();
	}

	forwardToMockServer = async (req: ApiServiceRequest, res: Response) => {
		const responseToSend =
			req.preparedResponse ?? setAckResponse(true, req.body);
		res.status(200).send(responseToSend);
		try {
			await new CommunicationService().forwardApiToMock(
				req.body,
				getLoggerMetaData(req),
				req.requestProperties
			);
			logger.info(
				`Successfully forwarded request to mock server for action: ${req.params.action}`,
				getLoggerMetaData(req)
			);
		} catch (error: any) {
			logger.error(
				`Error in forwarding request to mock server for action: ${req.params.action}`,
				getLoggerMetaData(req),
				error
			);
		}
	};

	handleRequestFromMockServer = async (
		req: ApiServiceRequest,
		res: Response
	) => {
		try {
			if (!req.requestProperties) {
				logger.error(
					"[FATAL]: Request properties not found",
					getLoggerMetaData(req)
				);
				res.status(200).send(setInternalServerNack);
				return;
			}

			const context: BecknContext = req.body.context;
			const protocolWorkbenchId =
				req.requestProperties.env === "LOGGED-IN"
					? process.env.WORKBENCH_SUBSCRIBER_ID
					: process.env.SUBSCRIBER_ID;

			logger.info(
				`Handling request from mock server for action: ${req.params.action}, Transaction ID: ${context.transaction_id}`,
				getLoggerMetaData(req)
			);

			if (req.requestProperties.subscriberType === "BAP") {
				req.body.context.bpp_id = protocolWorkbenchId;
			} else {
				req.body.context.bap_id = protocolWorkbenchId;
			}
			const bpp_uri = context.bpp_uri;
			if (bpp_uri) {
				logger.info(
					`Forwarding request to NP server for action: ${req.params.action}, Transaction ID: ${context.transaction_id}`,
					getLoggerMetaData(req)
				);

				const response = await this.communicationService.forwardApiToNp(
					req.body,
					req.params.action,
					getLoggerMetaData(req),
					undefined,
					req.requestProperties
				);
				res.status(response.status).send(response.data);
				logger.info(
					`Successfully forwarded request to NP server for action: ${req.params.action}, Transaction ID: ${context.transaction_id}`,
					getLoggerMetaData(req)
				);
				return;
			}
			const subUrl = req.requestProperties.subscriberUrl;
			const useGateway = req.requestProperties.difficulty.useGateway;
			if (useGateway) {
				logger.info(
					"Forwarding request to Gateway server",
					getLoggerMetaData(req)
				);
				const response = await this.communicationService.forwardApiToGateway(
					req.body,
					req.requestProperties
				);
				res.status(response.status).send(response.data);
				logger.info(
					"Successfully forwarded request to Gateway server",
					getLoggerMetaData(req)
				);
				return;
			} else {
				logger.info(
					`Forwarding request to NP server for action: ${req.params.action}, Transaction ID: ${context.transaction_id}`,
					getLoggerMetaData(req)
				);
				const response = await this.communicationService.forwardApiToNp(
					req.body,
					req.params.action,
					getLoggerMetaData(req),
					subUrl,
					req.requestProperties
				);
				res.status(response.status).send(response.data);
				logger.info(
					`Successfully forwarded request to NP server for action: ${req.params.action}, Transaction ID: ${context.transaction_id}`,
					getLoggerMetaData(req)
				);
				return;
			}
		} catch (error: any) {
			logger.error(
				`Error in handling request from mock server for action: ${req.params.action}`,
				getLoggerMetaData(req),
				error
			);
			res.status(200).send(setInternalServerNack);
		}
	};
}
