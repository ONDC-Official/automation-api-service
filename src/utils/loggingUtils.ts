import { ApiServiceRequest } from "../types/request-types";

export function getLoggerMetaData(req: ApiServiceRequest) {
	return {
		action: req.params.action,
		transactionId:
			req.requestProperties?.transactionId ?? req.body?.context?.transaction_id,
		sessionId: req.requestProperties?.sessionId,
		subscriberUrl: req.requestProperties?.subscriberUrl,
		flowId: req.requestProperties?.flowId,
		messageId: req.body?.context?.message_id,
		correlationId: req.correlationId,
	};
}

export function getL1Key(req: ApiServiceRequest) {
	return `L1_VAL:${req.requestProperties?.subscriberUrl}:${req.requestProperties?.transactionId}`;
}
