type AckResponse = {
	context?: any;
	message: {
		ack: {
			status: "ACK" | "NACK";
		};
	};
	error?: any;
};

export const setAckResponse = (
	ack: boolean = true,
	body: any,
	error?: string,
	errorCode?: string
): AckResponse => {
	const resp: AckResponse = {
		message: {
			ack: {
				status: ack ? "ACK" : "NACK",
			},
		},
	};

	if (error && errorCode) {
		resp.error = {
			code: errorCode,
			message: error,
		};
	}

	if (shouldAddContext()) {
		resp.context = body.context ?? {};
	}

	return resp;
};
export const setInternalServerNack = {
	message: {
		status: "NACK",
		error: {
			code: "23001",
			message: "Internal Server Error",
		},
	},
};

export const setBadRequestNack = (message = "") => {
	const resp: any = {
		message: {
			status: "NACK",
			error: {
				code: "10000",
				message: "Bad Request " + message,
			},
		},
	};
	if (shouldAddContext()) {
		resp.context = {};
	}
	return resp;
};

function shouldAddContext() {
	const version = process.env.VERSION;
	if (!version) {
		return false;
	}
	const [major] = version.split(".").map(Number);
	return major > 1;
}
