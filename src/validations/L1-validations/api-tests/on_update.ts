import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function on_update(input: validationInput): validationOutput {
    let totalResults = on_updateValidations(input);

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
                (r) => r.testName === "on_updateValidations",
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

function on_updateValidations(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;

        function ON_UPDATE_CONTEXT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_update"];
                const domain = ["ONDC:TRV13"];
                const version = ["2.0.0"];

                function REQUIRED_ON_UPDATE_CONTEXT(
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
                                const action = ["on_update"];
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
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_update"];
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
{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_update"];
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
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_update"];
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
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_update"];
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
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_update"];
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
{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                            testName: "REQUIRED_ON_UPDATE_CONTEXT",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ON_UPDATE_CONTEXT","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_ON_UPDATE_CONTEXT,
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
                    testName: "ON_UPDATE_CONTEXT",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_UPDATE_CONTEXT","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"REQUIRED_ON_UPDATE_CONTEXT","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_UPDATE_ORDER(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_update"];

                function REQUIRED_ON_UPDATE_ORDER(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_ORDER_ID(
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
                                    "$.message.order.id",
                                );
                                const action = ["on_update"];

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
{"_NAME_":"REQUIRED_ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present","action":["on_update"]}
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
{"_NAME_":"REQUIRED_ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ORDER_STATUS(
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
                                    "$.message.order.status",
                                );
                                const action = ["on_update"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_ORDER_STATUS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ORDER_STATUS**

- $.message.order.status must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_STATUS","attr":"$.message.order.status","_RETURN_":"attr are present","action":["on_update"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ORDER_STATUS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_STATUS","attr":"$.message.order.status","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ORDER_UPDATED_AT(
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
                                    "$.message.order.updated_at",
                                );
                                const action = ["on_update"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ORDER_UPDATED_AT",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ORDER_UPDATED_AT**

- $.message.order.updated_at must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_UPDATED_AT","attr":"$.message.order.updated_at","_RETURN_":"attr are present","action":["on_update"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ORDER_UPDATED_AT",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_UPDATED_AT","attr":"$.message.order.updated_at","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_ORDER_ID,
                            REQUIRED_ORDER_STATUS,
                            REQUIRED_ORDER_UPDATED_AT,
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
                            testName: "REQUIRED_ON_UPDATE_ORDER",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ON_UPDATE_ORDER","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_ORDER_STATUS","attr":"$.message.order.status","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_ORDER_UPDATED_AT","attr":"$.message.order.updated_at","_RETURN_":"attr are present","action":["on_update"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function VALID_ENUM_ON_UPDATE_ORDER(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function VALID_ENUM_ORDER_STATUS(
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
                                    "$.message.order.status",
                                );
                                const enumList = [
                                    "SOFT-CANCEL",
                                    "CONFIRM-CANCEL",
                                    "SOFT-UPDATE",
                                    "CONFIRM-UPDATE",
                                    "ACTIVE",
                                    "COMPLETE",
                                    "CANCELLED",
                                ];
                                const action = ["on_update"];

                                const validate = validations.anyIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "VALID_ENUM_ORDER_STATUS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **VALID_ENUM_ORDER_STATUS**

- At least one of $.message.order.status must be in ["SOFT-CANCEL", "CONFIRM-CANCEL", "SOFT-UPDATE", "CONFIRM-UPDATE", "ACTIVE", "COMPLETE", "CANCELLED"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"VALID_ENUM_ORDER_STATUS","attr":"$.message.order.status","enumList":["SOFT-CANCEL","CONFIRM-CANCEL","SOFT-UPDATE","CONFIRM-UPDATE","ACTIVE","COMPLETE","CANCELLED"],"_RETURN_":"attr any in enumList","action":["on_update"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "VALID_ENUM_ORDER_STATUS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_ENUM_ORDER_STATUS","attr":"$.message.order.status","enumList":["SOFT-CANCEL","CONFIRM-CANCEL","SOFT-UPDATE","CONFIRM-UPDATE","ACTIVE","COMPLETE","CANCELLED"],"_RETURN_":"attr any in enumList","action":["on_update"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REGEX_ON_UPDATE_UPDATED_AT(
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
                                    "$.message.order.updated_at",
                                );
                                const reg = [
                                    "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$",
                                ];
                                const action = ["on_update"];

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REGEX_ON_UPDATE_UPDATED_AT",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REGEX_ON_UPDATE_UPDATED_AT**

- All elements of $.message.order.updated_at must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REGEX_ON_UPDATE_UPDATED_AT","attr":"$.message.order.updated_at","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_update"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REGEX_ON_UPDATE_UPDATED_AT",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REGEX_ON_UPDATE_UPDATED_AT","attr":"$.message.order.updated_at","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_update"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            VALID_ENUM_ORDER_STATUS,
                            REGEX_ON_UPDATE_UPDATED_AT,
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
                            testName: "VALID_ENUM_ON_UPDATE_ORDER",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"VALID_ENUM_ON_UPDATE_ORDER","_RETURN_":[{"_NAME_":"VALID_ENUM_ORDER_STATUS","attr":"$.message.order.status","enumList":["SOFT-CANCEL","CONFIRM-CANCEL","SOFT-UPDATE","CONFIRM-UPDATE","ACTIVE","COMPLETE","CANCELLED"],"_RETURN_":"attr any in enumList","action":["on_update"]},{"_NAME_":"REGEX_ON_UPDATE_UPDATED_AT","attr":"$.message.order.updated_at","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_update"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_ON_UPDATE_ORDER,
                    VALID_ENUM_ON_UPDATE_ORDER,
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
                    testName: "ON_UPDATE_ORDER",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_UPDATE_ORDER","action":["on_update"],"_RETURN_":[{"_NAME_":"REQUIRED_ON_UPDATE_ORDER","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_ORDER_STATUS","attr":"$.message.order.status","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_ORDER_UPDATED_AT","attr":"$.message.order.updated_at","_RETURN_":"attr are present","action":["on_update"]}]},{"_NAME_":"VALID_ENUM_ON_UPDATE_ORDER","_RETURN_":[{"_NAME_":"VALID_ENUM_ORDER_STATUS","attr":"$.message.order.status","enumList":["SOFT-CANCEL","CONFIRM-CANCEL","SOFT-UPDATE","CONFIRM-UPDATE","ACTIVE","COMPLETE","CANCELLED"],"_RETURN_":"attr any in enumList","action":["on_update"]},{"_NAME_":"REGEX_ON_UPDATE_UPDATED_AT","attr":"$.message.order.updated_at","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_update"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_UPDATE_ITEMS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_update"];

                function REQUIRED_ITEMS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_MESSAGE_ITEMS_ID(
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
                                    "$.message.order.items[*].id",
                                );
                                const action = ["on_update"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_ID**

- $.message.order.items[*].id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_update"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_MESSAGE_ITEMS_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_ITEMS_ADD_ONS(
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
                                    "$.message.order.items[*].add_ons[*].id",
                                );
                                const action = ["on_update"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_ITEMS_ADD_ONS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_MESSAGE_ITEMS_ADD_ONS**

- $.message.order.items[*].add_ons[*].id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ADD_ONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["on_update"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_MESSAGE_ITEMS_ADD_ONS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ADD_ONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ITEMS_LOCATIONS(
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
                                    "$.message.order.items[*].location_ids[*]",
                                );
                                const action = ["on_update"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ITEMS_LOCATIONS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ITEMS_LOCATIONS**

- $.message.order.items[*].location_ids[*] must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_update"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ITEMS_LOCATIONS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ITEMS_QUANTITY(
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
                                    "$.message.order.items[*].quantity.selected.count",
                                );
                                const action = ["on_update"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_ITEMS_QUANTITY",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ITEMS_QUANTITY**

- $.message.order.items[*].quantity.selected.count must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ITEMS_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["on_update"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ITEMS_QUANTITY",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEMS_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ITEMS_ADDONS(
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
                                    "$.message.order.items[*].add_ons[*].id",
                                );
                                const action = ["on_update"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_ITEMS_ADDONS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_ITEMS_ADDONS**

- $.message.order.items[*].add_ons[*].id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ITEMS_ADDONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["on_update"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ITEMS_ADDONS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEMS_ADDONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_MESSAGE_ITEMS_ID,
                            REQUIRED_MESSAGE_ITEMS_ADD_ONS,
                            REQUIRED_ITEMS_LOCATIONS,
                            REQUIRED_ITEMS_QUANTITY,
                            REQUIRED_ITEMS_ADDONS,
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
                            testName: "REQUIRED_ITEMS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEMS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ADD_ONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_ITEMS_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_ITEMS_ADDONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["on_update"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [REQUIRED_ITEMS];

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
                    testName: "ON_UPDATE_ITEMS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_UPDATE_ITEMS","action":["on_update"],"_RETURN_":[{"_NAME_":"REQUIRED_ITEMS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ADD_ONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_ITEMS_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_ITEMS_ADDONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["on_update"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_UPDATE_ORDER_FULFILLMENTS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_update"];

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
                        const action = ["on_update"];

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
{"_NAME_":"REQUIRED_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["on_update"]}
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
{"_NAME_":"REQUIRED_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_CUSTOMER_NAME(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].customer.person.name",
                        );
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_CUSTOMER_NAME",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_CUSTOMER_NAME**

- $.message.order.fulfillments[*].customer.person.name must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CUSTOMER_NAME","attr":"$.message.order.fulfillments[*].customer.person.name","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_CUSTOMER_NAME",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_CUSTOMER_NAME","attr":"$.message.order.fulfillments[*].customer.person.name","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_CUSTOMER_AGE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].customer.person.age",
                        );
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_CUSTOMER_AGE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_CUSTOMER_AGE**

- $.message.order.fulfillments[*].customer.person.age must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CUSTOMER_AGE","attr":"$.message.order.fulfillments[*].customer.person.age","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_CUSTOMER_AGE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_CUSTOMER_AGE","attr":"$.message.order.fulfillments[*].customer.person.age","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_CUSTOMER_DOB(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].customer.person.dob",
                        );
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_CUSTOMER_DOB",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_CUSTOMER_DOB**

- $.message.order.fulfillments[*].customer.person.dob must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CUSTOMER_DOB","attr":"$.message.order.fulfillments[*].customer.person.dob","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_CUSTOMER_DOB",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_CUSTOMER_DOB","attr":"$.message.order.fulfillments[*].customer.person.dob","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_CUSTOMER_GENDER(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].customer.person.gender",
                        );
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_CUSTOMER_GENDER",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_CUSTOMER_GENDER**

- $.message.order.fulfillments[*].customer.person.gender must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CUSTOMER_GENDER","attr":"$.message.order.fulfillments[*].customer.person.gender","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_CUSTOMER_GENDER",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_CUSTOMER_GENDER","attr":"$.message.order.fulfillments[*].customer.person.gender","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_CUSTOMER_CONTACT(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].customer.contact.phone",
                        );
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_CUSTOMER_CONTACT",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_CUSTOMER_CONTACT**

- $.message.order.fulfillments[*].customer.contact.phone must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CUSTOMER_CONTACT","attr":"$.message.order.fulfillments[*].customer.contact.phone","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_CUSTOMER_CONTACT",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_CUSTOMER_CONTACT","attr":"$.message.order.fulfillments[*].customer.contact.phone","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_CUSTOMER_CONTACT_EMAIL(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].customer.contact.email",
                        );
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_CUSTOMER_CONTACT_EMAIL",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_CUSTOMER_CONTACT_EMAIL**

- $.message.order.fulfillments[*].customer.contact.email must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CUSTOMER_CONTACT_EMAIL","attr":"$.message.order.fulfillments[*].customer.contact.email","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_CUSTOMER_CONTACT_EMAIL",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_CUSTOMER_CONTACT_EMAIL","attr":"$.message.order.fulfillments[*].customer.contact.email","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_FULFILLMENT_ID,
                    REQUIRED_CUSTOMER_NAME,
                    REQUIRED_CUSTOMER_AGE,
                    REQUIRED_CUSTOMER_DOB,
                    REQUIRED_CUSTOMER_GENDER,
                    REQUIRED_CUSTOMER_CONTACT,
                    REQUIRED_CUSTOMER_CONTACT_EMAIL,
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
                    testName: "ON_UPDATE_ORDER_FULFILLMENTS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_UPDATE_ORDER_FULFILLMENTS","action":["on_update"],"_RETURN_":[{"_NAME_":"REQUIRED_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_CUSTOMER_NAME","attr":"$.message.order.fulfillments[*].customer.person.name","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_CUSTOMER_AGE","attr":"$.message.order.fulfillments[*].customer.person.age","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_CUSTOMER_DOB","attr":"$.message.order.fulfillments[*].customer.person.dob","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_CUSTOMER_GENDER","attr":"$.message.order.fulfillments[*].customer.person.gender","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_CUSTOMER_CONTACT","attr":"$.message.order.fulfillments[*].customer.contact.phone","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_CUSTOMER_CONTACT_EMAIL","attr":"$.message.order.fulfillments[*].customer.contact.email","_RETURN_":"attr are present","action":["on_update"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_UPDATE_PROVIDER(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_update"];

                function REQUIRED_PROVIDER_ID(
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
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_PROVIDER_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_PROVIDER_ID**

- $.message.order.provider.id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_PROVIDER_ID",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [REQUIRED_PROVIDER_ID];

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
                    testName: "ON_UPDATE_PROVIDER",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_UPDATE_PROVIDER","action":["on_update"],"_RETURN_":[{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["on_update"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_UPDATE_ORDER_QUOTE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_update"];

                function REQUIRED_QUOTE_PRICE(
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
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_QUOTE_PRICE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_QUOTE_PRICE**

- $.message.order.quote.price.value must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_PRICE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_QUOTE_PRICE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_PRICE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_QUOTE_CURRENCY(
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
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_QUOTE_CURRENCY",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_QUOTE_CURRENCY**

- $.message.order.quote.price.currency must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_QUOTE_CURRENCY",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_QUOTE_BREAKUP(
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
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_QUOTE_BREAKUP",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_QUOTE_BREAKUP**

- $.message.order.quote.breakup[*].price.value must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_BREAKUP","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_QUOTE_BREAKUP",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_BREAKUP","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY(
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
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY**

- $.message.order.quote.breakup[*].price.currency must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_QUOTE_BREAKUP_TITLE(
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
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_QUOTE_BREAKUP_TITLE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_QUOTE_BREAKUP_TITLE**

- $.message.order.quote.breakup[*].title must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_BREAKUP_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_QUOTE_BREAKUP_TITLE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_BREAKUP_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_QUOTE_TTL(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.quote.ttl",
                        );
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_QUOTE_TTL",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_QUOTE_TTL**

- $.message.order.quote.ttl must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_QUOTE_TTL",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_QUOTE_PRICE,
                    REQUIRED_QUOTE_CURRENCY,
                    REQUIRED_QUOTE_BREAKUP,
                    REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY,
                    REQUIRED_QUOTE_BREAKUP_TITLE,
                    REQUIRED_QUOTE_TTL,
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
                    testName: "ON_UPDATE_ORDER_QUOTE",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_UPDATE_ORDER_QUOTE","action":["on_update"],"_RETURN_":[{"_NAME_":"REQUIRED_QUOTE_PRICE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_QUOTE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_QUOTE_BREAKUP","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_QUOTE_BREAKUP_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present","action":["on_update"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_UPDATE_PAYMENTS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_update"];

                function REQUIRED_PAYMENT_ID(
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
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_PAYMENT_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_PAYMENT_ID**

- $.message.order.payments[*].id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_PAYMENT_ID",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_PAYMENT_TYPE(
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
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_PAYMENT_TYPE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_PAYMENT_TYPE**

- $.message.order.payments[*].type must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_PAYMENT_TYPE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function VALID_PAYMENT_TYPES(
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
                            "PART-PAYMENT",
                        ];
                        const action = ["on_update"];

                        const validate = validations.allIn(attr, enumList);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "VALID_PAYMENT_TYPES",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **VALID_PAYMENT_TYPES**

- All elements of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "PART-PAYMENT"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_PAYMENT_TYPES","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_RETURN_":"attr all in enumList","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "VALID_PAYMENT_TYPES",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"VALID_PAYMENT_TYPES","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_RETURN_":"attr all in enumList","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_PAYMENT_STATUS(
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
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_PAYMENT_STATUS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_PAYMENT_STATUS**

- $.message.order.payments[*].status must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_STATUS","attr":"$.message.order.payments[*].status","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_PAYMENT_STATUS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_STATUS","attr":"$.message.order.payments[*].status","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function VALID_PAYMENT_STATUS(
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
                        const enumList = ["PAID", "NOT-PAID"];
                        const action = ["on_update"];

                        const validate = validations.allIn(attr, enumList);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "VALID_PAYMENT_STATUS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **VALID_PAYMENT_STATUS**

- All elements of $.message.order.payments[*].status must be in ["PAID", "NOT-PAID"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_PAYMENT_STATUS","attr":"$.message.order.payments[*].status","enumList":["PAID","NOT-PAID"],"_RETURN_":"attr all in enumList","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "VALID_PAYMENT_STATUS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"VALID_PAYMENT_STATUS","attr":"$.message.order.payments[*].status","enumList":["PAID","NOT-PAID"],"_RETURN_":"attr all in enumList","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function VALID_ENUM_PAYMENTS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function VALID_ENUM_PAYMENTS_STATUS(
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
                                    "$.message.order.payments[*].status",
                                );
                                const enumList = ["PAID", "NOT-PAID"];
                                const action = ["on_update"];

                                const validate = validations.anyIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "VALID_ENUM_PAYMENTS_STATUS",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **VALID_ENUM_PAYMENTS_STATUS**

- At least one of $.message.order.payments[*].status must be in ["PAID", "NOT-PAID"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"VALID_ENUM_PAYMENTS_STATUS","attr":"$.message.order.payments[*].status","enumList":["PAID","NOT-PAID"],"_RETURN_":"attr any in enumList","action":["on_update"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "VALID_ENUM_PAYMENTS_STATUS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_ENUM_PAYMENTS_STATUS","attr":"$.message.order.payments[*].status","enumList":["PAID","NOT-PAID"],"_RETURN_":"attr any in enumList","action":["on_update"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function VALID_ENUM_PAYMENTS_TYPE(
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
                                    "$.message.order.payments[*].type",
                                );
                                const enumList = [
                                    "PRE-ORDER",
                                    "PART-PAYMENT",
                                    "ON-FULFILLMENT",
                                    "POST-FULFILLMENT",
                                ];
                                const action = ["on_update"];

                                const validate = validations.anyIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "VALID_ENUM_PAYMENTS_TYPE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **VALID_ENUM_PAYMENTS_TYPE**

- At least one of $.message.order.payments[*].type must be in ["PRE-ORDER", "PART-PAYMENT", "ON-FULFILLMENT", "POST-FULFILLMENT"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"VALID_ENUM_PAYMENTS_TYPE","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","PART-PAYMENT","ON-FULFILLMENT","POST-FULFILLMENT"],"_RETURN_":"attr any in enumList","action":["on_update"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "VALID_ENUM_PAYMENTS_TYPE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_ENUM_PAYMENTS_TYPE","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","PART-PAYMENT","ON-FULFILLMENT","POST-FULFILLMENT"],"_RETURN_":"attr any in enumList","action":["on_update"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            VALID_ENUM_PAYMENTS_STATUS,
                            VALID_ENUM_PAYMENTS_TYPE,
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
                            testName: "VALID_ENUM_PAYMENTS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"VALID_ENUM_PAYMENTS","_RETURN_":[{"_NAME_":"VALID_ENUM_PAYMENTS_STATUS","attr":"$.message.order.payments[*].status","enumList":["PAID","NOT-PAID"],"_RETURN_":"attr any in enumList","action":["on_update"]},{"_NAME_":"VALID_ENUM_PAYMENTS_TYPE","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","PART-PAYMENT","ON-FULFILLMENT","POST-FULFILLMENT"],"_RETURN_":"attr any in enumList","action":["on_update"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_PAYMENTS_LINKED_TAGS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_LINKED_PAYMENT_TAG(
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
                                    "$.message.order.payments[*].tags[*].descriptor.code",
                                );
                                const enumList = [
                                    "LINKED-PAYMENTS",
                                    "ADV-DEPOSIT",
                                    "FINAL-PAYMENT",
                                ];
                                const action = ["on_update"];

                                const validate = validations.anyIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_LINKED_PAYMENT_TAG",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_LINKED_PAYMENT_TAG**

- At least one of $.message.order.payments[*].tags[*].descriptor.code must be in ["LINKED-PAYMENTS", "ADV-DEPOSIT", "FINAL-PAYMENT"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_LINKED_PAYMENT_TAG","attr":"$.message.order.payments[*].tags[*].descriptor.code","enumList":["LINKED-PAYMENTS","ADV-DEPOSIT","FINAL-PAYMENT"],"_RETURN_":"attr any in enumList","action":["on_update"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_LINKED_PAYMENT_TAG",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_LINKED_PAYMENT_TAG","attr":"$.message.order.payments[*].tags[*].descriptor.code","enumList":["LINKED-PAYMENTS","ADV-DEPOSIT","FINAL-PAYMENT"],"_RETURN_":"attr any in enumList","action":["on_update"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_LINKED_PAYMENT_TAG,
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
                            testName: "REQUIRED_PAYMENTS_LINKED_TAGS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENTS_LINKED_TAGS","_RETURN_":[{"_NAME_":"REQUIRED_LINKED_PAYMENT_TAG","attr":"$.message.order.payments[*].tags[*].descriptor.code","enumList":["LINKED-PAYMENTS","ADV-DEPOSIT","FINAL-PAYMENT"],"_RETURN_":"attr any in enumList","action":["on_update"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_PAYMENT_ID,
                    REQUIRED_PAYMENT_TYPE,
                    VALID_PAYMENT_TYPES,
                    REQUIRED_PAYMENT_STATUS,
                    VALID_PAYMENT_STATUS,
                    VALID_ENUM_PAYMENTS,
                    REQUIRED_PAYMENTS_LINKED_TAGS,
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
                    testName: "ON_UPDATE_PAYMENTS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_UPDATE_PAYMENTS","action":["on_update"],"_RETURN_":[{"_NAME_":"REQUIRED_PAYMENT_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_PAYMENT_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"VALID_PAYMENT_TYPES","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_RETURN_":"attr all in enumList","action":["on_update"]},{"_NAME_":"REQUIRED_PAYMENT_STATUS","attr":"$.message.order.payments[*].status","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"VALID_PAYMENT_STATUS","attr":"$.message.order.payments[*].status","enumList":["PAID","NOT-PAID"],"_RETURN_":"attr all in enumList","action":["on_update"]},{"_NAME_":"VALID_ENUM_PAYMENTS","_RETURN_":[{"_NAME_":"VALID_ENUM_PAYMENTS_STATUS","attr":"$.message.order.payments[*].status","enumList":["PAID","NOT-PAID"],"_RETURN_":"attr any in enumList","action":["on_update"]},{"_NAME_":"VALID_ENUM_PAYMENTS_TYPE","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","PART-PAYMENT","ON-FULFILLMENT","POST-FULFILLMENT"],"_RETURN_":"attr any in enumList","action":["on_update"]}]},{"_NAME_":"REQUIRED_PAYMENTS_LINKED_TAGS","_RETURN_":[{"_NAME_":"REQUIRED_LINKED_PAYMENT_TAG","attr":"$.message.order.payments[*].tags[*].descriptor.code","enumList":["LINKED-PAYMENTS","ADV-DEPOSIT","FINAL-PAYMENT"],"_RETURN_":"attr any in enumList","action":["on_update"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_UPDATE_ORDER_BILLING(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_update"];

                function REQUIRED_BILLING_NAME(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.billing.name",
                        );
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_BILLING_NAME",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_BILLING_NAME**

- $.message.order.billing.name must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_BILLING_NAME",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_BILLING_ADDRESS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.billing.address",
                        );
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_BILLING_ADDRESS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_BILLING_ADDRESS**

- $.message.order.billing.address must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_BILLING_ADDRESS","attr":"$.message.order.billing.address","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_BILLING_ADDRESS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_BILLING_ADDRESS","attr":"$.message.order.billing.address","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_BILLING_STATE_NAME(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.billing.state.name",
                        );
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_BILLING_STATE_NAME",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_BILLING_STATE_NAME**

- $.message.order.billing.state.name must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_BILLING_STATE_NAME","attr":"$.message.order.billing.state.name","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_BILLING_STATE_NAME",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_BILLING_STATE_NAME","attr":"$.message.order.billing.state.name","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_BILLING_CITY_NAME(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.billing.city.name",
                        );
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_BILLING_CITY_NAME",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_BILLING_CITY_NAME**

- $.message.order.billing.city.name must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_BILLING_CITY_NAME","attr":"$.message.order.billing.city.name","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_BILLING_CITY_NAME",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_BILLING_CITY_NAME","attr":"$.message.order.billing.city.name","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.billing.organization.descriptor.name",
                        );
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME**

- $.message.order.billing.organization.descriptor.name must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME","attr":"$.message.order.billing.organization.descriptor.name","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName:
                                "REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME","attr":"$.message.order.billing.organization.descriptor.name","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_BILLING_ORGANIZATION_ADDRESS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.billing.organization.address",
                        );
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_BILLING_ORGANIZATION_ADDRESS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_BILLING_ORGANIZATION_ADDRESS**

- $.message.order.billing.organization.address must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_ADDRESS","attr":"$.message.order.billing.organization.address","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_BILLING_ORGANIZATION_ADDRESS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_ADDRESS","attr":"$.message.order.billing.organization.address","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_BILLING_EMAIL(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.billing.email",
                        );
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_BILLING_EMAIL",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_BILLING_EMAIL**

- $.message.order.billing.email must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_BILLING_EMAIL","attr":"$.message.order.billing.email","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_BILLING_EMAIL",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_BILLING_EMAIL","attr":"$.message.order.billing.email","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_BILLING_PHONE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.billing.phone",
                        );
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_BILLING_PHONE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_BILLING_PHONE**

- $.message.order.billing.phone must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_BILLING_PHONE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_BILLING_TAX_ID(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.billing.tax_id",
                        );
                        const action = ["on_update"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_BILLING_TAX_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_BILLING_TAX_ID**

- $.message.order.billing.tax_id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_BILLING_TAX_ID","attr":"$.message.order.billing.tax_id","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_BILLING_TAX_ID",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_BILLING_TAX_ID","attr":"$.message.order.billing.tax_id","_RETURN_":"attr are present","action":["on_update"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_BILLING_NAME,
                    REQUIRED_BILLING_ADDRESS,
                    REQUIRED_BILLING_STATE_NAME,
                    REQUIRED_BILLING_CITY_NAME,
                    REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME,
                    REQUIRED_BILLING_ORGANIZATION_ADDRESS,
                    REQUIRED_BILLING_EMAIL,
                    REQUIRED_BILLING_PHONE,
                    REQUIRED_BILLING_TAX_ID,
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
                    testName: "ON_UPDATE_ORDER_BILLING",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_UPDATE_ORDER_BILLING","action":["on_update"],"_RETURN_":[{"_NAME_":"REQUIRED_BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_BILLING_ADDRESS","attr":"$.message.order.billing.address","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_BILLING_STATE_NAME","attr":"$.message.order.billing.state.name","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_BILLING_CITY_NAME","attr":"$.message.order.billing.city.name","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME","attr":"$.message.order.billing.organization.descriptor.name","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_ADDRESS","attr":"$.message.order.billing.organization.address","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_BILLING_EMAIL","attr":"$.message.order.billing.email","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_BILLING_TAX_ID","attr":"$.message.order.billing.tax_id","_RETURN_":"attr are present","action":["on_update"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_UPDATE_TAGS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_update"];

                function REQUIRED_TAGS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_TAGS_DESCRIPTOR_CODE(
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
                                    "$.message.order.tags[*].descriptor.code",
                                );
                                const action = ["on_update"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_TAGS_DESCRIPTOR_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_TAGS_DESCRIPTOR_CODE**

- $.message.order.tags[*].descriptor.code must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_TAGS_DESCRIPTOR_CODE","attr":"$.message.order.tags[*].descriptor.code","_RETURN_":"attr are present","action":["on_update"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_TAGS_DESCRIPTOR_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_TAGS_DESCRIPTOR_CODE","attr":"$.message.order.tags[*].descriptor.code","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_TAGS_LIST_DESCRIPTOR_CODE(
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
                                    "$.message.order.tags[*].list[*].descriptor.code",
                                );
                                const action = ["on_update"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_TAGS_LIST_DESCRIPTOR_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_TAGS_LIST_DESCRIPTOR_CODE**

- $.message.order.tags[*].list[*].descriptor.code must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_TAGS_LIST_DESCRIPTOR_CODE","attr":"$.message.order.tags[*].list[*].descriptor.code","_RETURN_":"attr are present","action":["on_update"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_TAGS_LIST_DESCRIPTOR_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_TAGS_LIST_DESCRIPTOR_CODE","attr":"$.message.order.tags[*].list[*].descriptor.code","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_TAGS_LIST_VALUE(
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
                                    "$.message.order.tags[*].list[*].value",
                                );
                                const action = ["on_update"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_TAGS_LIST_VALUE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_TAGS_LIST_VALUE**

- $.message.order.tags[*].list[*].value must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_TAGS_LIST_VALUE","attr":"$.message.order.tags[*].list[*].value","_RETURN_":"attr are present","action":["on_update"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_TAGS_LIST_VALUE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_TAGS_LIST_VALUE","attr":"$.message.order.tags[*].list[*].value","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_TAGS_DESCRIPTOR_CODE,
                            REQUIRED_TAGS_LIST_DESCRIPTOR_CODE,
                            REQUIRED_TAGS_LIST_VALUE,
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
                            testName: "REQUIRED_TAGS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_TAGS","_RETURN_":[{"_NAME_":"REQUIRED_TAGS_DESCRIPTOR_CODE","attr":"$.message.order.tags[*].descriptor.code","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_TAGS_LIST_DESCRIPTOR_CODE","attr":"$.message.order.tags[*].list[*].descriptor.code","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_TAGS_LIST_VALUE","attr":"$.message.order.tags[*].list[*].value","_RETURN_":"attr are present","action":["on_update"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [REQUIRED_TAGS];

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
                    testName: "ON_UPDATE_TAGS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_UPDATE_TAGS","action":["on_update"],"_RETURN_":[{"_NAME_":"REQUIRED_TAGS","_RETURN_":[{"_NAME_":"REQUIRED_TAGS_DESCRIPTOR_CODE","attr":"$.message.order.tags[*].descriptor.code","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_TAGS_LIST_DESCRIPTOR_CODE","attr":"$.message.order.tags[*].list[*].descriptor.code","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_TAGS_LIST_VALUE","attr":"$.message.order.tags[*].list[*].value","_RETURN_":"attr are present","action":["on_update"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_UPDATE_DOCUMENTS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_update"];

                function REQUIRED_DOCUMENTS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_DOCUMENTS_DESCRIPTOR_CODE(
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
                                    "$.message.order.documents[*].descriptor.code",
                                );
                                const action = ["on_update"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_DOCUMENTS_DESCRIPTOR_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_DOCUMENTS_DESCRIPTOR_CODE**

- $.message.order.documents[*].descriptor.code must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_DOCUMENTS_DESCRIPTOR_CODE","attr":"$.message.order.documents[*].descriptor.code","_RETURN_":"attr are present","action":["on_update"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_DOCUMENTS_DESCRIPTOR_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_DOCUMENTS_DESCRIPTOR_CODE","attr":"$.message.order.documents[*].descriptor.code","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_DOCUMENTS_URL(
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
                                    "$.message.order.documents[*].url",
                                );
                                const action = ["on_update"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_DOCUMENTS_URL",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_DOCUMENTS_URL**

- $.message.order.documents[*].url must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_DOCUMENTS_URL","attr":"$.message.order.documents[*].url","_RETURN_":"attr are present","action":["on_update"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_DOCUMENTS_URL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_DOCUMENTS_URL","attr":"$.message.order.documents[*].url","_RETURN_":"attr are present","action":["on_update"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_DOCUMENTS_DESCRIPTOR_CODE,
                            REQUIRED_DOCUMENTS_URL,
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
                            testName: "REQUIRED_DOCUMENTS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_DOCUMENTS","_RETURN_":[{"_NAME_":"REQUIRED_DOCUMENTS_DESCRIPTOR_CODE","attr":"$.message.order.documents[*].descriptor.code","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_DOCUMENTS_URL","attr":"$.message.order.documents[*].url","_RETURN_":"attr are present","action":["on_update"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [REQUIRED_DOCUMENTS];

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
                    testName: "ON_UPDATE_DOCUMENTS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_UPDATE_DOCUMENTS","action":["on_update"],"_RETURN_":[{"_NAME_":"REQUIRED_DOCUMENTS","_RETURN_":[{"_NAME_":"REQUIRED_DOCUMENTS_DESCRIPTOR_CODE","attr":"$.message.order.documents[*].descriptor.code","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_DOCUMENTS_URL","attr":"$.message.order.documents[*].url","_RETURN_":"attr are present","action":["on_update"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            ON_UPDATE_CONTEXT,
            ON_UPDATE_ORDER,
            ON_UPDATE_ITEMS,
            ON_UPDATE_ORDER_FULFILLMENTS,
            ON_UPDATE_PROVIDER,
            ON_UPDATE_ORDER_QUOTE,
            ON_UPDATE_PAYMENTS,
            ON_UPDATE_ORDER_BILLING,
            ON_UPDATE_TAGS,
            ON_UPDATE_DOCUMENTS,
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
            testName: "on_updateValidations",
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"on_updateValidations","_RETURN_":[{"_NAME_":"ON_UPDATE_CONTEXT","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"REQUIRED_ON_UPDATE_CONTEXT","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_update"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}]},{"_NAME_":"ON_UPDATE_ORDER","action":["on_update"],"_RETURN_":[{"_NAME_":"REQUIRED_ON_UPDATE_ORDER","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_ID","attr":"$.message.order.id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_ORDER_STATUS","attr":"$.message.order.status","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_ORDER_UPDATED_AT","attr":"$.message.order.updated_at","_RETURN_":"attr are present","action":["on_update"]}]},{"_NAME_":"VALID_ENUM_ON_UPDATE_ORDER","_RETURN_":[{"_NAME_":"VALID_ENUM_ORDER_STATUS","attr":"$.message.order.status","enumList":["SOFT-CANCEL","CONFIRM-CANCEL","SOFT-UPDATE","CONFIRM-UPDATE","ACTIVE","COMPLETE","CANCELLED"],"_RETURN_":"attr any in enumList","action":["on_update"]},{"_NAME_":"REGEX_ON_UPDATE_UPDATED_AT","attr":"$.message.order.updated_at","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_update"]}]}]},{"_NAME_":"ON_UPDATE_ITEMS","action":["on_update"],"_RETURN_":[{"_NAME_":"REQUIRED_ITEMS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ADD_ONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_ITEMS_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_ITEMS_ADDONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["on_update"]}]}]},{"_NAME_":"ON_UPDATE_ORDER_FULFILLMENTS","action":["on_update"],"_RETURN_":[{"_NAME_":"REQUIRED_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_CUSTOMER_NAME","attr":"$.message.order.fulfillments[*].customer.person.name","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_CUSTOMER_AGE","attr":"$.message.order.fulfillments[*].customer.person.age","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_CUSTOMER_DOB","attr":"$.message.order.fulfillments[*].customer.person.dob","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_CUSTOMER_GENDER","attr":"$.message.order.fulfillments[*].customer.person.gender","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_CUSTOMER_CONTACT","attr":"$.message.order.fulfillments[*].customer.contact.phone","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_CUSTOMER_CONTACT_EMAIL","attr":"$.message.order.fulfillments[*].customer.contact.email","_RETURN_":"attr are present","action":["on_update"]}]},{"_NAME_":"ON_UPDATE_PROVIDER","action":["on_update"],"_RETURN_":[{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["on_update"]}]},{"_NAME_":"ON_UPDATE_ORDER_QUOTE","action":["on_update"],"_RETURN_":[{"_NAME_":"REQUIRED_QUOTE_PRICE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_QUOTE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_QUOTE_BREAKUP","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_QUOTE_BREAKUP_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present","action":["on_update"]}]},{"_NAME_":"ON_UPDATE_PAYMENTS","action":["on_update"],"_RETURN_":[{"_NAME_":"REQUIRED_PAYMENT_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_PAYMENT_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"VALID_PAYMENT_TYPES","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_RETURN_":"attr all in enumList","action":["on_update"]},{"_NAME_":"REQUIRED_PAYMENT_STATUS","attr":"$.message.order.payments[*].status","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"VALID_PAYMENT_STATUS","attr":"$.message.order.payments[*].status","enumList":["PAID","NOT-PAID"],"_RETURN_":"attr all in enumList","action":["on_update"]},{"_NAME_":"VALID_ENUM_PAYMENTS","_RETURN_":[{"_NAME_":"VALID_ENUM_PAYMENTS_STATUS","attr":"$.message.order.payments[*].status","enumList":["PAID","NOT-PAID"],"_RETURN_":"attr any in enumList","action":["on_update"]},{"_NAME_":"VALID_ENUM_PAYMENTS_TYPE","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","PART-PAYMENT","ON-FULFILLMENT","POST-FULFILLMENT"],"_RETURN_":"attr any in enumList","action":["on_update"]}]},{"_NAME_":"REQUIRED_PAYMENTS_LINKED_TAGS","_RETURN_":[{"_NAME_":"REQUIRED_LINKED_PAYMENT_TAG","attr":"$.message.order.payments[*].tags[*].descriptor.code","enumList":["LINKED-PAYMENTS","ADV-DEPOSIT","FINAL-PAYMENT"],"_RETURN_":"attr any in enumList","action":["on_update"]}]}]},{"_NAME_":"ON_UPDATE_ORDER_BILLING","action":["on_update"],"_RETURN_":[{"_NAME_":"REQUIRED_BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_BILLING_ADDRESS","attr":"$.message.order.billing.address","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_BILLING_STATE_NAME","attr":"$.message.order.billing.state.name","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_BILLING_CITY_NAME","attr":"$.message.order.billing.city.name","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME","attr":"$.message.order.billing.organization.descriptor.name","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_ADDRESS","attr":"$.message.order.billing.organization.address","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_BILLING_EMAIL","attr":"$.message.order.billing.email","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_BILLING_TAX_ID","attr":"$.message.order.billing.tax_id","_RETURN_":"attr are present","action":["on_update"]}]},{"_NAME_":"ON_UPDATE_TAGS","action":["on_update"],"_RETURN_":[{"_NAME_":"REQUIRED_TAGS","_RETURN_":[{"_NAME_":"REQUIRED_TAGS_DESCRIPTOR_CODE","attr":"$.message.order.tags[*].descriptor.code","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_TAGS_LIST_DESCRIPTOR_CODE","attr":"$.message.order.tags[*].list[*].descriptor.code","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_TAGS_LIST_VALUE","attr":"$.message.order.tags[*].list[*].value","_RETURN_":"attr are present","action":["on_update"]}]}]},{"_NAME_":"ON_UPDATE_DOCUMENTS","action":["on_update"],"_RETURN_":[{"_NAME_":"REQUIRED_DOCUMENTS","_RETURN_":[{"_NAME_":"REQUIRED_DOCUMENTS_DESCRIPTOR_CODE","attr":"$.message.order.documents[*].descriptor.code","_RETURN_":"attr are present","action":["on_update"]},{"_NAME_":"REQUIRED_DOCUMENTS_URL","attr":"$.message.order.documents[*].url","_RETURN_":"attr are present","action":["on_update"]}]}]}]}
`,
            },
        },
        ...subResults,
    ];
}
