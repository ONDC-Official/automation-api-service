import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function init(input: validationInput): validationOutput {
    let totalResults = initValidations(input);

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
                (r) => r.testName === "initValidations",
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

function initValidations(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;

        function INIT_CONTEXT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["init"];
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
                                const action = ["init"];
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
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["init"];
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
{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["init"];
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
{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["init"];
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
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["init"];
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
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["init"];
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
{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["init"];
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
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["init"];
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
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["init"];
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["init"];
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["init"];
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["init"];
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["init"];
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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_FIELDS","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}
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
                                const action = ["init"];
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
{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["init"];
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
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"CONTEXT_ENUM_VALIDATION","_RETURN_":[{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}
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
                    testName: "INIT_CONTEXT",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"INIT_CONTEXT","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_FIELDS","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_ENUM_VALIDATION","_RETURN_":[{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function INIT_ORDER_PROVIDER(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["init"];

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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["init"]}
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
                    testName: "INIT_ORDER_PROVIDER",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"INIT_ORDER_PROVIDER","action":["init"],"_RETURN_":[{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["init"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function INIT_ORDER_ITEMS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["init"];

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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_ITEM_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_ITEM_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["init"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_LOCATION_IDS(
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
                        const action = ["init"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_LOCATION_IDS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_LOCATION_IDS**

- $.message.order.items[*].location_ids[*] must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_LOCATION_IDS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["init"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_LOCATION_IDS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_LOCATION_IDS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["init"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_QUANTITY(
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
                        const action = ["init"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_QUANTITY",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_QUANTITY**

- $.message.order.items[*].quantity.selected.count must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["init"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_QUANTITY",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["init"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ADDS_ON_IDS(
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
                        const action = ["init"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ADDS_ON_IDS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ADDS_ON_IDS**

- $.message.order.items[*].add_ons[*].id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ADDS_ON_IDS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["init"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ADDS_ON_IDS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ADDS_ON_IDS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["init"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_ITEM_ID,
                    REQUIRED_ITEM_LOCATION_IDS,
                    REQUIRED_ITEM_QUANTITY,
                    REQUIRED_ADDS_ON_IDS,
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
                    testName: "INIT_ORDER_ITEMS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"INIT_ORDER_ITEMS","action":["init"],"_RETURN_":[{"_NAME_":"REQUIRED_ITEM_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_ITEM_LOCATION_IDS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_ITEM_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_ADDS_ON_IDS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["init"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function INIT_ORDER_PAYMENTS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["init"];

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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_PAYMENT_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_PAYMENT_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["init"]}
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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_PAYMENT_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_PAYMENT_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["init"]}
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
                        const action = ["init"];

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
{"_NAME_":"VALID_PAYMENT_TYPES","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_RETURN_":"attr all in enumList","action":["init"]}
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
{"_NAME_":"VALID_PAYMENT_TYPES","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_RETURN_":"attr all in enumList","action":["init"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_PAYMENT_PARAMS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.payments[*].params.amount",
                        );
                        const action = ["init"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_PAYMENT_PARAMS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_PAYMENT_PARAMS**

- $.message.order.payments[*].params.amount must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_PARAMS","attr":"$.message.order.payments[*].params.amount","_RETURN_":"attr are present","action":["init"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_PAYMENT_PARAMS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_PARAMS","attr":"$.message.order.payments[*].params.amount","_RETURN_":"attr are present","action":["init"]}
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
                    REQUIRED_PAYMENT_PARAMS,
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
                    testName: "INIT_ORDER_PAYMENTS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"INIT_ORDER_PAYMENTS","action":["init"],"_RETURN_":[{"_NAME_":"REQUIRED_PAYMENT_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_PAYMENT_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"VALID_PAYMENT_TYPES","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_RETURN_":"attr all in enumList","action":["init"]},{"_NAME_":"REQUIRED_PAYMENT_PARAMS","attr":"$.message.order.payments[*].params.amount","_RETURN_":"attr are present","action":["init"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function INIT_ORDER_BILLING(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["init"];

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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present","action":["init"]}
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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_BILLING_ADDRESS","attr":"$.message.order.billing.address","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_BILLING_ADDRESS","attr":"$.message.order.billing.address","_RETURN_":"attr are present","action":["init"]}
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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_BILLING_STATE_NAME","attr":"$.message.order.billing.state.name","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_BILLING_STATE_NAME","attr":"$.message.order.billing.state.name","_RETURN_":"attr are present","action":["init"]}
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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_BILLING_CITY_NAME","attr":"$.message.order.billing.city.name","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_BILLING_CITY_NAME","attr":"$.message.order.billing.city.name","_RETURN_":"attr are present","action":["init"]}
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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME","attr":"$.message.order.billing.organization.descriptor.name","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME","attr":"$.message.order.billing.organization.descriptor.name","_RETURN_":"attr are present","action":["init"]}
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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_ADDRESS","attr":"$.message.order.billing.organization.address","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_ADDRESS","attr":"$.message.order.billing.organization.address","_RETURN_":"attr are present","action":["init"]}
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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_BILLING_EMAIL","attr":"$.message.order.billing.email","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_BILLING_EMAIL","attr":"$.message.order.billing.email","_RETURN_":"attr are present","action":["init"]}
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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present","action":["init"]}
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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_BILLING_TAX_ID","attr":"$.message.order.billing.tax_id","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_BILLING_TAX_ID","attr":"$.message.order.billing.tax_id","_RETURN_":"attr are present","action":["init"]}
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
                    testName: "INIT_ORDER_BILLING",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"INIT_ORDER_BILLING","action":["init"],"_RETURN_":[{"_NAME_":"REQUIRED_BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_BILLING_ADDRESS","attr":"$.message.order.billing.address","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_BILLING_STATE_NAME","attr":"$.message.order.billing.state.name","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_BILLING_CITY_NAME","attr":"$.message.order.billing.city.name","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME","attr":"$.message.order.billing.organization.descriptor.name","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_ADDRESS","attr":"$.message.order.billing.organization.address","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_BILLING_EMAIL","attr":"$.message.order.billing.email","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_BILLING_TAX_ID","attr":"$.message.order.billing.tax_id","_RETURN_":"attr are present","action":["init"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function INIT_ORDER_FULFILLMENTS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["init"];

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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["init"]}
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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_CUSTOMER_NAME","attr":"$.message.order.fulfillments[*].customer.person.name","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_CUSTOMER_NAME","attr":"$.message.order.fulfillments[*].customer.person.name","_RETURN_":"attr are present","action":["init"]}
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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_CUSTOMER_AGE","attr":"$.message.order.fulfillments[*].customer.person.age","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_CUSTOMER_AGE","attr":"$.message.order.fulfillments[*].customer.person.age","_RETURN_":"attr are present","action":["init"]}
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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_CUSTOMER_DOB","attr":"$.message.order.fulfillments[*].customer.person.dob","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_CUSTOMER_DOB","attr":"$.message.order.fulfillments[*].customer.person.dob","_RETURN_":"attr are present","action":["init"]}
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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_CUSTOMER_GENDER","attr":"$.message.order.fulfillments[*].customer.person.gender","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_CUSTOMER_GENDER","attr":"$.message.order.fulfillments[*].customer.person.gender","_RETURN_":"attr are present","action":["init"]}
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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_CUSTOMER_CONTACT","attr":"$.message.order.fulfillments[*].customer.contact.phone","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_CUSTOMER_CONTACT","attr":"$.message.order.fulfillments[*].customer.contact.phone","_RETURN_":"attr are present","action":["init"]}
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
                        const action = ["init"];

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
{"_NAME_":"REQUIRED_CUSTOMER_CONTACT_EMAIL","attr":"$.message.order.fulfillments[*].customer.contact.email","_RETURN_":"attr are present","action":["init"]}
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
{"_NAME_":"REQUIRED_CUSTOMER_CONTACT_EMAIL","attr":"$.message.order.fulfillments[*].customer.contact.email","_RETURN_":"attr are present","action":["init"]}
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
                    testName: "INIT_ORDER_FULFILLMENTS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"INIT_ORDER_FULFILLMENTS","action":["init"],"_RETURN_":[{"_NAME_":"REQUIRED_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_CUSTOMER_NAME","attr":"$.message.order.fulfillments[*].customer.person.name","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_CUSTOMER_AGE","attr":"$.message.order.fulfillments[*].customer.person.age","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_CUSTOMER_DOB","attr":"$.message.order.fulfillments[*].customer.person.dob","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_CUSTOMER_GENDER","attr":"$.message.order.fulfillments[*].customer.person.gender","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_CUSTOMER_CONTACT","attr":"$.message.order.fulfillments[*].customer.contact.phone","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_CUSTOMER_CONTACT_EMAIL","attr":"$.message.order.fulfillments[*].customer.contact.email","_RETURN_":"attr are present","action":["init"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function INIT_ORDER_TAGS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["init"];

                function REQUIRED_BAP_TERMS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code",
                        );
                        const action = ["init"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_BAP_TERMS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_BAP_TERMS**

- $.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_BAP_TERMS","attr":"$.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code","_RETURN_":"attr are present","action":["init"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_BAP_TERMS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_BAP_TERMS","attr":"$.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code","_RETURN_":"attr are present","action":["init"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_BUYER_FINDER_FEES(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code",
                        );
                        const action = ["init"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_BUYER_FINDER_FEES",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_BUYER_FINDER_FEES**

- $.message.order.tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_BUYER_FINDER_FEES","attr":"$.message.order.tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code","_RETURN_":"attr are present","action":["init"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_BUYER_FINDER_FEES",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_BUYER_FINDER_FEES","attr":"$.message.order.tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code","_RETURN_":"attr are present","action":["init"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_BAP_TERMS,
                    REQUIRED_BUYER_FINDER_FEES,
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
                    testName: "INIT_ORDER_TAGS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"INIT_ORDER_TAGS","action":["init"],"_RETURN_":[{"_NAME_":"REQUIRED_BAP_TERMS","attr":"$.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_BUYER_FINDER_FEES","attr":"$.message.order.tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code","_RETURN_":"attr are present","action":["init"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            INIT_CONTEXT,
            INIT_ORDER_PROVIDER,
            INIT_ORDER_ITEMS,
            INIT_ORDER_PAYMENTS,
            INIT_ORDER_BILLING,
            INIT_ORDER_FULFILLMENTS,
            INIT_ORDER_TAGS,
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
            testName: "initValidations",
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"initValidations","_RETURN_":[{"_NAME_":"INIT_CONTEXT","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_FIELDS","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_COUNTRY","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_CITY","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_ACTION","attr":"$.context.action","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_ENUM_VALIDATION","_RETURN_":[{"_NAME_":"VALID_CONTEXT_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr any in enumList","action":["init"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}]},{"_NAME_":"INIT_ORDER_PROVIDER","action":["init"],"_RETURN_":[{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["init"]}]},{"_NAME_":"INIT_ORDER_ITEMS","action":["init"],"_RETURN_":[{"_NAME_":"REQUIRED_ITEM_ID","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_ITEM_LOCATION_IDS","attr":"$.message.order.items[*].location_ids[*]","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_ITEM_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_ADDS_ON_IDS","attr":"$.message.order.items[*].add_ons[*].id","_RETURN_":"attr are present","action":["init"]}]},{"_NAME_":"INIT_ORDER_PAYMENTS","action":["init"],"_RETURN_":[{"_NAME_":"REQUIRED_PAYMENT_ID","attr":"$.message.order.payments[*].id","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_PAYMENT_TYPE","attr":"$.message.order.payments[*].type","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"VALID_PAYMENT_TYPES","attr":"$.message.order.payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_RETURN_":"attr all in enumList","action":["init"]},{"_NAME_":"REQUIRED_PAYMENT_PARAMS","attr":"$.message.order.payments[*].params.amount","_RETURN_":"attr are present","action":["init"]}]},{"_NAME_":"INIT_ORDER_BILLING","action":["init"],"_RETURN_":[{"_NAME_":"REQUIRED_BILLING_NAME","attr":"$.message.order.billing.name","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_BILLING_ADDRESS","attr":"$.message.order.billing.address","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_BILLING_STATE_NAME","attr":"$.message.order.billing.state.name","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_BILLING_CITY_NAME","attr":"$.message.order.billing.city.name","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME","attr":"$.message.order.billing.organization.descriptor.name","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_BILLING_ORGANIZATION_ADDRESS","attr":"$.message.order.billing.organization.address","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_BILLING_EMAIL","attr":"$.message.order.billing.email","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_BILLING_PHONE","attr":"$.message.order.billing.phone","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_BILLING_TAX_ID","attr":"$.message.order.billing.tax_id","_RETURN_":"attr are present","action":["init"]}]},{"_NAME_":"INIT_ORDER_FULFILLMENTS","action":["init"],"_RETURN_":[{"_NAME_":"REQUIRED_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_CUSTOMER_NAME","attr":"$.message.order.fulfillments[*].customer.person.name","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_CUSTOMER_AGE","attr":"$.message.order.fulfillments[*].customer.person.age","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_CUSTOMER_DOB","attr":"$.message.order.fulfillments[*].customer.person.dob","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_CUSTOMER_GENDER","attr":"$.message.order.fulfillments[*].customer.person.gender","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_CUSTOMER_CONTACT","attr":"$.message.order.fulfillments[*].customer.contact.phone","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_CUSTOMER_CONTACT_EMAIL","attr":"$.message.order.fulfillments[*].customer.contact.email","_RETURN_":"attr are present","action":["init"]}]},{"_NAME_":"INIT_ORDER_TAGS","action":["init"],"_RETURN_":[{"_NAME_":"REQUIRED_BAP_TERMS","attr":"$.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code","_RETURN_":"attr are present","action":["init"]},{"_NAME_":"REQUIRED_BUYER_FINDER_FEES","attr":"$.message.order.tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code","_RETURN_":"attr are present","action":["init"]}]}]}
`,
            },
        },
        ...subResults,
    ];
}
