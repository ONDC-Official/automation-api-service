import { logError, logger, logInfo } from "./logger";
import { createAuthorizationHeader } from "ondc-crypto-sdk-nodejs";
import axios from "axios";
import { config } from "../config/registryGatewayConfig";

const createAuthHeader = async (payload: any) => {
	logInfo({
		message: "Creating authorization header",
		meta: {
			payload,
		},
	});
	try {
		const header = await createAuthorizationHeader({
			body: JSON.stringify(payload),
			privateKey: process.env.SIGN_PRIVATE_KEY || "",
			subscriberId: process.env.SUBSCRIBER_ID || "", // Subscriber ID that you get after registering to ONDC Network
			subscriberUniqueKeyId: process.env.UKID || "", // Unique Key Id or uKid that you get after registering to ONDC Network
		});
		logInfo({
			message: "Authorization header created successfully",
			meta: {
				header,
			},
		});
		return header;
	} catch (error) {
		// logger.error("Error while creating Authorization Header", error);
		logError({
			message: "Error while creating Authorization Header",
			error,
		});	
		throw new Error("Error while creating Authorization Header");
	}
};

const fetchSubscriberDetails = (header: string) => {
	logInfo({
		message: "Fetching subscriber details",
		meta: {
			header,
		},
	});
	const keyId: string[] = extractSignatureKeyId(header);

	if (keyId.length === 0) {
		// logger.error("Key ID not found in header");
		logError({
			message: "Key ID not found in header",
			meta: {
				header,
			},
		});	
		return null;
	}

	// Split the matched keyId value by '|' and destructure the parts if they exist
	const [subscriberId, ukId, _] = keyId[0].split("|");

	// Ensure both subscriberID and ukId are present
	logInfo({
		message: "Exiting fetchSubscriberDetails function",
		meta: {
			subscriberId,
			ukId,
		},
	});
	return subscriberId && ukId ? { subscriberId, ukId } : null;
};

function extractSignatureKeyId(input: string): string[] {
	// Updated regex to handle keyId values properly
	logInfo({
		message: "Extracting signature key ID",
		meta: {
			input,
		},
	});
	const keyIdRegex = /keyId=\\"([^\\"]+)\\"/g;
	const matches: string[] = [];
	let match;

	while ((match = keyIdRegex.exec(input)) !== null) {
		matches.push(match[1]);
	}
	logInfo({
		message: "Exiting extractSignatureKeyId function",
		meta: {
			input,
			matches,
		},
	});
	return matches;
}

async function getPublicKeys(header: string, payload: any): Promise<string> {
	logInfo({
		message: "Entering getPublicKeys function.  Getting public keys",
		meta: {
			header,
			payload,
		},
	});
	try {
		const { subscriberId, ukId } = fetchSubscriberDetails(header) || {};
		if (!subscriberId || !ukId) {
			logError({
				message: "Subscriber ID or UKID not found",
				meta: {
					subscriberId,
					ukId,
				},
			});
			throw new Error("Subscriber ID or UKID not found");
		}
		const response = await performLookup(subscriberId, ukId);
		logInfo({
			message: "Exiting getPublicKeys function",
			meta: {
				response,
			},
		});
		return response.signing_public_key;
	} catch (error) {
		// logger.error("Error while getting public keys");
		logError({
			message: "Error while getting public keys",
			error,
		});
		throw new Error("Error while getting public keys");
	}
}

async function performLookup(subId: string, ukId: string) {
	logInfo({
		message: "Entering performLookup Function. Performing lookup",
		meta: {
			subId,
			ukId,
		},
	});
	const url = `${config.registry.STAGING}lookup`;
	const data = {
		subscriber_id: subId,
		ukId: ukId,
	};
	const header = await createAuthHeader(data);
	try {
		const response = await axios.post(url, data, {
			headers: {
				"Content-Type": "application/json",
				Authorization: header,
			},
		});
		logInfo({
			message: "Exiting performLookup Function. Lookup performed",
			meta: {
				response,
			},
		});
		return response.data[0];
	} catch (error) {
		// logger.error("Error while performing lookup", error);
		logError({
			message: "Error while performing lookup",
			error,
		});
		throw new Error("Error while performing lookup");
	}
}

export { getPublicKeys, createAuthHeader };
