import { logInfo } from "../../utils/logger";
import { validationOutput } from "./types";

export async function performL1CustomValidations(
	payload: any,
	action: string,
	allErrors = false,
	externalData = {}
): Promise<validationOutput> {
	// console.log("Performing custom L1 validations for action: " + action);
	logInfo({
		message: "Performing custom L1 validations",
		meta: {
			action,
			allErrors,
			externalData,
		},
	});
	return [
		{
			valid: true,
			code: 200,
			description: "Custom validation passed",
		},
	];
}
