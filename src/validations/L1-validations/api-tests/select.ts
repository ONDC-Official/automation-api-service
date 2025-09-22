import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function select(input: validationInput): validationOutput {
    let totalResults = selectValidations(input);

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
                (r) => r.testName === "selectValidations",
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

function selectValidations(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;

        function SELECT_CONTEXT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["select"];
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
                                const action = ["select"];
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
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_FIELDS","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}
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
                                const action = ["select"];
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
{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"CONTEXT_ENUM_VALIDATION","_RETURN_":[{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}
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
                    testName: "SELECT_CONTEXT",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SELECT_CONTEXT","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_FIELDS","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_ENUM_VALIDATION","_RETURN_":[{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function SELECT_ORDER(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["select"];

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
                        const action = ["select"];

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
{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["select"]}
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
{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_PROVIDER_TIME_LABEL(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.provider.time.label",
                        );
                        const action = ["select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_PROVIDER_TIME_LABEL",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_PROVIDER_TIME_LABEL**

- $.message.order.provider.time.label must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PROVIDER_TIME_LABEL","attr":"$.message.order.provider.time.label","_RETURN_":"attr are present","action":["select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_PROVIDER_TIME_LABEL",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PROVIDER_TIME_LABEL","attr":"$.message.order.provider.time.label","_RETURN_":"attr are present","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_PROVIDER_TIME_RANGE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.provider.time.range.start",
                        );
                        const action = ["select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_PROVIDER_TIME_RANGE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_PROVIDER_TIME_RANGE**

- $.message.order.provider.time.range.start must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PROVIDER_TIME_RANGE","attr":"$.message.order.provider.time.range.start","_RETURN_":"attr are present","action":["select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_PROVIDER_TIME_RANGE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PROVIDER_TIME_RANGE","attr":"$.message.order.provider.time.range.start","_RETURN_":"attr are present","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_PROVIDER_TIME_RANGE_END(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.provider.time.range.end",
                        );
                        const action = ["select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_PROVIDER_TIME_RANGE_END",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_PROVIDER_TIME_RANGE_END**

- $.message.order.provider.time.range.end must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PROVIDER_TIME_RANGE_END","attr":"$.message.order.provider.time.range.end","_RETURN_":"attr are present","action":["select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_PROVIDER_TIME_RANGE_END",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PROVIDER_TIME_RANGE_END","attr":"$.message.order.provider.time.range.end","_RETURN_":"attr are present","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_PROVIDER_ID,
                    REQUIRED_PROVIDER_TIME_LABEL,
                    REQUIRED_PROVIDER_TIME_RANGE,
                    REQUIRED_PROVIDER_TIME_RANGE_END,
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
                    testName: "SELECT_ORDER",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SELECT_ORDER","action":["select"],"_RETURN_":[{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_PROVIDER_TIME_LABEL","attr":"$.message.order.provider.time.label","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_PROVIDER_TIME_RANGE","attr":"$.message.order.provider.time.range.start","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_PROVIDER_TIME_RANGE_END","attr":"$.message.order.provider.time.range.end","_RETURN_":"attr are present","action":["select"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function SELECT_ORDER_ITEMS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["select"];

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
                        const action = ["select"];

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
{"_NAME_":"REQUIRED_ITEM_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["select"]}
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
{"_NAME_":"REQUIRED_ITEM_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_LOCATION(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].location_ids[*]",
                        );
                        const action = ["select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_LOCATION",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_LOCATION**

- $.message.order.items[*].location_ids[*] must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_LOCATION","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_LOCATION",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_LOCATION","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_QUANTITY_SELECTED(
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
                        const action = ["select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_QUANTITY_SELECTED",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_QUANTITY_SELECTED**

- $.message.order.items[*].quantity.selected.count must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_QUANTITY_SELECTED","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_QUANTITY_SELECTED",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_QUANTITY_SELECTED","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_ADDON_ID(
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
                        const action = ["select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_ADDON_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_ADDON_ID**

- $.message.order.items[*].add_ons[*].id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_ADDON_ID","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_ADDON_ID",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_ADDON_ID","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_ITEM_ID,
                    REQUIRED_ITEM_LOCATION,
                    REQUIRED_ITEM_QUANTITY_SELECTED,
                    REQUIRED_ITEM_ADDON_ID,
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
                    testName: "SELECT_ORDER_ITEMS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SELECT_ORDER_ITEMS","action":["select"],"_RETURN_":[{"_NAME_":"REQUIRED_ITEM_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_ITEM_LOCATION","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_ITEM_QUANTITY_SELECTED","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_ITEM_ADDON_ID","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["select"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function SELECT_ORDER_FULFILLMENTS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["select"];

                function REQUIRED_FULFILLMENT_TAGS(
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
                        const action = ["select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_FULFILLMENT_TAGS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_FULFILLMENT_TAGS**

- $.message.order.fulfillments[*].tags[*].descriptor.code must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_FULFILLMENT_TAGS","attr":"$.message.order.fulfillments[*].tags[*].descriptor.code","_RETURN_":"attr are present","action":["select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_FULFILLMENT_TAGS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILLMENT_TAGS","attr":"$.message.order.fulfillments[*].tags[*].descriptor.code","_RETURN_":"attr are present","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function VALID_FULFILLMENT_TAG_GUESTS(
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
                        const enumList = ["GUESTS"];
                        const action = ["select"];

                        const validate = validations.allIn(attr, enumList);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "VALID_FULFILLMENT_TAG_GUESTS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **VALID_FULFILLMENT_TAG_GUESTS**

- All elements of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["GUESTS"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_FULFILLMENT_TAG_GUESTS","attr":"$.message.order.fulfillments[*].tags[*].descriptor.code","enumList":["GUESTS"],"_RETURN_":"attr all in enumList","action":["select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "VALID_FULFILLMENT_TAG_GUESTS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"VALID_FULFILLMENT_TAG_GUESTS","attr":"$.message.order.fulfillments[*].tags[*].descriptor.code","enumList":["GUESTS"],"_RETURN_":"attr all in enumList","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function VALID_FULFILLMENT_SUBTAGS(
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
                        const enumList = ["ADULTS", "CHILDREN"];
                        const action = ["select"];

                        const validate = validations.allIn(attr, enumList);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "VALID_FULFILLMENT_SUBTAGS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **VALID_FULFILLMENT_SUBTAGS**

- All elements of $.message.order.fulfillments[*].tags[*].list[*].descriptor.code must be in ["ADULTS", "CHILDREN"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_FULFILLMENT_SUBTAGS","attr":"$.message.order.fulfillments[*].tags[*].list[*].descriptor.code","enumList":["ADULTS","CHILDREN"],"_RETURN_":"attr all in enumList","action":["select"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "VALID_FULFILLMENT_SUBTAGS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"VALID_FULFILLMENT_SUBTAGS","attr":"$.message.order.fulfillments[*].tags[*].list[*].descriptor.code","enumList":["ADULTS","CHILDREN"],"_RETURN_":"attr all in enumList","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_FULFILLMENT_TAGS,
                    VALID_FULFILLMENT_TAG_GUESTS,
                    VALID_FULFILLMENT_SUBTAGS,
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
                    testName: "SELECT_ORDER_FULFILLMENTS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SELECT_ORDER_FULFILLMENTS","action":["select"],"_RETURN_":[{"_NAME_":"REQUIRED_FULFILLMENT_TAGS","attr":"$.message.order.fulfillments[*].tags[*].descriptor.code","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"VALID_FULFILLMENT_TAG_GUESTS","attr":"$.message.order.fulfillments[*].tags[*].descriptor.code","enumList":["GUESTS"],"_RETURN_":"attr all in enumList","action":["select"]},{"_NAME_":"VALID_FULFILLMENT_SUBTAGS","attr":"$.message.order.fulfillments[*].tags[*].list[*].descriptor.code","enumList":["ADULTS","CHILDREN"],"_RETURN_":"attr all in enumList","action":["select"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            SELECT_CONTEXT,
            SELECT_ORDER,
            SELECT_ORDER_ITEMS,
            SELECT_ORDER_FULFILLMENTS,
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
            testName: "selectValidations",
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"selectValidations","_RETURN_":[{"_NAME_":"SELECT_CONTEXT","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_FIELDS","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_ENUM_VALIDATION","_RETURN_":[{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["select"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}]},{"_NAME_":"SELECT_ORDER","action":["select"],"_RETURN_":[{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_PROVIDER_TIME_LABEL","attr":"$.message.order.provider.time.label","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_PROVIDER_TIME_RANGE","attr":"$.message.order.provider.time.range.start","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_PROVIDER_TIME_RANGE_END","attr":"$.message.order.provider.time.range.end","_RETURN_":"attr are present","action":["select"]}]},{"_NAME_":"SELECT_ORDER_ITEMS","action":["select"],"_RETURN_":[{"_NAME_":"REQUIRED_ITEM_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_ITEM_LOCATION","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_ITEM_QUANTITY_SELECTED","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_ITEM_ADDON_ID","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["select"]}]},{"_NAME_":"SELECT_ORDER_FULFILLMENTS","action":["select"],"_RETURN_":[{"_NAME_":"REQUIRED_FULFILLMENT_TAGS","attr":"$.message.order.fulfillments[*].tags[*].descriptor.code","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"VALID_FULFILLMENT_TAG_GUESTS","attr":"$.message.order.fulfillments[*].tags[*].descriptor.code","enumList":["GUESTS"],"_RETURN_":"attr all in enumList","action":["select"]},{"_NAME_":"VALID_FULFILLMENT_SUBTAGS","attr":"$.message.order.fulfillments[*].tags[*].list[*].descriptor.code","enumList":["ADULTS","CHILDREN"],"_RETURN_":"attr all in enumList","action":["select"]}]}]}
`,
            },
        },
        ...subResults,
    ];
}
