import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function on_select(input: validationInput): validationOutput {
    let totalResults = on_selectValidations(input);

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
                (r) => r.testName === "on_selectValidations",
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

function on_selectValidations(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;

        function ON_SELECT_CONTEXT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_select"];
                const domain = ["ONDC:TRV13"];
                const version = ["2.0.0"];

                function REQUIRED_CONTEXT_FIELDS(
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
                                const action = ["on_select"];
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
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_COUNTRY(
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
                                    "$.context.location.country.code",
                                );
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_COUNTRY",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_COUNTRY**

- $.context.location.country.code must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_COUNTRY",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_CITY(
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
                                    "$.context.location.city.code",
                                );
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_CONTEXT_CITY",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_CITY**

- $.context.location.city.code must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_CITY",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_select"];
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
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_select"];
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
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_select"];
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
{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_TIMESTAMP(
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
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_TIMESTAMP",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_TIMESTAMP**

- $.context.timestamp must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_TIMESTAMP",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_select"];
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
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_BAP_URI(
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
                                    "$.context.bap_uri",
                                );
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_BAP_URI",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_BAP_URI**

- $.context.bap_uri must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_BAP_URI",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_BAP_ID(
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
                                    "$.context.bap_id",
                                );
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_CONTEXT_BAP_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_BAP_ID**

- $.context.bap_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_BAP_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_BPP_URI(
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
                                    "$.context.bpp_uri",
                                );
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_BPP_URI",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_BPP_URI**

- $.context.bpp_uri must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_BPP_URI",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_BPP_ID(
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
                                    "$.context.bpp_id",
                                );
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_CONTEXT_BPP_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_BPP_ID**

- $.context.bpp_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_BPP_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_TTL(
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
                                    "$.context.ttl",
                                );
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_CONTEXT_TTL",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_TTL**

- $.context.ttl must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_TTL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_CONTEXT_DOMAIN,
                            REQUIRED_CONTEXT_COUNTRY,
                            REQUIRED_CONTEXT_CITY,
                            REQUIRED_CONTEXT_TRANSACTION_ID,
                            REQUIRED_CONTEXT_MESSAGE_ID,
                            REQUIRED_CONTEXT_ACTION,
                            REQUIRED_CONTEXT_TIMESTAMP,
                            REQUIRED_CONTEXT_VERSION,
                            REQUIRED_CONTEXT_BAP_URI,
                            REQUIRED_CONTEXT_BAP_ID,
                            REQUIRED_CONTEXT_BPP_URI,
                            REQUIRED_CONTEXT_BPP_ID,
                            REQUIRED_CONTEXT_TTL,
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
                            testName: "REQUIRED_CONTEXT_FIELDS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_FIELDS","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function CONTEXT_ENUM_VALIDATION(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function VALID_CONTEXT_COUNTRY_CODE(
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
                                    "$.context.location.country.code",
                                );
                                const enumList = ["IND"];
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.anyIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "VALID_CONTEXT_COUNTRY_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **VALID_CONTEXT_COUNTRY_CODE**

