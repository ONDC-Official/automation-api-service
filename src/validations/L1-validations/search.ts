import validations from "../../utils/validation-utils";
import payloadUtils from "../../utils/payload-utils";
import { getError } from "../errors/errors";

function validate_attribute_1(payload: any, externalData = {}) {
	const scope = payloadUtils.getJsonPath(payload, "$");
	for (const testObj of scope) {
		testObj._EXTERNAL = externalData;

		const attr = payloadUtils.getJsonPath(
			testObj,
			"$.context.location.country.code"
		);
		const nulls = ["null"];
		const skipCheck = false;
		if (skipCheck) continue;
		const output = validations.NONE_IN(attr, nulls);
		if (!output)
			return {
				valid: false,
				errorCode: 50001,
			};
	}
	return { valid: true };
}

function validate_attribute_2(payload: any, externalData = {}) {
	const scope = payloadUtils.getJsonPath(payload, "$");
	for (const testObj of scope) {
		testObj._EXTERNAL = externalData;

		const attr = payloadUtils.getJsonPath(
			testObj,
			"$.context.location.city.code"
		);
		const nulls = ["null"];
		const skipCheck = false;
		if (skipCheck) continue;
		const output = validations.NONE_IN(attr, nulls);
		if (!output)
			return {
				valid: false,
				errorCode: 30000,
			};
	}
	return { valid: true };
}

function validate_attribute_3(payload: any, externalData = {}) {
	const scope = payloadUtils.getJsonPath(payload, "$");
	for (const testObj of scope) {
		testObj._EXTERNAL = externalData;

		const attr = payloadUtils.getJsonPath(testObj, "$.context.domain");
		const nulls = ["null"];
		const skipCheck = false;
		if (skipCheck) continue;
		const output = validations.NONE_IN(attr, nulls);
		if (!output)
			return {
				valid: false,
				errorCode: 30000,
			};
	}
	return { valid: true };
}

function validate_attribute_4(payload: any, externalData = {}) {
	const scope = payloadUtils.getJsonPath(payload, "$");
	for (const testObj of scope) {
		testObj._EXTERNAL = externalData;

		const attr = payloadUtils.getJsonPath(testObj, "$.context.timestamp");
		const nulls = ["null"];
		const skipCheck = false;
		if (skipCheck) continue;
		const output = validations.NONE_IN(attr, nulls);
		if (!output)
			return {
				valid: false,
				errorCode: 30000,
			};
	}
	return { valid: true };
}

function validate_attribute_5(payload: any, externalData = {}) {
	const scope = payloadUtils.getJsonPath(payload, "$");
	for (const testObj of scope) {
		testObj._EXTERNAL = externalData;

		const attr = payloadUtils.getJsonPath(testObj, "$.context.bap_id");
		const nulls = ["null"];
		const skipCheck = false;
		if (skipCheck) continue;
		const output = validations.NONE_IN(attr, nulls);
		if (!output)
			return {
				valid: false,
				errorCode: 30000,
			};
	}
	return { valid: true };
}

function validate_attribute_6(payload: any, externalData = {}) {
	const scope = payloadUtils.getJsonPath(payload, "$");
	for (const testObj of scope) {
		testObj._EXTERNAL = externalData;

		const attr = payloadUtils.getJsonPath(testObj, "$.context.transaction_id");
		const nulls = ["null"];
		const skipCheck = false;
		if (skipCheck) continue;
		const output = validations.NONE_IN(attr, nulls);
		if (!output)
			return {
				valid: false,
				errorCode: 30000,
			};
	}
	return { valid: true };
}

function validate_attribute_7(payload: any, externalData = {}) {
	const scope = payloadUtils.getJsonPath(payload, "$");
	for (const testObj of scope) {
		testObj._EXTERNAL = externalData;

		const attr = payloadUtils.getJsonPath(testObj, "$.context.message_id");
		const nulls = ["null"];
		const skipCheck = false;
		if (skipCheck) continue;
		const output = validations.NONE_IN(attr, nulls);
		if (!output)
			return {
				valid: false,
				errorCode: 30000,
			};
	}
	return { valid: true };
}

function validate_attribute_8(payload: any, externalData = {}) {
	const scope = payloadUtils.getJsonPath(payload, "$");
	for (const testObj of scope) {
		testObj._EXTERNAL = externalData;

		const attr = payloadUtils.getJsonPath(testObj, "$.context.version");
		const nulls = ["null"];
		const skipCheck = false;
		if (skipCheck) continue;
		const output = validations.NONE_IN(attr, nulls);
		if (!output)
			return {
				valid: false,
				errorCode: 30000,
			};
	}
	return { valid: true };
}

function validate_attribute_9(payload: any, externalData = {}) {
	const scope = payloadUtils.getJsonPath(payload, "$");
	for (const testObj of scope) {
		testObj._EXTERNAL = externalData;

		const attr = payloadUtils.getJsonPath(testObj, "$.context.action");
		const nulls = ["null"];
		const skipCheck = false;
		if (skipCheck) continue;
		const output = validations.NONE_IN(attr, nulls);
		if (!output)
			return {
				valid: false,
				errorCode: 30000,
			};
	}
	return { valid: true };
}

