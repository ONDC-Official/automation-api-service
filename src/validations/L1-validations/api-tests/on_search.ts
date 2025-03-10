import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function on_search(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;

        function REQUIRED_CONTEXT_CODE_1(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.location.country.code",
                );
                const enumList = ["IND"];
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_CODE_1**: all of the following sub conditions must be met:

  - **condition REQUIRED_CONTEXT_CODE_1.1**: $.context.location.country.code must be present in the payload
  - **condition REQUIRED_CONTEXT_CODE_1.2**: every element of $.context.location.country.code must be in ["IND"]

	> Note: **Condition REQUIRED_CONTEXT_CODE_1** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_CODE_2(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.location.city.code",
                );
                const enumList = ["std:080"];
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_CODE_2**: all of the following sub conditions must be met:

  - **condition REQUIRED_CONTEXT_CODE_2.1**: $.context.location.city.code must be present in the payload
  - **condition REQUIRED_CONTEXT_CODE_2.2**: every element of $.context.location.city.code must be in ["std:080"]

	> Note: **Condition REQUIRED_CONTEXT_CODE_2** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_DOMAIN_3(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.domain",
                );
                const enumList = ["ONDC:TRV11"];
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_DOMAIN_3**: all of the following sub conditions must be met:

  - **condition REQUIRED_CONTEXT_DOMAIN_3.1**: $.context.domain must be present in the payload
  - **condition REQUIRED_CONTEXT_DOMAIN_3.2**: every element of $.context.domain must be in ["ONDC:TRV11"]

	> Note: **Condition REQUIRED_CONTEXT_DOMAIN_3** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_TIMESTAMP_4(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.timestamp",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_TIMESTAMP_4**: $.context.timestamp must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_TIMESTAMP_4** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BAP_ID_5(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bap_id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_BAP_ID_5**: $.context.bap_id must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_BAP_ID_5** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_TRANSACTION_ID_6(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.transaction_id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_TRANSACTION_ID_6**: $.context.transaction_id must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_TRANSACTION_ID_6** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_MESSAGE_ID_7(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.message_id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_MESSAGE_ID_7**: $.context.message_id must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_MESSAGE_ID_7** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_VERSION_8(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.version",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_VERSION_8**: $.context.version must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_VERSION_8** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_ACTION_9(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.action",
                );
                const enumList = ["on_search"];
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_ACTION_9**: all of the following sub conditions must be met:

  - **condition REQUIRED_CONTEXT_ACTION_9.1**: $.context.action must be present in the payload
  - **condition REQUIRED_CONTEXT_ACTION_9.2**: every element of $.context.action must be in ["on_search"]

	> Note: **Condition REQUIRED_CONTEXT_ACTION_9** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BAP_URI_10(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bap_uri",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_BAP_URI_10**: $.context.bap_uri must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_BAP_URI_10** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_TTL_11(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(testObj, "$.context.ttl");
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_TTL_11**: $.context.ttl must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_TTL_11** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BPP_ID_12(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bpp_id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_BPP_ID_12**: $.context.bpp_id must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_BPP_ID_12** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BPP_URI_13(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bpp_uri",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_BPP_URI_13**: $.context.bpp_uri must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_BPP_URI_13** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME_14(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.descriptor.name",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_NAME_14**: $.message.catalog.descriptor.name must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_NAME_14** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_15(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_ID_15**: $.message.catalog.providers[*].id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_15** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME_16(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].descriptor.name",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_NAME_16**: $.message.catalog.providers[*].descriptor.name must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_NAME_16** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_17(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_ID_17**: $.message.catalog.providers[*].fulfillments[*].id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_17** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TYPE_18(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].type",
                );
                const enumList = ["ROUTE", "TRIP"];
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_TYPE_18**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_TYPE_18.1**: $.message.catalog.providers[*].fulfillments[*].type must be present in the payload
  - **condition REQUIRED_MESSAGE_TYPE_18.2**: every element of $.message.catalog.providers[*].fulfillments[*].type must be in ["ROUTE", "TRIP"]

	> Note: **Condition REQUIRED_MESSAGE_TYPE_18** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TYPE_19(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].type",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_TYPE_19**: $.message.catalog.providers[*].fulfillments[*].type must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_TYPE_19** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CODE_20(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].stops[*].location.descriptor.code",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CODE_20**: $.message.catalog.providers[*].fulfillments[*].stops[*].location.descriptor.code must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_CODE_20** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME_21(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].stops[*].location.descriptor.name",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_NAME_21**: $.message.catalog.providers[*].fulfillments[*].stops[*].location.descriptor.name must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_NAME_21** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_GPS_22(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].stops[*].location.gps",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_GPS_22**: $.message.catalog.providers[*].fulfillments[*].stops[*].location.gps must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_GPS_22** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_23(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_ID_23**: $.message.catalog.providers[*].fulfillments[*].id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_23** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CATEGORY_24(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const enumList = ["BUS", "METRO"];
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["METRO"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CATEGORY_24**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_CATEGORY_24.1**: $.message.catalog.providers[*].fulfillments[*].vehicle.category must be present in the payload
  - **condition REQUIRED_MESSAGE_CATEGORY_24.2**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must be in ["BUS", "METRO"]

	> Note: **Condition REQUIRED_MESSAGE_CATEGORY_24** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_CODE_25(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.location.country.code",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_CODE_25**: $.context.location.country.code must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_CODE_25** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_CODE_26(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.location.city.code",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_CODE_26**: $.context.location.city.code must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_CODE_26** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_DOMAIN_27(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.domain",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_DOMAIN_27**: $.context.domain must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_DOMAIN_27** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_TIMESTAMP_28(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.timestamp",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_TIMESTAMP_28**: $.context.timestamp must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_TIMESTAMP_28** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BAP_ID_29(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bap_id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_BAP_ID_29**: $.context.bap_id must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_BAP_ID_29** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_TRANSACTION_ID_30(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.transaction_id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_TRANSACTION_ID_30**: $.context.transaction_id must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_TRANSACTION_ID_30** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_MESSAGE_ID_31(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.message_id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_MESSAGE_ID_31**: $.context.message_id must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_MESSAGE_ID_31** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_VERSION_32(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.version",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_VERSION_32**: $.context.version must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_VERSION_32** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_ACTION_33(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.action",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_ACTION_33**: $.context.action must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_ACTION_33** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BAP_URI_34(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bap_uri",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_BAP_URI_34**: $.context.bap_uri must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_BAP_URI_34** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_TTL_35(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(testObj, "$.context.ttl");
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_TTL_35**: $.context.ttl must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_TTL_35** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BPP_ID_36(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bpp_id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_BPP_ID_36**: $.context.bpp_id must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_BPP_ID_36** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BPP_URI_37(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bpp_uri",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_BPP_URI_37**: $.context.bpp_uri must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_BPP_URI_37** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME_38(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.descriptor.name",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_NAME_38**: $.message.catalog.descriptor.name must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_NAME_38** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_39(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_ID_39**: $.message.catalog.providers[*].id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_39** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_40(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].categories[*].id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_ID_40**: $.message.catalog.providers[*].categories[*].id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_40** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CODE_41(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].categories[*].descriptor.code",
                );
                const enumList = ["TICKET", "PASS"];
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CODE_41**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_CODE_41.1**: $.message.catalog.providers[*].categories[*].descriptor.code must be present in the payload
  - **condition REQUIRED_MESSAGE_CODE_41.2**: every element of $.message.catalog.providers[*].categories[*].descriptor.code must be in ["TICKET", "PASS"]

	> Note: **Condition REQUIRED_MESSAGE_CODE_41** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_START_42(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].time.range.start",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_START_42**: $.message.catalog.providers[*].time.range.start must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_START_42** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_END_43(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].time.range.end",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_END_43**: $.message.catalog.providers[*].time.range.end must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_END_43** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME_44(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].descriptor.name",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_NAME_44**: $.message.catalog.providers[*].descriptor.name must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_NAME_44** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_45(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_ID_45**: $.message.catalog.providers[*].fulfillments[*].id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_45** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TYPE_46(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].type",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_TYPE_46**: $.message.catalog.providers[*].fulfillments[*].type must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_TYPE_46** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_47(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_ID_47**: $.message.catalog.providers[*].fulfillments[*].id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_47** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TYPE_48(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].type",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_TYPE_48**: $.message.catalog.providers[*].fulfillments[*].type must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_TYPE_48** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_GPS_49(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].stops[*].location.gps",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_GPS_49**: $.message.catalog.providers[*].fulfillments[*].stops[*].location.gps must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_GPS_49** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CATEGORY_50(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CATEGORY_50**: $.message.catalog.providers[*].fulfillments[*].vehicle.category must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_CATEGORY_50** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_COLLECTED_BY_51(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].payments[*].collected_by",
                );
                const enumList = ["BPP", "BAP"];
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                );
                const useCode = ["BUS"];

                const skipCheck = !validations.allIn(useCasePath, useCode);
                if (skipCheck) continue;

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_COLLECTED_BY_51**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_COLLECTED_BY_51.1**: $.message.catalog.providers[*].payments[*].collected_by must be present in the payload
  - **condition REQUIRED_MESSAGE_COLLECTED_BY_51.2**: every element of $.message.catalog.providers[*].payments[*].collected_by must be in ["BPP", "BAP"]

	> Note: **Condition REQUIRED_MESSAGE_COLLECTED_BY_51** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_CODE_1(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["SJT", "SFSJT", "RJT", "PASS"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].descriptor.code",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_CODE_1**: every element of $.message.catalog.providers[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]

	> Note: **Condition VALID_ENUM_MESSAGE_CODE_1** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.catalog.providers[*].descriptor.code must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_TYPE_2(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["QR"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_TYPE_2**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type must be in ["QR"]

	> Note: **Condition VALID_ENUM_MESSAGE_TYPE_2** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_STATUS_3(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["UNCLAIMED", "CLAIMED"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].stops[*].authorization.status",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_STATUS_3**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]

	> Note: **Condition VALID_ENUM_MESSAGE_STATUS_3** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.status must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_STATUS_4(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["NOT-PAID", "PAID"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].payments[*].status",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_STATUS_4**: every element of $.message.catalog.providers[*].payments[*].status must be in ["NOT-PAID", "PAID"]

	> Note: **Condition VALID_ENUM_MESSAGE_STATUS_4** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.catalog.providers[*].payments[*].status must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_TYPE_5(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "PRE-ORDER",
                    "ON-FULFILLMENT",
                    "POST-FULFILLMENT",
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].payments[*].type",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_TYPE_5**: every element of $.message.catalog.providers[*].payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]

	> Note: **Condition VALID_ENUM_MESSAGE_TYPE_5** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.catalog.providers[*].payments[*].type must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_0(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const validTags = ["FARE_POLICY"];
                const tagPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].items[*].tags[*].descriptor.code",
                );

                const skipCheck = !validations.arePresent(tagPath);
                if (skipCheck) continue;

                const validate = validations.allIn(tagPath, validTags);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_0**: every element of $.message.catalog.providers[*].items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]

	> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.catalog.providers[*].items[*].tags[*].descriptor.code must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_0_FARE_POLICY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].descriptor.code",
                );
                const validValues = ["RESTRICTED_PERSON", "RESTRICTION_PROOF"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_0_FARE_POLICY**: every element of $.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_1(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const validTags = ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"];
                const tagPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].fulfillments[*].tags[*].descriptor.code",
                );

                const skipCheck = !validations.arePresent(tagPath);
                if (skipCheck) continue;

                const validate = validations.allIn(tagPath, validTags);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_1**: every element of $.message.catalog.providers[*].fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]

	> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.catalog.providers[*].fulfillments[*].tags[*].descriptor.code must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_1_ROUTE_INFO(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.catalog.providers[*].fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].descriptor.code",
                );
                const validValues = ["ROUTE_ID", "ROUTE_DIRECTION"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_1_ROUTE_INFO**: every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_1_TICKET_INFO(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.catalog.providers[*].fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].descriptor.code",
                );
                const validValues = ["NUMBER"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_1_TICKET_INFO**: every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_1_TRIP_DETAILS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.catalog.providers[*].fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].descriptor.code",
                );
                const validValues = ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_1_TRIP_DETAILS**: every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_2(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const validTags = ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"];
                const tagPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].payments[*].tags[*].descriptor.code",
                );

                const skipCheck = !validations.arePresent(tagPath);
                if (skipCheck) continue;

                const validate = validations.allIn(tagPath, validTags);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_2**: every element of $.message.catalog.providers[*].payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]

	> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.catalog.providers[*].payments[*].tags[*].descriptor.code must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_2_BUYER_FINDER_FEES(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.catalog.providers[*].payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].descriptor.code",
                );
                const validValues = [
                    "BUYER_FINDER_FEES_TYPE",
                    "BUYER_FINDER_FEES_PERCENTAGE",
                    "BUYER_FINDER_FEES_AMOUNT",
                ];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.message.catalog.providers[*].payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_2_SETTLEMENT_TERMS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.catalog.providers[*].payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].descriptor.code",
                );
                const validValues = [
                    "SETTLEMENT_WINDOW",
                    "SETTLEMENT_BASIS",
                    "SETTLEMENT_TYPE",
                    "MANDATORY_ARBITRATION",
                    "COURT_JURISDICTION",
                    "DELAY_INTEREST",
                    "STATIC_TERMS",
                    "SETTLEMENT_AMOUNT",
                ];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.message.catalog.providers[*].payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_3(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const validTags = ["SCHEDULED_INFO"];
                const tagPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.catalog.providers[*].tags[*].descriptor.code",
                );

                const skipCheck = !validations.arePresent(tagPath);
                if (skipCheck) continue;

                const validate = validations.allIn(tagPath, validTags);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_3**: every element of $.message.catalog.providers[*].tags[*].descriptor.code must be in ["SCHEDULED_INFO"]

	> Note: **Condition validate_tag_3** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.catalog.providers[*].tags[*].descriptor.code must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_3_SCHEDULED_INFO(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.catalog.providers[*].tags[?(@.descriptor.code=='SCHEDULED_INFO')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].descriptor.code",
                );
                const validValues = ["GTFS"];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_3_SCHEDULED_INFO**: every element of $.message.catalog.providers[*].tags[?(@.descriptor.code=='SCHEDULED_INFO')].list[*].descriptor.code must be in ["GTFS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }

        const testFunctions: testFunctionArray = [
            REQUIRED_CONTEXT_CODE_1,
            REQUIRED_CONTEXT_CODE_2,
            REQUIRED_CONTEXT_DOMAIN_3,
            REQUIRED_CONTEXT_TIMESTAMP_4,
            REQUIRED_CONTEXT_BAP_ID_5,
            REQUIRED_CONTEXT_TRANSACTION_ID_6,
            REQUIRED_CONTEXT_MESSAGE_ID_7,
            REQUIRED_CONTEXT_VERSION_8,
            REQUIRED_CONTEXT_ACTION_9,
            REQUIRED_CONTEXT_BAP_URI_10,
            REQUIRED_CONTEXT_TTL_11,
            REQUIRED_CONTEXT_BPP_ID_12,
            REQUIRED_CONTEXT_BPP_URI_13,
            REQUIRED_MESSAGE_NAME_14,
            REQUIRED_MESSAGE_ID_15,
            REQUIRED_MESSAGE_NAME_16,
            REQUIRED_MESSAGE_ID_17,
            REQUIRED_MESSAGE_TYPE_18,
            REQUIRED_MESSAGE_TYPE_19,
            REQUIRED_MESSAGE_CODE_20,
            REQUIRED_MESSAGE_NAME_21,
            REQUIRED_MESSAGE_GPS_22,
            REQUIRED_MESSAGE_ID_23,
            REQUIRED_MESSAGE_CATEGORY_24,
            REQUIRED_CONTEXT_CODE_25,
            REQUIRED_CONTEXT_CODE_26,
            REQUIRED_CONTEXT_DOMAIN_27,
            REQUIRED_CONTEXT_TIMESTAMP_28,
            REQUIRED_CONTEXT_BAP_ID_29,
            REQUIRED_CONTEXT_TRANSACTION_ID_30,
            REQUIRED_CONTEXT_MESSAGE_ID_31,
            REQUIRED_CONTEXT_VERSION_32,
            REQUIRED_CONTEXT_ACTION_33,
            REQUIRED_CONTEXT_BAP_URI_34,
            REQUIRED_CONTEXT_TTL_35,
            REQUIRED_CONTEXT_BPP_ID_36,
            REQUIRED_CONTEXT_BPP_URI_37,
            REQUIRED_MESSAGE_NAME_38,
            REQUIRED_MESSAGE_ID_39,
            REQUIRED_MESSAGE_ID_40,
            REQUIRED_MESSAGE_CODE_41,
            REQUIRED_MESSAGE_START_42,
            REQUIRED_MESSAGE_END_43,
            REQUIRED_MESSAGE_NAME_44,
            REQUIRED_MESSAGE_ID_45,
            REQUIRED_MESSAGE_TYPE_46,
            REQUIRED_MESSAGE_ID_47,
            REQUIRED_MESSAGE_TYPE_48,
            REQUIRED_MESSAGE_GPS_49,
            REQUIRED_MESSAGE_CATEGORY_50,
            REQUIRED_MESSAGE_COLLECTED_BY_51,
            VALID_ENUM_MESSAGE_CODE_1,
            VALID_ENUM_MESSAGE_TYPE_2,
            VALID_ENUM_MESSAGE_STATUS_3,
            VALID_ENUM_MESSAGE_STATUS_4,
            VALID_ENUM_MESSAGE_TYPE_5,
            validate_tag_0,
            validate_tag_0_FARE_POLICY,
            validate_tag_1,
            validate_tag_1_ROUTE_INFO,
            validate_tag_1_TICKET_INFO,
            validate_tag_1_TRIP_DETAILS,
            validate_tag_2,
            validate_tag_2_BUYER_FINDER_FEES,
            validate_tag_2_SETTLEMENT_TERMS,
            validate_tag_3,
            validate_tag_3_SCHEDULED_INFO,
        ];

        let invalidResults: validationOutput = [];
        for (const fn of testFunctions) {
            const subResult = fn(input);
            // .filter(r => !r.valid);
            invalidResults = [...invalidResults, ...subResult];
            if (!input.config.runAllValidations && invalidResults.length > 0) {
                return invalidResults;
            }
        }
        if (invalidResults.length > 0) {
            // return invalidResults;
            subResults = invalidResults;
            valid = subResults.every((r) => r.valid);
        }

        delete testObj._EXTERNAL;
    }
    return [{ valid: valid, code: 200 }, ...subResults];
}