- At least one of $.context.location.country.code must be in ["IND"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "VALID_CONTEXT_COUNTRY_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function VALID_CONTEXT_DOMAIN(
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
                                const enumList = ["ONDC:TRV13"];
                                const action = ["on_select"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.anyIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "VALID_CONTEXT_DOMAIN",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **VALID_CONTEXT_DOMAIN**

- At least one of $.context.domain must be in ["ONDC:TRV13"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                // delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "VALID_CONTEXT_DOMAIN",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            VALID_CONTEXT_COUNTRY_CODE,
                            VALID_CONTEXT_DOMAIN,
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
                            testName: "CONTEXT_ENUM_VALIDATION",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"CONTEXT_ENUM_VALIDATION","_RETURN_":[{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_CONTEXT_FIELDS,
                    CONTEXT_ENUM_VALIDATION,
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
                    testName: "ON_SELECT_CONTEXT",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SELECT_CONTEXT","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_FIELDS","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_ENUM_VALIDATION","_RETURN_":[{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_SELECT_ORDER(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_select"];

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
                        const action = ["on_select"];

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
{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["on_select"]}
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
                    testName: "ON_SELECT_ORDER",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SELECT_ORDER","action":["on_select"],"_RETURN_":[{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["on_select"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_SELECT_ORDER_ITEMS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_select"];

                function REQUIRED_ITEM_ID(
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
                        const action = ["on_select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_ID**

- $.message.order.items[*].id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_ID",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_ADDS_ON_IDS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].add_ons[*].id",
                        );
                        const action = ["on_select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_ADDS_ON_IDS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_ADDS_ON_IDS**

- $.message.order.items[*].add_ons[*].id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_ADDS_ON_IDS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["on_select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_ADDS_ON_IDS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_ADDS_ON_IDS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["on_select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_ITEM_ID,
                    REQUIRED_ITEM_ADDS_ON_IDS,
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
                    testName: "ON_SELECT_ORDER_ITEMS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SELECT_ORDER_ITEMS","action":["on_select"],"_RETURN_":[{"_NAME_":"REQUIRED_ITEM_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_ITEM_ADDS_ON_IDS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["on_select"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_SELECT_ORDER_QUOTE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_select"];

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
                        const action = ["on_select"];

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
{"_NAME_":"REQUIRED_QUOTE_PRICE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"REQUIRED_QUOTE_PRICE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present","action":["on_select"]}
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
                        const action = ["on_select"];

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
{"_NAME_":"REQUIRED_QUOTE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"REQUIRED_QUOTE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present","action":["on_select"]}
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
                        const action = ["on_select"];

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
{"_NAME_":"REQUIRED_QUOTE_BREAKUP","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"REQUIRED_QUOTE_BREAKUP","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present","action":["on_select"]}
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
                        const action = ["on_select"];

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
{"_NAME_":"REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present","action":["on_select"]}
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
                        const action = ["on_select"];

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
{"_NAME_":"REQUIRED_QUOTE_BREAKUP_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"REQUIRED_QUOTE_BREAKUP_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["on_select"]}
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
                        const action = ["on_select"];

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
{"_NAME_":"REQUIRED_QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"REQUIRED_QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present","action":["on_select"]}
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
                    testName: "ON_SELECT_ORDER_QUOTE",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SELECT_ORDER_QUOTE","action":["on_select"],"_RETURN_":[{"_NAME_":"REQUIRED_QUOTE_PRICE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_BREAKUP","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_BREAKUP_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present","action":["on_select"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_SELECT_ORDER_PAYMENTS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_select"];

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
                        const action = ["on_select"];

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
{"_NAME_":"REQUIRED_PAYMENT_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"REQUIRED_PAYMENT_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["on_select"]}
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
                        const action = ["on_select"];

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
{"_NAME_":"REQUIRED_PAYMENT_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["on_select"]}
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
{"_NAME_":"REQUIRED_PAYMENT_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["on_select"]}
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
                        const action = ["on_select"];

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
{"_NAME_":"VALID_PAYMENT_TYPES","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_RETURN_":"attr all in enumList","action":["on_select"]}
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
{"_NAME_":"VALID_PAYMENT_TYPES","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_RETURN_":"attr all in enumList","action":["on_select"]}
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
                    testName: "ON_SELECT_ORDER_PAYMENTS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SELECT_ORDER_PAYMENTS","action":["on_select"],"_RETURN_":[{"_NAME_":"REQUIRED_PAYMENT_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_PAYMENT_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"VALID_PAYMENT_TYPES","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_RETURN_":"attr all in enumList","action":["on_select"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            ON_SELECT_CONTEXT,
            ON_SELECT_ORDER,
            ON_SELECT_ORDER_ITEMS,
            ON_SELECT_ORDER_QUOTE,
            ON_SELECT_ORDER_PAYMENTS,
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
            testName: "on_selectValidations",
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"on_selectValidations","_RETURN_":[{"_NAME_":"ON_SELECT_CONTEXT","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_FIELDS","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_ENUM_VALIDATION","_RETURN_":[{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["on_select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}]},{"_NAME_":"ON_SELECT_ORDER","action":["on_select"],"_RETURN_":[{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["on_select"]}]},{"_NAME_":"ON_SELECT_ORDER_ITEMS","action":["on_select"],"_RETURN_":[{"_NAME_":"REQUIRED_ITEM_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_ITEM_ADDS_ON_IDS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["on_select"]}]},{"_NAME_":"ON_SELECT_ORDER_QUOTE","action":["on_select"],"_RETURN_":[{"_NAME_":"REQUIRED_QUOTE_PRICE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_BREAKUP","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_BREAKUP_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present","action":["on_select"]}]},{"_NAME_":"ON_SELECT_ORDER_PAYMENTS","action":["on_select"],"_RETURN_":[{"_NAME_":"REQUIRED_PAYMENT_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"REQUIRED_PAYMENT_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["on_select"]},{"_NAME_":"VALID_PAYMENT_TYPES","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_RETURN_":"attr all in enumList","action":["on_select"]}]}]}
`,
            },
        },
        ...subResults,
    ];
}