function validate_attribute_10(payload: any, externalData = {}) {
	const scope = payloadUtils.getJsonPath(payload, "$");
	for (const testObj of scope) {
		testObj._EXTERNAL = externalData;

		const attr = payloadUtils.getJsonPath(testObj, "$.context.bap_uri");
		const nulls = ["null"];
		const skipCheck = false;
		if (skipCheck) continue;
		const output = validations.NONE_IN(attr, nulls);
		if (!output)
			return {
				valid: false,
				errorCode: 30000,
			};
	}
	return { valid: true };
}

function validate_attribute_11(payload: any, externalData = {}) {
	const scope = payloadUtils.getJsonPath(payload, "$");
	for (const testObj of scope) {
		testObj._EXTERNAL = externalData;

		const attr = payloadUtils.getJsonPath(testObj, "$.context.ttl");
		const nulls = ["null"];
		const skipCheck = false;
		if (skipCheck) continue;
		const output = validations.NONE_IN(attr, nulls);
		if (!output)
			return {
				valid: false,
				errorCode: 30000,
			};
	}
	return { valid: true };
}

function validate_attribute_12(payload: any, externalData = {}) {
	const scope = payloadUtils.getJsonPath(payload, "$");
	for (const testObj of scope) {
		testObj._EXTERNAL = externalData;

		const attr = payloadUtils.getJsonPath(
			testObj,
			"$.message.intent.fulfillment.vehicle.category"
		);
		const nulls = ["null"];
		const skipCheck = false;
		if (skipCheck) continue;
		const output = validations.NONE_IN(attr, nulls);
		if (!output)
			return {
				valid: false,
				errorCode: 30000,
			};
	}
	return { valid: true };
}

function validate_enum_1(payload: any, externalData = {}) {
	const scope = payloadUtils.getJsonPath(payload, "$");
	for (const testObj of scope) {
		testObj._EXTERNAL = externalData;

		const enumList = ["search"];
		const enumPath = payloadUtils.getJsonPath(testObj, "$.context.action");
		const skipCheck = false;
		if (skipCheck) continue;
		const output = validations.ALL_IN(enumPath, enumList);
		if (!output)
			return {
				valid: false,
				errorCode: 30000,
			};
	}
	return { valid: true };
}

function validate_enum_2(payload: any, externalData = {}) {
	const scope = payloadUtils.getJsonPath(payload, "$");
	for (const testObj of scope) {
		testObj._EXTERNAL = externalData;

		const enumList = ["IND"];
		const enumPath = payloadUtils.getJsonPath(
			testObj,
			"$.context.location.country.code"
		);
		const skipCheck = false;
		if (skipCheck) continue;
		const output = validations.ALL_IN(enumPath, enumList);
		if (!output)
			return {
				valid: false,
				errorCode: 30000,
			};
	}
	return { valid: true };
}

function validate_enum_4(payload: any, externalData = {}) {
	const scope = payloadUtils.getJsonPath(payload, "$");
	for (const testObj of scope) {
		testObj._EXTERNAL = externalData;

		const enumList = ["ONDC:TRV11"];
		const enumPath = payloadUtils.getJsonPath(testObj, "$.context.domain");
		const skipCheck = false;
		if (skipCheck) continue;
		const output = validations.ALL_IN(enumPath, enumList);
		if (!output)
			return {
				valid: false,
				errorCode: 30000,
			};
	}
	return { valid: true };
}

function validate_enum_5(payload: any, externalData = {}) {
	const scope = payloadUtils.getJsonPath(payload, "$");
	for (const testObj of scope) {
		testObj._EXTERNAL = externalData;

		const enumList = ["METRO"];
		const enumPath = payloadUtils.getJsonPath(
			testObj,
			"$.message.intent.fulfillment.vehicle.category"
		);
		const skipCheck = false;
		if (skipCheck) continue;
		const output = validations.ALL_IN(enumPath, enumList);
		if (!output)
			return {
				valid: false,
				errorCode: 30000,
			};
	}
	return { valid: true };
}

// function validate_enum_8(payload: any, externalData = {}) {
// 	const scope = payloadUtils.getJsonPath(payload, "$");
// 	for (const testObj of scope) {
// 		testObj._EXTERNAL = externalData;

// 		const enumList = ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"];
// 		const enumPath = payloadUtils.getJsonPath(
// 			testObj,
// 			"$.message.intent.fulfillment.stops[*].type"
// 		);
// 		const skipCheck = false;
// 		if (skipCheck) continue;
// 		const output = validations.ALL_IN(enumPath, enumList);
// 		if (!output)
// 			return {
// 				valid: false,
// 				errorCode: 30000,
// 			};
// 	}
// 	return { valid: true };
// }

const testFunctions: Array<
	(
		payload: any,
		externalData: any
	) => {
		valid: boolean;
		errorCode?: number;
	}
> = [
	validate_attribute_1,
	validate_attribute_2,
	validate_attribute_3,
	validate_attribute_4,
	validate_attribute_5,
	validate_attribute_6,
	validate_attribute_7,
	validate_attribute_8,
	validate_attribute_9,
	validate_attribute_10,
	validate_attribute_11,
	validate_attribute_12,
	validate_enum_1,
	validate_enum_2,
	validate_enum_4,
	validate_enum_5,
	// validate_enum_8,
];

export function validateSearch(payload: string, externalData = {}) {
	for (const fn of testFunctions) {
		const result = fn(payload, externalData);
		if (result.errorCode && !result.valid) {
			const error = getError(result.errorCode);
			error.message += " " + fn.name;
			return { valid: false, error: error };
		}
	}
	return { valid: true };
}