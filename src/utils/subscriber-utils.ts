import { BecknContext } from "../models/beckn-types";
import { logger, logInfo, logError } from "../utils/logger";

export function computeSubscriberUri(
	context: BecknContext,
	action: string,
	fromMock: boolean
) {
	// console.log("computing subscriber uri", action, fromMock);
	logInfo({
		message: "Entering computeSubscriberUri Function. Computing subscriber URI",
		meta: {
			action,
			fromMock,
		},
		transaction_id: context.transaction_id,
	});
	if (!context.bap_uri) {
		logError({
			message: "BAP URI not found in context",
			transaction_id: context.transaction_id,
			meta: {
				action,
				fromMock,
			},
		});
		throw new Error("BAP URI not found in context");
	}
	if (action !== "search" && !context.bpp_uri) {
		logError({
			message: "BPP URI not found in context",
			transaction_id: context.transaction_id,
			meta: {
				action,
				fromMock,
			},
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
	// logger.info(`Computed subscriber URI: ${subUrl}`);
	logInfo({
		message: `Exiting computeSubscriberUri Function. Subscriber URI computed : ${subUrl}`,
		meta: {
			action,
			fromMock,
		},
		transaction_id: context.transaction_id,
	});

	return { subUrl, partType };
}
