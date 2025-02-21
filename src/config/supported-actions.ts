import axios from "axios";

interface Config {
	supportedActions: Record<string, string[]>;
	apiProperties: Record<
		string,
		{ async_predecessor: string | null; transaction_partner: string[] }
	>;
}

let supportedActions: Config["supportedActions"] = {};
let apiProperties: Config["apiProperties"] = {};

// Function to load config from API
async function loadConfig(): Promise<void> {
	try {
		const domain = process.env.DOMAIN;
		const version = process.env.VERSION;

		if (!domain || !version) {
			throw new Error(
				"DOMAIN and VERSION must be set in the environment variables."
			);
		}

		const url = `https://dev-automation.ondc.org/config-service/api-service/supportedActions?domain=${encodeURIComponent(
			domain
		)}&version=${encodeURIComponent(version)}`;

		const response = await axios.get(url);
		const config = response.data as Config;

		supportedActions = config.supportedActions;
		apiProperties = config.apiProperties;
	} catch (error) {
		console.error("Error loading config from API:", error);
		throw error;
	}
}

// Load the config immediately and export a promise
const configPromise = loadConfig();

// Exporting config variables and the promise
export { configPromise, supportedActions, apiProperties };
