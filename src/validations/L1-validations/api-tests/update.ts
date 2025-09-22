import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function update(input: validationInput): validationOutput {
    let totalResults = updateValidations(input);

    if (input.config._debug === false) {
        totalResults.forEach((r) => {
            delete r._debugInfo;
        });
    }
    if (input.config.hideParentErrors === true) {
        // delete results with valid false and no description
        totalResults = totalResults.filter(
            (r) => !(r.valid === false && !r.description),
        );
    }
    if (input.config.onlyInvalid === true) {
        const res = totalResults.filter((r) => r.valid === false);
        if (res.length === 0) {
            const targetSuccess = totalResults.find(
                (r) => r.testName === "updateValidations",
            );
            if (!targetSuccess) {
                throw new Error("Critical: Overall test result not found");
            }
            return [targetSuccess];
        }
        return res;
    }

    return totalResults;
}

function updateValidations(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;

        function UPDATE_CONTEXT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["update"];
                const domain = ["ONDC:TRV13"];
                const version = ["2.0.0"];

                function REQUIRED_ON_STATUS_CONTEXT(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_CONTEXT_DOMAIN(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.domain",
                                );
                                const action = ["update"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_CONTEXT_DOMAIN",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_DOMAIN**

- $.context.domain must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_DOMAIN",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_ACTION(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.action",
                                );
                                const action = ["update"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_CONTEXT_ACTION",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_ACTION**

- $.context.action must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_ACTION",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_VERSION(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.version",
                                );
                                const action = ["update"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_VERSION",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_VERSION**

- $.context.version must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_VERSION",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_MESSAGE_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.message_id",
                                );
                                const action = ["update"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_MESSAGE_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_MESSAGE_ID**

- $.context.message_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_MESSAGE_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_TRANSACTION_ID(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.transaction_id",
                                );
                                const action = ["update"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_TRANSACTION_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_TRANSACTION_ID**

- $.context.transaction_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_TRANSACTION_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REGEX_CONTEXT_TIMESTAMP(
                            input: validationInput,
                        ): validationOutput {
                            const scope = payloadUtils.getJsonPath(
                                input.payload,
                                "$",
                            );
                            let subResults: validationOutput = [];
                            let valid = true;
                            for (const testObj of scope) {
                                testObj._EXTERNAL = input.externalData;
                                const attr = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.context.timestamp",
                                );
                                const reg = [
                                    "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$",
                                ];
                                const action = ["update"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REGEX_CONTEXT_TIMESTAMP",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REGEX_CONTEXT_TIMESTAMP**

- All elements of $.context.timestamp must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REGEX_CONTEXT_TIMESTAMP",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_CONTEXT_DOMAIN,
                            REQUIRED_CONTEXT_ACTION,
                            REQUIRED_CONTEXT_VERSION,
                            REQUIRED_CONTEXT_MESSAGE_ID,
                            REQUIRED_CONTEXT_TRANSACTION_ID,
                            REGEX_CONTEXT_TIMESTAMP,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ON_STATUS_CONTEXT",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ON_STATUS_CONTEXT","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_ON_STATUS_CONTEXT,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every((r) => r.valid);

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: "UPDATE_CONTEXT",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"UPDATE_CONTEXT","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"REQUIRED_ON_STATUS_CONTEXT","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function UPDATE_MESSAGE_1(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["update"];

                function REQUIRED_UPDATE_TARGET(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.update_target",
                        );
                        const action = ["update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_UPDATE_TARGET",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_UPDATE_TARGET**

- $.message.update_target must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_UPDATE_TARGET","attr":"$.message.update_target","_RETURN_":"attr are present","action":["update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_UPDATE_TARGET",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_UPDATE_TARGET","attr":"$.message.update_target","_RETURN_":"attr are present","action":["update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function VALID_UPDATE_TARGET(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.update_target",
                        );
                        const enumList = [
                            "fulfillment",
                            "payment",
                            "billing",
                            "items",
                        ];
                        const action = ["update"];

                        const validate = validations.anyIn(attr, enumList);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "VALID_UPDATE_TARGET",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **VALID_UPDATE_TARGET**

- At least one of $.message.update_target must be in ["fulfillment", "payment", "billing", "items"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_UPDATE_TARGET","attr":"$.message.update_target","enumList":["fulfillment","payment","billing","items"],"_RETURN_":"attr any in enumList","action":["update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "VALID_UPDATE_TARGET",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"VALID_UPDATE_TARGET","attr":"$.message.update_target","enumList":["fulfillment","payment","billing","items"],"_RETURN_":"attr any in enumList","action":["update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ORDER_ID(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.id",
                        );
                        const action = ["update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ORDER_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ORDER_ID**

- $.message.order.id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present","action":["update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ORDER_ID",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present","action":["update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_FULFILLMENT_ID(
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
                        const action = ["update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_FULFILLMENT_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_FULFILLMENT_ID**

- $.message.order.fulfillments[*].id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_FULFILLMENT_ID",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_TAG_DESCRIPTOR_CODE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].tags[*].descriptor.code",
                        );
                        const action = ["update"];

                        const skipCheck = !validations.arePresent(attr);
                        if (skipCheck) continue;

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_TAG_DESCRIPTOR_CODE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_TAG_DESCRIPTOR_CODE**

- $.message.order.fulfillments[*].tags[*].descriptor.code must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[*].descriptor.code is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_TAG_DESCRIPTOR_CODE","attr":"$.message.order.fulfillments[*].tags[*].descriptor.code","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_TAG_DESCRIPTOR_CODE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_TAG_DESCRIPTOR_CODE","attr":"$.message.order.fulfillments[*].tags[*].descriptor.code","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function VALID_TAG_DESCRIPTOR_CODE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].tags[*].descriptor.code",
                        );
                        const enumList = ["UPDATE_REQUEST", "MODIFY"];
                        const action = ["update"];

                        const validate = validations.anyIn(attr, enumList);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "VALID_TAG_DESCRIPTOR_CODE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **VALID_TAG_DESCRIPTOR_CODE**

- At least one of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["UPDATE_REQUEST", "MODIFY"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_TAG_DESCRIPTOR_CODE","attr":"$.message.order.fulfillments[*].tags[*].descriptor.code","enumList":["UPDATE_REQUEST","MODIFY"],"_RETURN_":"attr any in enumList","action":["update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "VALID_TAG_DESCRIPTOR_CODE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"VALID_TAG_DESCRIPTOR_CODE","attr":"$.message.order.fulfillments[*].tags[*].descriptor.code","enumList":["UPDATE_REQUEST","MODIFY"],"_RETURN_":"attr any in enumList","action":["update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_TAG_LIST_DESCRIPTOR_CODE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].tags[*].list[*].descriptor.code",
                        );
                        const action = ["update"];

                        const skipCheck = !validations.arePresent(attr);
                        if (skipCheck) continue;

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_TAG_LIST_DESCRIPTOR_CODE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_TAG_LIST_DESCRIPTOR_CODE**

- $.message.order.fulfillments[*].tags[*].list[*].descriptor.code must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[*].list[*].descriptor.code is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_TAG_LIST_DESCRIPTOR_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[*].list[*].descriptor.code","_RETURN_":"attr are present","action":["update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_TAG_LIST_DESCRIPTOR_CODE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_TAG_LIST_DESCRIPTOR_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[*].list[*].descriptor.code","_RETURN_":"attr are present","action":["update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_TAG_LIST_VALUE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].tags[*].list[*].value",
                        );
                        const action = ["update"];

                        const skipCheck = !validations.arePresent(attr);
                        if (skipCheck) continue;

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_TAG_LIST_VALUE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_TAG_LIST_VALUE**

- $.message.order.fulfillments[*].tags[*].list[*].value must be present in the payload

> **Skip if:**
>
>     - $.message.order.fulfillments[*].tags[*].list[*].value is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_TAG_LIST_VALUE","attr":"$.message.order.fulfillments[*].tags[*].list[*].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_TAG_LIST_VALUE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_TAG_LIST_VALUE","attr":"$.message.order.fulfillments[*].tags[*].list[*].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_UPDATE_TARGET,
                    VALID_UPDATE_TARGET,
                    REQUIRED_ORDER_ID,
                    REQUIRED_FULFILLMENT_ID,
                    REQUIRED_TAG_DESCRIPTOR_CODE,
                    VALID_TAG_DESCRIPTOR_CODE,
                    REQUIRED_TAG_LIST_DESCRIPTOR_CODE,
                    REQUIRED_TAG_LIST_VALUE,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every((r) => r.valid);

                // delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: "UPDATE_MESSAGE_1",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"UPDATE_MESSAGE_1","action":["update"],"_RETURN_":[{"_NAME_":"REQUIRED_UPDATE_TARGET","attr":"$.message.update_target","_RETURN_":"attr are present","action":["update"]},{"_NAME_":"VALID_UPDATE_TARGET","attr":"$.message.update_target","enumList":["fulfillment","payment","billing","items"],"_RETURN_":"attr any in enumList","action":["update"]},{"_NAME_":"REQUIRED_ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present","action":["update"]},{"_NAME_":"REQUIRED_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["update"]},{"_NAME_":"REQUIRED_TAG_DESCRIPTOR_CODE","attr":"$.message.order.fulfillments[*].tags[*].descriptor.code","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["update"]},{"_NAME_":"VALID_TAG_DESCRIPTOR_CODE","attr":"$.message.order.fulfillments[*].tags[*].descriptor.code","enumList":["UPDATE_REQUEST","MODIFY"],"_RETURN_":"attr any in enumList","action":["update"]},{"_NAME_":"REQUIRED_TAG_LIST_DESCRIPTOR_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[*].list[*].descriptor.code","_RETURN_":"attr are present","action":["update"]},{"_NAME_":"REQUIRED_TAG_LIST_VALUE","attr":"$.message.order.fulfillments[*].tags[*].list[*].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["update"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            UPDATE_CONTEXT,
            UPDATE_MESSAGE_1,
        ];

        let allResults: validationOutput = [];
        for (const fn of testFunctions) {
            const subResult = fn(input);
            allResults = [...allResults, ...subResult];
        }
        subResults = allResults;
        valid = subResults.every((r) => r.valid);

        // delete testObj._EXTERNAL;
    }
    return [
        {
            testName: "updateValidations",
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"updateValidations","_RETURN_":[{"_NAME_":"UPDATE_CONTEXT","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"REQUIRED_ON_STATUS_CONTEXT","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}]},{"_NAME_":"UPDATE_MESSAGE_1","action":["update"],"_RETURN_":[{"_NAME_":"REQUIRED_UPDATE_TARGET","attr":"$.message.update_target","_RETURN_":"attr are present","action":["update"]},{"_NAME_":"VALID_UPDATE_TARGET","attr":"$.message.update_target","enumList":["fulfillment","payment","billing","items"],"_RETURN_":"attr any in enumList","action":["update"]},{"_NAME_":"REQUIRED_ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present","action":["update"]},{"_NAME_":"REQUIRED_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["update"]},{"_NAME_":"REQUIRED_TAG_DESCRIPTOR_CODE","attr":"$.message.order.fulfillments[*].tags[*].descriptor.code","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["update"]},{"_NAME_":"VALID_TAG_DESCRIPTOR_CODE","attr":"$.message.order.fulfillments[*].tags[*].descriptor.code","enumList":["UPDATE_REQUEST","MODIFY"],"_RETURN_":"attr any in enumList","action":["update"]},{"_NAME_":"REQUIRED_TAG_LIST_DESCRIPTOR_CODE","_CONTINUE_":"!(attr are present)","attr":"$.message.order.fulfillments[*].tags[*].list[*].descriptor.code","_RETURN_":"attr are present","action":["update"]},{"_NAME_":"REQUIRED_TAG_LIST_VALUE","attr":"$.message.order.fulfillments[*].tags[*].list[*].value","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["update"]}]}]}
`,
            },
        },
        ...subResults,
    ];
}
