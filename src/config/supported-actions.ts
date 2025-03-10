import fs from "fs";
import yaml from "js-yaml";
import path from "path";

interface Config {
	supportedActions: Record<string, string[]>;
	apiProperties: Record<
		string,
		{ async_predecessor: string | null; transaction_partner: string[] }
	>;
}

function loadConfig(): Config {
	try {
		const fileContents = fs.readFileSync(
			path.resolve(__dirname, "./supported-actions.yaml"),
			"utf8"
		);
		const config = yaml.load(fileContents) as Config;
		return config;
	} catch (error) {
		console.error("Error loading YAML config:", error);
		throw error;
	}
}

// Load the configuration
const { supportedActions, apiProperties } = loadConfig();

// Export for use in other files
export { supportedActions, apiProperties };
