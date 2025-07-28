import { isAxiosError } from "axios";

export function getAxiosErrorMessage(error: any) {
	if (isAxiosError(error)) {
		return {
			code: error.code,
			request: {
				method: error.config?.method,
				url: error.config?.url,
			},
			response: {
				status: error.response?.status,
				statusText: error.response?.statusText,
				data: error.response?.data,
			},
		};
	}
	if (error.response) {
		return (
			error.response.data ||
			error.response.statusText ||
			"Unknown error from server"
		);
	} else if (error.request) {
		// No response was received
		return "No response received from server";
	} else {
		// Error occurred while setting up the request
		return (
			error.message || "An unknown error occurred from an external request"
		);
	}
}
