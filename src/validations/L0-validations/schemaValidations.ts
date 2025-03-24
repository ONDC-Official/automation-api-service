import Ajv from "ajv";
import addFormats from "ajv-formats";
import logger from "../../utils/logger";
import getSchema from "../L0-schemas";

export function performL0Validations(actionPayload: any, action: string) {
	logger.info("Performing L0 validations", action);
	try {
		const schema = getSchema(action);
		const ajv = new Ajv({ allErrors: true });
		addFormats(ajv);
		const validate = ajv.compile(schema as any);
		const valid = validate(actionPayload);
		if (!valid) return createErrorMessage(validate, valid);
		logger.info("L0 validations result", JSON.stringify(validate));
		return { valid: valid, errors: validate.errors };
	} catch (e) {
		logger.error("Error in L0 validations", e);
		return { valid: false, errors: "invalid action" };
	}
}

function createErrorMessage(validate: any, valid: boolean) {
	const errorMessages = validate.errors.map((error: any) => {
		const { instancePath, message, keyword, params } = error;

		// Customize error messages based on validation keywords
		switch (keyword) {
			case "additionalProperties":
				const additionalProp = params.additionalProperty;
				return `${instancePath} ${message}: '${additionalProp}'`;
			case "type":
				const expectedType = params.type;
				return `${instancePath} should be of type '${expectedType}'`;

			case "enum":
				const allowedValues = params.allowedValues.join(", ");
				return `${instancePath} must be one of the allowed values: ${allowedValues}`;

			case "minLength":
				return `${instancePath} should have at least ${params.limit} characters`;

			case "maxLength":
				return `${instancePath} should have no more than ${params.limit} characters`;

			case "minimum":
				return `${instancePath} should be >= ${params.limit}`;

			case "maximum":
				return `${instancePath} should be <= ${params.limit}`;

			case "required":
				const missingProperty = params.missingProperty;
				return `Missing required property: '${missingProperty}'`;

			default:
				// General message for other error types
				return `${instancePath} ${message}`;
		}
	});

	return { valid: false, errors: errorMessages.join(",") };
}
