import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function confirm(input: validationInput): validationOutput {
    let totalResults = confirmValidations(input);

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
                (r) => r.testName === "confirmValidations",
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

function confirmValidations(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;

        function CONFIRM_CONTEXT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["confirm"];
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
                                const action = ["confirm"];
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
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["confirm"];
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
{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["confirm"];
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
{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["confirm"];
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
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["confirm"];
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
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["confirm"];
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
{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["confirm"];
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
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["confirm"];
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
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["confirm"];
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["confirm"];
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["confirm"];
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["confirm"];
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["confirm"];
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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_FIELDS","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}
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
                                const action = ["confirm"];
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
{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["confirm"];
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
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"CONTEXT_ENUM_VALIDATION","_RETURN_":[{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}
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
                    testName: "CONFIRM_CONTEXT",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"CONFIRM_CONTEXT","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_FIELDS","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_ENUM_VALIDATION","_RETURN_":[{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function CONFIRM_ORDER_PROVIDER(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["confirm"];

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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["confirm"]}
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
                    testName: "CONFIRM_ORDER_PROVIDER",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"CONFIRM_ORDER_PROVIDER","action":["confirm"],"_RETURN_":[{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["confirm"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function CONFIRM_ITEMS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["confirm"];

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
                                const action = ["confirm"];

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
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["confirm"]}
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
                                const action = ["confirm"];

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
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ADD_ONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ADD_ONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["confirm"]}
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
                                const action = ["confirm"];

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
{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["confirm"]}
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
                                const action = ["confirm"];

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
{"_NAME_":"REQUIRED_ITEMS_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_ITEMS_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["confirm"]}
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
                                const action = ["confirm"];

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
{"_NAME_":"REQUIRED_ITEMS_ADDONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_ITEMS_ADDONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_ITEMS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ADD_ONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_ITEMS_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_ITEMS_ADDONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["confirm"]}]}
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
                    testName: "CONFIRM_ITEMS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"CONFIRM_ITEMS","action":["confirm"],"_RETURN_":[{"_NAME_":"REQUIRED_ITEMS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ADD_ONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_ITEMS_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_ITEMS_ADDONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["confirm"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function CONFIRM_ORDER_QUOTE(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["confirm"];

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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_QUOTE_PRICE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_QUOTE_PRICE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_QUOTE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_QUOTE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_QUOTE_BREAKUP","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_QUOTE_BREAKUP","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_QUOTE_BREAKUP_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_QUOTE_BREAKUP_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present","action":["confirm"]}
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
                    testName: "CONFIRM_ORDER_QUOTE",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"CONFIRM_ORDER_QUOTE","action":["confirm"],"_RETURN_":[{"_NAME_":"REQUIRED_QUOTE_PRICE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_QUOTE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_QUOTE_BREAKUP","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_QUOTE_BREAKUP_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present","action":["confirm"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function CONFIRM_PAYMENTS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["confirm"];

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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_PAYMENT_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_PAYMENT_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_PAYMENT_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_PAYMENT_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"VALID_PAYMENT_TYPES","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_RETURN_":"attr all in enumList","action":["confirm"]}
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
{"_NAME_":"VALID_PAYMENT_TYPES","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_RETURN_":"attr all in enumList","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_PAYMENT_STATUS","attr":"$.message.order.payments[*].status","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_PAYMENT_STATUS","attr":"$.message.order.payments[*].status","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"VALID_PAYMENT_STATUS","attr":"$.message.order.payments[*].status","enumList":["PAID","NOT-PAID"],"_RETURN_":"attr all in enumList","action":["confirm"]}
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
{"_NAME_":"VALID_PAYMENT_STATUS","attr":"$.message.order.payments[*].status","enumList":["PAID","NOT-PAID"],"_RETURN_":"attr all in enumList","action":["confirm"]}
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
                    testName: "CONFIRM_PAYMENTS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"CONFIRM_PAYMENTS","action":["confirm"],"_RETURN_":[{"_NAME_":"REQUIRED_PAYMENT_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_PAYMENT_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"VALID_PAYMENT_TYPES","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_RETURN_":"attr all in enumList","action":["confirm"]},{"_NAME_":"REQUIRED_PAYMENT_STATUS","attr":"$.message.order.payments[*].status","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"VALID_PAYMENT_STATUS","attr":"$.message.order.payments[*].status","enumList":["PAID","NOT-PAID"],"_RETURN_":"attr all in enumList","action":["confirm"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function CONFIRM_ORDER_BILLING(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["confirm"];

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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_BILLING_ADDRESS","attr":"$.message.order.billing.address","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_BILLING_ADDRESS","attr":"$.message.order.billing.address","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_BILLING_STATE_NAME","attr":"$.message.order.billing.state.name","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_BILLING_STATE_NAME","attr":"$.message.order.billing.state.name","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_BILLING_CITY_NAME","attr":"$.message.order.billing.city.name","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_BILLING_CITY_NAME","attr":"$.message.order.billing.city.name","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME","attr":"$.message.order.billing.organization.descriptor.name","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME","attr":"$.message.order.billing.organization.descriptor.name","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_ADDRESS","attr":"$.message.order.billing.organization.address","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_ADDRESS","attr":"$.message.order.billing.organization.address","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_BILLING_EMAIL","attr":"$.message.order.billing.email","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_BILLING_EMAIL","attr":"$.message.order.billing.email","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_BILLING_TAX_ID","attr":"$.message.order.billing.tax_id","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_BILLING_TAX_ID","attr":"$.message.order.billing.tax_id","_RETURN_":"attr are present","action":["confirm"]}
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
                    testName: "CONFIRM_ORDER_BILLING",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"CONFIRM_ORDER_BILLING","action":["confirm"],"_RETURN_":[{"_NAME_":"REQUIRED_BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_BILLING_ADDRESS","attr":"$.message.order.billing.address","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_BILLING_STATE_NAME","attr":"$.message.order.billing.state.name","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_BILLING_CITY_NAME","attr":"$.message.order.billing.city.name","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME","attr":"$.message.order.billing.organization.descriptor.name","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_ADDRESS","attr":"$.message.order.billing.organization.address","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_BILLING_EMAIL","attr":"$.message.order.billing.email","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_BILLING_TAX_ID","attr":"$.message.order.billing.tax_id","_RETURN_":"attr are present","action":["confirm"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function CONFIRM_ORDER_FULFILLMENTS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["confirm"];

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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_CUSTOMER_NAME","attr":"$.message.order.fulfillments[*].customer.person.name","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_CUSTOMER_NAME","attr":"$.message.order.fulfillments[*].customer.person.name","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_CUSTOMER_AGE","attr":"$.message.order.fulfillments[*].customer.person.age","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_CUSTOMER_AGE","attr":"$.message.order.fulfillments[*].customer.person.age","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_CUSTOMER_DOB","attr":"$.message.order.fulfillments[*].customer.person.dob","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_CUSTOMER_DOB","attr":"$.message.order.fulfillments[*].customer.person.dob","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_CUSTOMER_GENDER","attr":"$.message.order.fulfillments[*].customer.person.gender","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_CUSTOMER_GENDER","attr":"$.message.order.fulfillments[*].customer.person.gender","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_CUSTOMER_CONTACT","attr":"$.message.order.fulfillments[*].customer.contact.phone","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_CUSTOMER_CONTACT","attr":"$.message.order.fulfillments[*].customer.contact.phone","_RETURN_":"attr are present","action":["confirm"]}
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
                        const action = ["confirm"];

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
{"_NAME_":"REQUIRED_CUSTOMER_CONTACT_EMAIL","attr":"$.message.order.fulfillments[*].customer.contact.email","_RETURN_":"attr are present","action":["confirm"]}
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
{"_NAME_":"REQUIRED_CUSTOMER_CONTACT_EMAIL","attr":"$.message.order.fulfillments[*].customer.contact.email","_RETURN_":"attr are present","action":["confirm"]}
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
                    testName: "CONFIRM_ORDER_FULFILLMENTS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"CONFIRM_ORDER_FULFILLMENTS","action":["confirm"],"_RETURN_":[{"_NAME_":"REQUIRED_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_CUSTOMER_NAME","attr":"$.message.order.fulfillments[*].customer.person.name","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_CUSTOMER_AGE","attr":"$.message.order.fulfillments[*].customer.person.age","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_CUSTOMER_DOB","attr":"$.message.order.fulfillments[*].customer.person.dob","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_CUSTOMER_GENDER","attr":"$.message.order.fulfillments[*].customer.person.gender","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_CUSTOMER_CONTACT","attr":"$.message.order.fulfillments[*].customer.contact.phone","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_CUSTOMER_CONTACT_EMAIL","attr":"$.message.order.fulfillments[*].customer.contact.email","_RETURN_":"attr are present","action":["confirm"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function CONFIRM_TAGS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["confirm"];

                function REQUIRED_TAG_GROUPS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.tags[*].descriptor.code",
                        );
                        const action = ["confirm"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_TAG_GROUPS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_TAG_GROUPS**

- $.message.order.tags[*].descriptor.code must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_TAG_GROUPS","attr":"$.message.order.tags[*].descriptor.code","_RETURN_":"attr are present","action":["confirm"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_TAG_GROUPS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_TAG_GROUPS","attr":"$.message.order.tags[*].descriptor.code","_RETURN_":"attr are present","action":["confirm"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function PAYMENT_TAG_GROUP(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const validTags = [
                            "BAP_TERMS",
                            "BUYER_FINDER_FEES",
                            "BPP_TERMS",
                        ];
                        const tagPath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.tags[*].descriptor.code",
                        );
                        const action = ["confirm"];

                        const validate = validations.allIn(tagPath, validTags);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "PAYMENT_TAG_GROUP",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **PAYMENT_TAG_GROUP**

- All elements of $.message.order.tags[*].descriptor.code must be in ["BAP_TERMS", "BUYER_FINDER_FEES", "BPP_TERMS"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_TAG_GROUP","validTags":["BAP_TERMS","BUYER_FINDER_FEES","BPP_TERMS"],"tagPath":"$.message.order.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["confirm"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "PAYMENT_TAG_GROUP",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"PAYMENT_TAG_GROUP","validTags":["BAP_TERMS","BUYER_FINDER_FEES","BPP_TERMS"],"tagPath":"$.message.order.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["confirm"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_PAYMENT_TAG_BPP_TERMS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(
                        input.payload,
                        "$.message.order.tags[?(@.descriptor.code=='BPP_TERMS')]",
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
                            "MAX_LIABILITY",
                            "MAX_LIABILITY_CAP",
                            "MANDATORY_ARBITRATION",
                            "COURT_JURISDICTION",
                            "DELAY_INTEREST",
                            "TAX_NUMBER",
                        ];
                        const action = ["confirm"];

                        const skipCheck = !validations.arePresent(subTags);
                        if (skipCheck) continue;

                        const validate = validations.allIn(
                            subTags,
                            validValues,
                        );

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_PAYMENT_TAG_BPP_TERMS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_PAYMENT_TAG_BPP_TERMS**

- All elements of $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must be in ["MAX_LIABILITY", "MAX_LIABILITY_CAP", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "TAX_NUMBER"]

> **Skip if:**
>
>     - $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_TAG_BPP_TERMS","_SCOPE_":"$.message.order.tags[?(@.descriptor.code=='BPP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["MAX_LIABILITY","MAX_LIABILITY_CAP","MANDATORY_ARBITRATION","COURT_JURISDICTION","DELAY_INTEREST","TAX_NUMBER"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["confirm"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_PAYMENT_TAG_BPP_TERMS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_TAG_BPP_TERMS","_SCOPE_":"$.message.order.tags[?(@.descriptor.code=='BPP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["MAX_LIABILITY","MAX_LIABILITY_CAP","MANDATORY_ARBITRATION","COURT_JURISDICTION","DELAY_INTEREST","TAX_NUMBER"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["confirm"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_TAG_GROUPS,
                    PAYMENT_TAG_GROUP,
                    REQUIRED_PAYMENT_TAG_BPP_TERMS,
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
                    testName: "CONFIRM_TAGS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"CONFIRM_TAGS","action":["confirm"],"_RETURN_":[{"_NAME_":"REQUIRED_TAG_GROUPS","attr":"$.message.order.tags[*].descriptor.code","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"PAYMENT_TAG_GROUP","validTags":["BAP_TERMS","BUYER_FINDER_FEES","BPP_TERMS"],"tagPath":"$.message.order.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["confirm"]},{"_NAME_":"REQUIRED_PAYMENT_TAG_BPP_TERMS","_SCOPE_":"$.message.order.tags[?(@.descriptor.code=='BPP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["MAX_LIABILITY","MAX_LIABILITY_CAP","MANDATORY_ARBITRATION","COURT_JURISDICTION","DELAY_INTEREST","TAX_NUMBER"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["confirm"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function CONFIRM_TIMESTAMPS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["confirm"];

                function REQUIRED_CREATED_AT(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.created_at",
                        );
                        const reg = [
                            "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$",
                        ];
                        const action = ["confirm"];

                        const validate = validations.followRegex(attr, reg);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_CREATED_AT",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_CREATED_AT**

- All elements of $.message.order.created_at must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CREATED_AT","attr":"$.message.order.created_at","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["confirm"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_CREATED_AT",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_CREATED_AT","attr":"$.message.order.created_at","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["confirm"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_UPDATED_AT(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.updated_at",
                        );
                        const reg = [
                            "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$",
                        ];
                        const action = ["confirm"];

                        const validate = validations.followRegex(attr, reg);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_UPDATED_AT",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_UPDATED_AT**

- All elements of $.message.order.updated_at must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_UPDATED_AT","attr":"$.message.order.updated_at","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["confirm"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_UPDATED_AT",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_UPDATED_AT","attr":"$.message.order.updated_at","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["confirm"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_CREATED_AT,
                    REQUIRED_UPDATED_AT,
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
                    testName: "CONFIRM_TIMESTAMPS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"CONFIRM_TIMESTAMPS","action":["confirm"],"_RETURN_":[{"_NAME_":"REQUIRED_CREATED_AT","attr":"$.message.order.created_at","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["confirm"]},{"_NAME_":"REQUIRED_UPDATED_AT","attr":"$.message.order.updated_at","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["confirm"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            CONFIRM_CONTEXT,
            CONFIRM_ORDER_PROVIDER,
            CONFIRM_ITEMS,
            CONFIRM_ORDER_QUOTE,
            CONFIRM_PAYMENTS,
            CONFIRM_ORDER_BILLING,
            CONFIRM_ORDER_FULFILLMENTS,
            CONFIRM_TAGS,
            CONFIRM_TIMESTAMPS,
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
            testName: "confirmValidations",
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"confirmValidations","_RETURN_":[{"_NAME_":"CONFIRM_CONTEXT","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_FIELDS","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_ENUM_VALIDATION","_RETURN_":[{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["confirm"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}]},{"_NAME_":"CONFIRM_ORDER_PROVIDER","action":["confirm"],"_RETURN_":[{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["confirm"]}]},{"_NAME_":"CONFIRM_ITEMS","action":["confirm"],"_RETURN_":[{"_NAME_":"REQUIRED_ITEMS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_MESSAGE_ITEMS_ADD_ONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_ITEMS_LOCATIONS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_ITEMS_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_ITEMS_ADDONS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["confirm"]}]}]},{"_NAME_":"CONFIRM_ORDER_QUOTE","action":["confirm"],"_RETURN_":[{"_NAME_":"REQUIRED_QUOTE_PRICE","attr":"$.message.order.quote.price.value","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_QUOTE_CURRENCY","attr":"$.message.order.quote.price.currency","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_QUOTE_BREAKUP","attr":"$.message.order.quote.breakup[*].price.value","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY","attr":"$.message.order.quote.breakup[*].price.currency","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_QUOTE_BREAKUP_TITLE","attr":"$.message.order.quote.breakup[*].title","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_QUOTE_TTL","attr":"$.message.order.quote.ttl","_RETURN_":"attr are present","action":["confirm"]}]},{"_NAME_":"CONFIRM_PAYMENTS","action":["confirm"],"_RETURN_":[{"_NAME_":"REQUIRED_PAYMENT_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_PAYMENT_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"VALID_PAYMENT_TYPES","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_RETURN_":"attr all in enumList","action":["confirm"]},{"_NAME_":"REQUIRED_PAYMENT_STATUS","attr":"$.message.order.payments[*].status","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"VALID_PAYMENT_STATUS","attr":"$.message.order.payments[*].status","enumList":["PAID","NOT-PAID"],"_RETURN_":"attr all in enumList","action":["confirm"]}]},{"_NAME_":"CONFIRM_ORDER_BILLING","action":["confirm"],"_RETURN_":[{"_NAME_":"REQUIRED_BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_BILLING_ADDRESS","attr":"$.message.order.billing.address","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_BILLING_STATE_NAME","attr":"$.message.order.billing.state.name","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_BILLING_CITY_NAME","attr":"$.message.order.billing.city.name","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME","attr":"$.message.order.billing.organization.descriptor.name","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_ADDRESS","attr":"$.message.order.billing.organization.address","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_BILLING_EMAIL","attr":"$.message.order.billing.email","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_BILLING_TAX_ID","attr":"$.message.order.billing.tax_id","_RETURN_":"attr are present","action":["confirm"]}]},{"_NAME_":"CONFIRM_ORDER_FULFILLMENTS","action":["confirm"],"_RETURN_":[{"_NAME_":"REQUIRED_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_CUSTOMER_NAME","attr":"$.message.order.fulfillments[*].customer.person.name","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_CUSTOMER_AGE","attr":"$.message.order.fulfillments[*].customer.person.age","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_CUSTOMER_DOB","attr":"$.message.order.fulfillments[*].customer.person.dob","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_CUSTOMER_GENDER","attr":"$.message.order.fulfillments[*].customer.person.gender","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_CUSTOMER_CONTACT","attr":"$.message.order.fulfillments[*].customer.contact.phone","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"REQUIRED_CUSTOMER_CONTACT_EMAIL","attr":"$.message.order.fulfillments[*].customer.contact.email","_RETURN_":"attr are present","action":["confirm"]}]},{"_NAME_":"CONFIRM_TAGS","action":["confirm"],"_RETURN_":[{"_NAME_":"REQUIRED_TAG_GROUPS","attr":"$.message.order.tags[*].descriptor.code","_RETURN_":"attr are present","action":["confirm"]},{"_NAME_":"PAYMENT_TAG_GROUP","validTags":["BAP_TERMS","BUYER_FINDER_FEES","BPP_TERMS"],"tagPath":"$.message.order.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["confirm"]},{"_NAME_":"REQUIRED_PAYMENT_TAG_BPP_TERMS","_SCOPE_":"$.message.order.tags[?(@.descriptor.code=='BPP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["MAX_LIABILITY","MAX_LIABILITY_CAP","MANDATORY_ARBITRATION","COURT_JURISDICTION","DELAY_INTEREST","TAX_NUMBER"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["confirm"]}]},{"_NAME_":"CONFIRM_TIMESTAMPS","action":["confirm"],"_RETURN_":[{"_NAME_":"REQUIRED_CREATED_AT","attr":"$.message.order.created_at","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["confirm"]},{"_NAME_":"REQUIRED_UPDATED_AT","attr":"$.message.order.updated_at","reg":["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["confirm"]}]}]}
`,
            },
        },
        ...subResults,
    ];
}
