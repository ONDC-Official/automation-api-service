import { validationOutput } from "./types";

export function performL1CustomValidations(
	payload: any,
	action: string,
	allErrors = false,
	externalData = {}
): validationOutput {
	console.log("Performing custom L1 validations for action: " + action);
	return [
		{
			valid: true,
			code: 200,
			description: "Custom validation passed",
		},
	];
}
