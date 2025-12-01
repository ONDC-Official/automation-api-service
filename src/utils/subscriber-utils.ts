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
	if (!action.startsWith("search") && !context.bpp_uri) {
		logger.warning("BPP URI not found in context", {
			transaction_id: context.transaction_id,
			action,
			fromMock,
		});
		throw new Error("BPP URI not found in context");
	}

	const bapUri = context.bap_uri;
	const bppUri = context.bpp_uri ?? "";

	let subUrl = "";
	let partType: "BAP" | "BPP" = "BAP";
	if (fromMock) {
		subUrl = action.startsWith("on_") ? bapUri : bppUri;
		partType = action.startsWith("on_") ? "BAP" : "BPP";
	} else {
		subUrl = action.startsWith("on_") ? bppUri : bapUri;
		partType = action.startsWith("on_") ? "BPP" : "BAP";
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
