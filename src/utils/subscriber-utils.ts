import { BecknContext } from "../models/beckn-types";
import logger from "@ondc/automation-logger";

export function computeSubscriberUri(
	context: BecknContext,
	action: string,
	fromMock: boolean
) {
	logger.info("Computing subscriber URI", {
		action,
		fromMock,
		transaction_id: context.transaction_id,
	});

	if (!context.bap_uri) {
		logger.warning("BAP URI not found in context", {
			transaction_id: context.transaction_id,
			action,
			fromMock,
		});
		throw new Error("BAP URI not found in context");
	}

	const bapUri = context.bap_uri;
	const bppUri = context.bpp_uri;

	let subUrl = "";
	let partType: "BAP" | "BPP" = "BAP";

	if (fromMock) {
		// From mock: on_* actions go to BAP, other actions go to BPP
		if (action.startsWith("on_")) {
			subUrl = bapUri;
			partType = "BAP";
		} else {
			if (!bppUri) {
				logger.warning("BPP URI not found in context for mock request", {
					transaction_id: context.transaction_id,
					action,
					fromMock,
				});
				throw new Error("BPP URI not found in context");
			}
			subUrl = bppUri;
			partType = "BPP";
		}
	} else {
		// From real: on_* actions go to BPP, other actions go to BAP
		if (action.startsWith("on_")) {
			if (!bppUri) {
				logger.warning("BPP URI not found in context for callback", {
					transaction_id: context.transaction_id,
					action,
					fromMock,
				});
				throw new Error("BPP URI not found in context");
			}
			subUrl = bppUri;
			partType = "BPP";
		} else {
			subUrl = bapUri;
			partType = "BAP";
		}
	}

	logger.info("Computed subscriber URI", {
		subUrl,
		partType,
		transaction_id: context.transaction_id,
		action,
		fromMock,
	});

	subUrl = subUrl.replace(/\/+$/, ""); // Remove trailing slashes
	return { subUrl, partType };
}
