import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function on_init(input: validationInput): validationOutput {
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
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
                const enumList = ["on_init"];
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
  - **condition REQUIRED_CONTEXT_ACTION_9.2**: every element of $.context.action must be in ["on_init"]

	> Note: **Condition REQUIRED_CONTEXT_ACTION_9** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_14(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_ID_14**: $.message.order.items[*].id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_14** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME_15(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].descriptor.name",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_NAME_15**: $.message.order.items[*].descriptor.name must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_NAME_15** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CODE_16(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].descriptor.code",
                );
                const enumList = ["SJT", "SFSJT", "RJT", "PASS"];
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_CODE_16**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_CODE_16.1**: $.message.order.items[*].descriptor.code must be present in the payload
  - **condition REQUIRED_MESSAGE_CODE_16.2**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]

	> Note: **Condition REQUIRED_MESSAGE_CODE_16** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CURRENCY_17(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].price.currency",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_CURRENCY_17**: $.message.order.items[*].price.currency must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_CURRENCY_17** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_VALUE_18(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].price.value",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_VALUE_18**: $.message.order.items[*].price.value must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_VALUE_18** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_COUNT_19(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].quantity.selected.count",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_COUNT_19**: $.message.order.items[*].quantity.selected.count must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_COUNT_19** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_FULFILLMENT_IDS_20(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].fulfillment_ids[*]",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_FULFILLMENT_IDS_20**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_FULFILLMENT_IDS_20** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_LABEL_21(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].time.label",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_LABEL_21**: $.message.order.items[*].time.label must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_LABEL_21** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_DURATION_22(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].time.duration",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_DURATION_22**: $.message.order.items[*].time.duration must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_DURATION_22** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
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
                    "$.message.order.provider.id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_ID_23**: $.message.order.provider.id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_23** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME_24(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.provider.descriptor.name",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_NAME_24**: $.message.order.provider.descriptor.name must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_NAME_24** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_25(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_ID_25**: $.message.order.fulfillments[*].id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_25** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TYPE_26(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].type",
                );
                const enumList = ["ROUTE", "TRIP"];
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_TYPE_26**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_TYPE_26.1**: $.message.order.fulfillments[*].type must be present in the payload
  - **condition REQUIRED_MESSAGE_TYPE_26.2**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]

	> Note: **Condition REQUIRED_MESSAGE_TYPE_26** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME_27(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].stops[*].location.descriptor.name",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_NAME_27**: $.message.order.fulfillments[*].stops[*].location.descriptor.name must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_NAME_27** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CODE_28(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].stops[*].location.descriptor.code",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_CODE_28**: $.message.order.fulfillments[*].stops[*].location.descriptor.code must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_CODE_28** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_GPS_29(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].stops[*].location.gps",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_GPS_29**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_GPS_29** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_30(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_ID_30**: $.message.order.fulfillments[*].id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_30** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CATEGORY_31(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
                );
                const enumList = ["BUS", "METRO"];
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_CATEGORY_31**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_CATEGORY_31.1**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
  - **condition REQUIRED_MESSAGE_CATEGORY_31.2**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]

	> Note: **Condition REQUIRED_MESSAGE_CATEGORY_31** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_VALUE_32(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.price.value",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_VALUE_32**: $.message.order.quote.price.value must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_VALUE_32** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CURRENCY_33(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.price.currency",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_CURRENCY_33**: $.message.order.quote.price.currency must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_CURRENCY_33** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TITLE_34(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].title",
                );
                const enumList = [
                    "BASE_FARE",
                    "REFUND",
                    "CANCELLATION_CHARGES",
                    "OFFER",
                    "TOLL",
                ];
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_TITLE_34**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_TITLE_34.1**: $.message.order.quote.breakup[*].title must be present in the payload
  - **condition REQUIRED_MESSAGE_TITLE_34.2**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]

	> Note: **Condition REQUIRED_MESSAGE_TITLE_34** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_35(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].item.id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_ID_35**: $.message.order.quote.breakup[*].item.id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_35** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CURRENCY_36(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].price.currency",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_CURRENCY_36**: $.message.order.quote.breakup[*].price.currency must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_CURRENCY_36** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_VALUE_37(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].price.value",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_VALUE_37**: $.message.order.quote.breakup[*].price.value must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_VALUE_37** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_38(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_ID_38**: $.message.order.payments[*].id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_38** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_COLLECTED_BY_39(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].collected_by",
                );
                const enumList = ["BPP", "BAP"];
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_COLLECTED_BY_39**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_COLLECTED_BY_39.1**: $.message.order.payments[*].collected_by must be present in the payload
  - **condition REQUIRED_MESSAGE_COLLECTED_BY_39.2**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]

	> Note: **Condition REQUIRED_MESSAGE_COLLECTED_BY_39** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_STATUS_40(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].status",
                );
                const enumList = ["NOT-PAID", "PAID"];
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_STATUS_40**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_STATUS_40.1**: $.message.order.payments[*].status must be present in the payload
  - **condition REQUIRED_MESSAGE_STATUS_40.2**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]

	> Note: **Condition REQUIRED_MESSAGE_STATUS_40** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TYPE_41(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].type",
                );
                const enumList = [
                    "PRE-ORDER",
                    "ON-FULFILLMENT",
                    "POST-FULFILLMENT",
                ];
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_TYPE_41**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_TYPE_41.1**: $.message.order.payments[*].type must be present in the payload
  - **condition REQUIRED_MESSAGE_TYPE_41.2**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]

	> Note: **Condition REQUIRED_MESSAGE_TYPE_41** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_CODE_42(
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_CONTEXT_CODE_42**: $.context.location.country.code must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_CODE_42** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_CODE_43(
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_CONTEXT_CODE_43**: $.context.location.city.code must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_CODE_43** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_DOMAIN_44(
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_CONTEXT_DOMAIN_44**: $.context.domain must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_DOMAIN_44** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_TIMESTAMP_45(
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_CONTEXT_TIMESTAMP_45**: $.context.timestamp must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_TIMESTAMP_45** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BAP_ID_46(
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_CONTEXT_BAP_ID_46**: $.context.bap_id must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_BAP_ID_46** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_TRANSACTION_ID_47(
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_CONTEXT_TRANSACTION_ID_47**: $.context.transaction_id must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_TRANSACTION_ID_47** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_MESSAGE_ID_48(
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_CONTEXT_MESSAGE_ID_48**: $.context.message_id must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_MESSAGE_ID_48** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_VERSION_49(
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_CONTEXT_VERSION_49**: $.context.version must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_VERSION_49** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_ACTION_50(
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_CONTEXT_ACTION_50**: $.context.action must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_ACTION_50** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BAP_URI_51(
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_CONTEXT_BAP_URI_51**: $.context.bap_uri must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_BAP_URI_51** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_TTL_52(
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_CONTEXT_TTL_52**: $.context.ttl must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_TTL_52** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BPP_ID_53(
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_CONTEXT_BPP_ID_53**: $.context.bpp_id must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_BPP_ID_53** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BPP_URI_54(
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
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_CONTEXT_BPP_URI_54**: $.context.bpp_uri must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_BPP_URI_54** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_55(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_ID_55**: $.message.order.items[*].id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_55** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CODE_56(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].descriptor.code",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_CODE_56**: $.message.order.items[*].descriptor.code must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_CODE_56** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CURRENCY_57(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].price.currency",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_CURRENCY_57**: $.message.order.items[*].price.currency must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_CURRENCY_57** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_VALUE_58(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].price.value",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_VALUE_58**: $.message.order.items[*].price.value must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_VALUE_58** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_COUNT_59(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].quantity.selected.count",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_COUNT_59**: $.message.order.items[*].quantity.selected.count must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_COUNT_59** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_FULFILLMENT_IDS_63(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].fulfillment_ids[*]",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_FULFILLMENT_IDS_63**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_FULFILLMENT_IDS_63** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_64(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.provider.id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_ID_64**: $.message.order.provider.id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_64** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME_65(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.provider.descriptor.name",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_NAME_65**: $.message.order.provider.descriptor.name must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_NAME_65** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_68(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_ID_68**: $.message.order.fulfillments[*].id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_68** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TYPE_69(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].type",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_TYPE_69**: $.message.order.fulfillments[*].type must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_TYPE_69** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_70(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_ID_70**: $.message.order.fulfillments[*].id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_70** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TYPE_71(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].type",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_TYPE_71**: $.message.order.fulfillments[*].type must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_TYPE_71** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_GPS_72(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].stops[*].location.gps",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_GPS_72**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_GPS_72** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CATEGORY_73(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_CATEGORY_73**: $.message.order.fulfillments[*].vehicle.category must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_CATEGORY_73** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_VALUE_74(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.price.value",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_VALUE_74**: $.message.order.quote.price.value must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_VALUE_74** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CURRENCY_75(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.price.currency",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_CURRENCY_75**: $.message.order.quote.price.currency must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_CURRENCY_75** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TITLE_76(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].title",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_TITLE_76**: $.message.order.quote.breakup[*].title must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_TITLE_76** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_77(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].item.id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_ID_77**: $.message.order.quote.breakup[*].item.id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_77** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_COUNT_78(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].item.quantity.selected.count",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_COUNT_78**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_COUNT_78** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_VALUE_79(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].item.price.value",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_VALUE_79**: $.message.order.quote.breakup[*].item.price.value must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_VALUE_79** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CURRENCY_80(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].item.price.currency",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_CURRENCY_80**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_CURRENCY_80** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_81(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].id",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_ID_81**: $.message.order.payments[*].id must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_ID_81** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_COLLECTED_BY_82(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].collected_by",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_COLLECTED_BY_82**: $.message.order.payments[*].collected_by must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_COLLECTED_BY_82** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_STATUS_83(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].status",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_STATUS_83**: $.message.order.payments[*].status must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_STATUS_83** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TYPE_84(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].type",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_TYPE_84**: $.message.order.payments[*].type must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_TYPE_84** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_BANK_CODE_85(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].params.bank_code",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_BANK_CODE_85**: $.message.order.payments[*].params.bank_code must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_BANK_CODE_85** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_BANK_ACCOUNT_NUMBER_86(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payments[*].params.bank_account_number",
                );
                const useCasePath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].vehicle.category",
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
                            description: `- **condition REQUIRED_MESSAGE_BANK_ACCOUNT_NUMBER_86**: $.message.order.payments[*].params.bank_account_number must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_BANK_ACCOUNT_NUMBER_86** can be skipped if the following conditions are met:
	>
	> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_TYPE_1(
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
                    "$.message.order.fulfillments[*].stops[*].authorization.type",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_TYPE_1**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]

	> Note: **Condition VALID_ENUM_MESSAGE_TYPE_1** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_STATUS_2(
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
                    "$.message.order.fulfillments[*].stops[*].authorization.status",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_STATUS_2**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]

	> Note: **Condition VALID_ENUM_MESSAGE_STATUS_2** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload`,
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
                const validTags = ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"];
                const tagPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].tags[*].descriptor.code",
                );

                const skipCheck = !validations.arePresent(tagPath);
                if (skipCheck) continue;

                const validate = validations.allIn(tagPath, validTags);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]

	> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_0_ROUTE_INFO(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
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
                    "ROUTE_ID",
                    "ROUTE_DIRECTION",
                    "OPERATIONAL_START_TIME",
                    "OPERATIONAL_END_TIME",
                ];

                const validate = validations.allIn(subTags, validValues);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_0_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION", "OPERATIONAL_START_TIME", "OPERATIONAL_END_TIME"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_0_TICKET_INFO(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')]",
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
                            description: `- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_0_TRIP_DETAILS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')]",
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
                            description: `- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]`,
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
                const validTags = ["FARE_POLICY"];
                const tagPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].tags[*].descriptor.code",
                );

                const skipCheck = !validations.arePresent(tagPath);
                if (skipCheck) continue;

                const validate = validations.allIn(tagPath, validTags);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]

	> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_tag_1_FARE_POLICY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
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
                            description: `- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]`,
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
                    "$.message.order.payments[*].tags[*].descriptor.code",
                );

                const skipCheck = !validations.arePresent(tagPath);
                if (skipCheck) continue;

                const validate = validations.allIn(tagPath, validTags);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_tag_2**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]

	> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload`,
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
                "$.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')]",
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
                            description: `- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]`,
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
                "$.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')]",
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
                            description: `- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }

        const testFunctions: testFunctionArray = [
            REQUIRED_CONTEXT_CODE_1,
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
            REQUIRED_MESSAGE_ID_14,
            REQUIRED_MESSAGE_NAME_15,
            REQUIRED_MESSAGE_CODE_16,
            REQUIRED_MESSAGE_CURRENCY_17,
            REQUIRED_MESSAGE_VALUE_18,
            REQUIRED_MESSAGE_COUNT_19,
            REQUIRED_MESSAGE_FULFILLMENT_IDS_20,
            REQUIRED_MESSAGE_LABEL_21,
            REQUIRED_MESSAGE_DURATION_22,
            REQUIRED_MESSAGE_ID_23,
            REQUIRED_MESSAGE_NAME_24,
            REQUIRED_MESSAGE_ID_25,
            REQUIRED_MESSAGE_TYPE_26,
            REQUIRED_MESSAGE_NAME_27,
            REQUIRED_MESSAGE_CODE_28,
            REQUIRED_MESSAGE_GPS_29,
            REQUIRED_MESSAGE_ID_30,
            REQUIRED_MESSAGE_CATEGORY_31,
            REQUIRED_MESSAGE_VALUE_32,
            REQUIRED_MESSAGE_CURRENCY_33,
            REQUIRED_MESSAGE_TITLE_34,
            REQUIRED_MESSAGE_ID_35,
            REQUIRED_MESSAGE_CURRENCY_36,
            REQUIRED_MESSAGE_VALUE_37,
            REQUIRED_MESSAGE_ID_38,
            REQUIRED_MESSAGE_COLLECTED_BY_39,
            REQUIRED_MESSAGE_STATUS_40,
            REQUIRED_MESSAGE_TYPE_41,
            REQUIRED_CONTEXT_CODE_42,
            REQUIRED_CONTEXT_CODE_43,
            REQUIRED_CONTEXT_DOMAIN_44,
            REQUIRED_CONTEXT_TIMESTAMP_45,
            REQUIRED_CONTEXT_BAP_ID_46,
            REQUIRED_CONTEXT_TRANSACTION_ID_47,
            REQUIRED_CONTEXT_MESSAGE_ID_48,
            REQUIRED_CONTEXT_VERSION_49,
            REQUIRED_CONTEXT_ACTION_50,
            REQUIRED_CONTEXT_BAP_URI_51,
            REQUIRED_CONTEXT_TTL_52,
            REQUIRED_CONTEXT_BPP_ID_53,
            REQUIRED_CONTEXT_BPP_URI_54,
            REQUIRED_MESSAGE_ID_55,
            REQUIRED_MESSAGE_CODE_56,
            REQUIRED_MESSAGE_CURRENCY_57,
            REQUIRED_MESSAGE_VALUE_58,
            REQUIRED_MESSAGE_COUNT_59,
            REQUIRED_MESSAGE_FULFILLMENT_IDS_63,
            REQUIRED_MESSAGE_ID_64,
            REQUIRED_MESSAGE_NAME_65,
            REQUIRED_MESSAGE_ID_68,
            REQUIRED_MESSAGE_TYPE_69,
            REQUIRED_MESSAGE_ID_70,
            REQUIRED_MESSAGE_TYPE_71,
            REQUIRED_MESSAGE_GPS_72,
            REQUIRED_MESSAGE_CATEGORY_73,
            REQUIRED_MESSAGE_VALUE_74,
            REQUIRED_MESSAGE_CURRENCY_75,
            REQUIRED_MESSAGE_TITLE_76,
            REQUIRED_MESSAGE_ID_77,
            REQUIRED_MESSAGE_COUNT_78,
            REQUIRED_MESSAGE_VALUE_79,
            REQUIRED_MESSAGE_CURRENCY_80,
            REQUIRED_MESSAGE_ID_81,
            REQUIRED_MESSAGE_COLLECTED_BY_82,
            REQUIRED_MESSAGE_STATUS_83,
            REQUIRED_MESSAGE_TYPE_84,
            REQUIRED_MESSAGE_BANK_CODE_85,
            REQUIRED_MESSAGE_BANK_ACCOUNT_NUMBER_86,
            VALID_ENUM_MESSAGE_TYPE_1,
            VALID_ENUM_MESSAGE_STATUS_2,
            validate_tag_0,
            validate_tag_0_ROUTE_INFO,
            validate_tag_0_TICKET_INFO,
            validate_tag_0_TRIP_DETAILS,
            validate_tag_1,
            validate_tag_1_FARE_POLICY,
            validate_tag_2,
            validate_tag_2_BUYER_FINDER_FEES,
            validate_tag_2_SETTLEMENT_TERMS,
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
