import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function on_search(input: validationInput): validationOutput {
    let totalResults = on_searchValidations(input);

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
                (r) => r.testName === "on_searchValidations",
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

function on_searchValidations(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;

        function ON_SEARCH_CONTEXT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_search"];
                const domain = ["ONDC:TRV13"];
                const version = ["2.0.0"];

                function CONTEXT_REQUIRED(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE(
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
                                const action = ["on_search"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE**

- $.context.location.country.code must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                        "REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_CONTEXT_LOCATION_CITY_CODE(
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
                                const action = ["on_search"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    // delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_LOCATION_CITY_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **REQUIRED_CONTEXT_LOCATION_CITY_CODE**

- $.context.location.city.code must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                        "REQUIRED_CONTEXT_LOCATION_CITY_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
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
                                const action = ["on_search"];
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
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_search"];
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
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_search"];
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_search"];
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_search"];
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_search"];
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_search"];
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
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_search"];
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
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_search"];
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
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_search"];
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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE,
                            REQUIRED_CONTEXT_LOCATION_CITY_CODE,
                            REQUIRED_CONTEXT_DOMAIN,
                            REQUIRED_CONTEXT_TIMESTAMP,
                            REQUIRED_CONTEXT_BAP_ID,
                            REQUIRED_CONTEXT_BAP_URI,
                            REQUIRED_CONTEXT_BPP_ID,
                            REQUIRED_CONTEXT_BPP_URI,
                            REQUIRED_CONTEXT_TRANSACTION_ID,
                            REQUIRED_CONTEXT_MESSAGE_ID,
                            REQUIRED_CONTEXT_VERSION,
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
                            testName: "CONTEXT_REQUIRED",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function CONTEXT_ENUM(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function VALID_CONTEXT_LOCATION_COUNTRY_CODE(
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
                                const action = ["on_search"];
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
                                                "VALID_CONTEXT_LOCATION_COUNTRY_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `#### **VALID_CONTEXT_LOCATION_COUNTRY_CODE**

- At least one of $.context.location.country.code must be in ["IND"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                        "VALID_CONTEXT_LOCATION_COUNTRY_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
                                const action = ["on_search"];
                                const domain = ["ONDC:TRV13"];
                                const version = ["2.0.0"];

                                const validate = validations.allIn(
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

- All elements of $.context.domain must be in ["ONDC:TRV13"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr all in enumList","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
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
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr all in enumList","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            VALID_CONTEXT_LOCATION_COUNTRY_CODE,
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
                            testName: "CONTEXT_ENUM",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr all in enumList","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_CATALOG_NAME(
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
                        const action = ["on_search"];
                        const domain = ["ONDC:TRV13"];
                        const version = ["2.0.0"];

                        const skipCheck = !validations.arePresent(attr);
                        if (skipCheck) continue;

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_CATALOG_NAME",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_CATALOG_NAME**

- $.message.catalog.descriptor.name must be present in the payload

> **Skip if:**
>
>     - $.message.catalog.descriptor.name is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CATALOG_NAME","attr":"$.message.catalog.descriptor.name","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_CATALOG_NAME",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_CATALOG_NAME","attr":"$.message.catalog.descriptor.name","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_CATALOG_CODE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.descriptor.code",
                        );
                        const action = ["on_search"];
                        const domain = ["ONDC:TRV13"];
                        const version = ["2.0.0"];

                        const skipCheck = !validations.arePresent(attr);
                        if (skipCheck) continue;

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_CATALOG_CODE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_CATALOG_CODE**

- $.message.catalog.descriptor.code must be present in the payload

> **Skip if:**
>
>     - $.message.catalog.descriptor.code is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CATALOG_CODE","attr":"$.message.catalog.descriptor.code","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_CATALOG_CODE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_CATALOG_CODE","attr":"$.message.catalog.descriptor.code","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    CONTEXT_REQUIRED,
                    CONTEXT_ENUM,
                    REQUIRED_CATALOG_NAME,
                    REQUIRED_CATALOG_CODE,
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
                    testName: "ON_SEARCH_CONTEXT",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SEARCH_CONTEXT","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr all in enumList","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]},{"_NAME_":"REQUIRED_CATALOG_NAME","attr":"$.message.catalog.descriptor.name","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CATALOG_CODE","attr":"$.message.catalog.descriptor.code","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function PROVIDERS_REQUIRED(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_search"];

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
                            "$.message.catalog.providers[*].id",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_PROVIDER_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_PROVIDER_ID**

- $.message.catalog.providers[*].id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.catalog.providers[*].id","_RETURN_":"attr are present","action":["on_search"]}
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
{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.catalog.providers[*].id","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_PROVIDER_NAME(
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
                        const action = ["on_search"];

                        const skipCheck = !validations.arePresent(attr);
                        if (skipCheck) continue;

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_PROVIDER_NAME",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_PROVIDER_NAME**

- $.message.catalog.providers[*].descriptor.name must be present in the payload

> **Skip if:**
>
>     - $.message.catalog.providers[*].descriptor.name is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PROVIDER_NAME","attr":"$.message.catalog.providers[*].descriptor.name","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_PROVIDER_NAME",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PROVIDER_NAME","attr":"$.message.catalog.providers[*].descriptor.name","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_PROVIDER_IMAGES(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].descriptor.images[*].url",
                        );
                        const reg = ["^https://.*"];
                        const action = ["on_search"];

                        const skipCheck = !validations.arePresent(attr);
                        if (skipCheck) continue;

                        const validate = validations.followRegex(attr, reg);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_PROVIDER_IMAGES",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_PROVIDER_IMAGES**

- All elements of $.message.catalog.providers[*].descriptor.images[*].url must follow every regex in ["^https://.*"]

> **Skip if:**
>
>     - $.message.catalog.providers[*].descriptor.images[*].url is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PROVIDER_IMAGES","attr":"$.message.catalog.providers[*].descriptor.images[*].url","reg":["^https://.*"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex reg","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_PROVIDER_IMAGES",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PROVIDER_IMAGES","attr":"$.message.catalog.providers[*].descriptor.images[*].url","reg":["^https://.*"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex reg","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_PROVIDER_LOCATIONS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].locations[*].id",
                        );
                        const action = ["on_search"];

                        const skipCheck = !validations.arePresent(attr);
                        if (skipCheck) continue;

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_PROVIDER_LOCATIONS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_PROVIDER_LOCATIONS**

- $.message.catalog.providers[*].locations[*].id must be present in the payload

> **Skip if:**
>
>     - $.message.catalog.providers[*].locations[*].id is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PROVIDER_LOCATIONS","attr":"$.message.catalog.providers[*].locations[*].id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_PROVIDER_LOCATIONS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PROVIDER_LOCATIONS","attr":"$.message.catalog.providers[*].locations[*].id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_PROVIDER_ID,
                    REQUIRED_PROVIDER_NAME,
                    REQUIRED_PROVIDER_IMAGES,
                    REQUIRED_PROVIDER_LOCATIONS,
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
                    testName: "PROVIDERS_REQUIRED",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"PROVIDERS_REQUIRED","action":["on_search"],"_RETURN_":[{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.catalog.providers[*].id","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_PROVIDER_NAME","attr":"$.message.catalog.providers[*].descriptor.name","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_PROVIDER_IMAGES","attr":"$.message.catalog.providers[*].descriptor.images[*].url","reg":["^https://.*"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex reg","action":["on_search"]},{"_NAME_":"REQUIRED_PROVIDER_LOCATIONS","attr":"$.message.catalog.providers[*].locations[*].id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["on_search"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function PROVIDER_PAYMENTS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_search"];

                function VALID_PAYMENT_TYPES(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const enumPath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].payments[*].type",
                        );
                        const enumList = [
                            "PRE-ORDER",
                            "ON-FULFILLMENT",
                            "PART-PAYMENT",
                        ];
                        const action = ["on_search"];

                        const skipCheck = !validations.arePresent(enumPath);
                        if (skipCheck) continue;

                        const validate = validations.allIn(enumPath, enumList);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "VALID_PAYMENT_TYPES",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **VALID_PAYMENT_TYPES**

- All elements of $.message.catalog.providers[*].payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "PART-PAYMENT"]

> **Skip if:**
>
>     - $.message.catalog.providers[*].payments[*].type is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_PAYMENT_TYPES","enumPath":"$.message.catalog.providers[*].payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_CONTINUE_":"!(enumPath are present)","_RETURN_":"enumPath all in enumList","action":["on_search"]}
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
{"_NAME_":"VALID_PAYMENT_TYPES","enumPath":"$.message.catalog.providers[*].payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_CONTINUE_":"!(enumPath are present)","_RETURN_":"enumPath all in enumList","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [VALID_PAYMENT_TYPES];

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
                    testName: "PROVIDER_PAYMENTS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"PROVIDER_PAYMENTS","action":["on_search"],"_RETURN_":[{"_NAME_":"VALID_PAYMENT_TYPES","enumPath":"$.message.catalog.providers[*].payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_CONTINUE_":"!(enumPath are present)","_RETURN_":"enumPath all in enumList","action":["on_search"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function PROVIDER_ITEMS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_search"];

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
                            "$.message.catalog.providers[*].items[*].id",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_ID**

- $.message.catalog.providers[*].items[*].id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_ID","attr":"$.message.catalog.providers[*].items[*].id","_RETURN_":"attr are present","action":["on_search"]}
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
{"_NAME_":"REQUIRED_ITEM_ID","attr":"$.message.catalog.providers[*].items[*].id","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_LABEL(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].time.label",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_LABEL",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_LABEL**

- $.message.catalog.providers[*].items[*].time.label must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_LABEL","attr":"$.message.catalog.providers[*].items[*].time.label","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_LABEL",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_LABEL","attr":"$.message.catalog.providers[*].items[*].time.label","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_TIMESTAMPS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].time.timestamp",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_TIMESTAMPS",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_TIMESTAMPS**

- $.message.catalog.providers[*].items[*].time.timestamp must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_TIMESTAMPS","attr":"$.message.catalog.providers[*].items[*].time.timestamp","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_TIMESTAMPS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_TIMESTAMPS","attr":"$.message.catalog.providers[*].items[*].time.timestamp","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_NAME(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].descriptor.name",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_NAME",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_NAME**

- $.message.catalog.providers[*].items[*].descriptor.name must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_NAME","attr":"$.message.catalog.providers[*].items[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_NAME",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_NAME","attr":"$.message.catalog.providers[*].items[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_CODE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].descriptor.code",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_CODE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_CODE**

- $.message.catalog.providers[*].items[*].descriptor.code must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_CODE","attr":"$.message.catalog.providers[*].items[*].descriptor.code","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_CODE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_CODE","attr":"$.message.catalog.providers[*].items[*].descriptor.code","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_IMAGES(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].descriptor.images[*].url",
                        );
                        const reg = ["^https://.*"];
                        const action = ["on_search"];

                        const skipCheck = !validations.arePresent(attr);
                        if (skipCheck) continue;

                        const validate = validations.followRegex(attr, reg);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_IMAGES",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_IMAGES**

- All elements of $.message.catalog.providers[*].items[*].descriptor.images[*].url must follow every regex in ["^https://.*"]

> **Skip if:**
>
>     - $.message.catalog.providers[*].items[*].descriptor.images[*].url is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_IMAGES","attr":"$.message.catalog.providers[*].items[*].descriptor.images[*].url","reg":["^https://.*"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex reg","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_IMAGES",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_IMAGES","attr":"$.message.catalog.providers[*].items[*].descriptor.images[*].url","reg":["^https://.*"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex reg","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_PRICE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].price.value",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_PRICE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_PRICE**

- $.message.catalog.providers[*].items[*].price.value must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_PRICE","attr":"$.message.catalog.providers[*].items[*].price.value","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_PRICE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_PRICE","attr":"$.message.catalog.providers[*].items[*].price.value","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_PRICE_CURRENCY(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].price.currency",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_PRICE_CURRENCY",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_PRICE_CURRENCY**

- $.message.catalog.providers[*].items[*].price.currency must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_PRICE_CURRENCY","attr":"$.message.catalog.providers[*].items[*].price.currency","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_PRICE_CURRENCY",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_PRICE_CURRENCY","attr":"$.message.catalog.providers[*].items[*].price.currency","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_PRICE_MAX_VALUE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].price.maximum_value",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_PRICE_MAX_VALUE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_PRICE_MAX_VALUE**

- $.message.catalog.providers[*].items[*].price.maximum_value must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_PRICE_MAX_VALUE","attr":"$.message.catalog.providers[*].items[*].price.maximum_value","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_PRICE_MAX_VALUE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_PRICE_MAX_VALUE","attr":"$.message.catalog.providers[*].items[*].price.maximum_value","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_QUANTITY_AVAILABLE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].quantity.available.count",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_ITEM_QUANTITY_AVAILABLE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_QUANTITY_AVAILABLE**

- $.message.catalog.providers[*].items[*].quantity.available.count must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_QUANTITY_AVAILABLE","attr":"$.message.catalog.providers[*].items[*].quantity.available.count","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_QUANTITY_AVAILABLE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_QUANTITY_AVAILABLE","attr":"$.message.catalog.providers[*].items[*].quantity.available.count","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_QUANTITY_MAXIMUM_COUNT(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].quantity.maximum.count",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_ITEM_QUANTITY_MAXIMUM_COUNT",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_QUANTITY_MAXIMUM_COUNT**

- $.message.catalog.providers[*].items[*].quantity.maximum.count must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_QUANTITY_MAXIMUM_COUNT","attr":"$.message.catalog.providers[*].items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_QUANTITY_MAXIMUM_COUNT",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_QUANTITY_MAXIMUM_COUNT","attr":"$.message.catalog.providers[*].items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_LOCATION_LINK(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].location_ids[*]",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_LOCATION_LINK",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_LOCATION_LINK**

- $.message.catalog.providers[*].items[*].location_ids[*] must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_LOCATION_LINK","attr":"$.message.catalog.providers[*].items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_LOCATION_LINK",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_LOCATION_LINK","attr":"$.message.catalog.providers[*].items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_CATEGORY_LINK(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].category_ids[*]",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_CATEGORY_LINK",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_CATEGORY_LINK**

- $.message.catalog.providers[*].items[*].category_ids[*] must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_CATEGORY_LINK","attr":"$.message.catalog.providers[*].items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_CATEGORY_LINK",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_CATEGORY_LINK","attr":"$.message.catalog.providers[*].items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ITEM_PAYMENT_LINK(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].payment_ids[*]",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ITEM_PAYMENT_LINK",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ITEM_PAYMENT_LINK**

- $.message.catalog.providers[*].items[*].payment_ids[*] must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_PAYMENT_LINK","attr":"$.message.catalog.providers[*].items[*].payment_ids[*]","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEM_PAYMENT_LINK",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_PAYMENT_LINK","attr":"$.message.catalog.providers[*].items[*].payment_ids[*]","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_ITEM_ID,
                    REQUIRED_ITEM_LABEL,
                    REQUIRED_ITEM_TIMESTAMPS,
                    REQUIRED_ITEM_NAME,
                    REQUIRED_ITEM_CODE,
                    REQUIRED_ITEM_IMAGES,
                    REQUIRED_ITEM_PRICE,
                    REQUIRED_ITEM_PRICE_CURRENCY,
                    REQUIRED_ITEM_PRICE_MAX_VALUE,
                    REQUIRED_ITEM_QUANTITY_AVAILABLE,
                    REQUIRED_ITEM_QUANTITY_MAXIMUM_COUNT,
                    REQUIRED_ITEM_LOCATION_LINK,
                    REQUIRED_ITEM_CATEGORY_LINK,
                    REQUIRED_ITEM_PAYMENT_LINK,
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
                    testName: "PROVIDER_ITEMS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"PROVIDER_ITEMS","action":["on_search"],"_RETURN_":[{"_NAME_":"REQUIRED_ITEM_ID","attr":"$.message.catalog.providers[*].items[*].id","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_LABEL","attr":"$.message.catalog.providers[*].items[*].time.label","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_TIMESTAMPS","attr":"$.message.catalog.providers[*].items[*].time.timestamp","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_NAME","attr":"$.message.catalog.providers[*].items[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_CODE","attr":"$.message.catalog.providers[*].items[*].descriptor.code","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_IMAGES","attr":"$.message.catalog.providers[*].items[*].descriptor.images[*].url","reg":["^https://.*"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex reg","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_PRICE","attr":"$.message.catalog.providers[*].items[*].price.value","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_PRICE_CURRENCY","attr":"$.message.catalog.providers[*].items[*].price.currency","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_PRICE_MAX_VALUE","attr":"$.message.catalog.providers[*].items[*].price.maximum_value","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_QUANTITY_AVAILABLE","attr":"$.message.catalog.providers[*].items[*].quantity.available.count","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_QUANTITY_MAXIMUM_COUNT","attr":"$.message.catalog.providers[*].items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_LOCATION_LINK","attr":"$.message.catalog.providers[*].items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_CATEGORY_LINK","attr":"$.message.catalog.providers[*].items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_PAYMENT_LINK","attr":"$.message.catalog.providers[*].items[*].payment_ids[*]","_RETURN_":"attr are present","action":["on_search"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ITEM_ADDONS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_search"];

                function REQUIRED_ADDON_ID(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].add_ons[*].id",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ADDON_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ADDON_ID**

- $.message.catalog.providers[*].items[*].add_ons[*].id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ADDON_ID","attr":"$.message.catalog.providers[*].items[*].add_ons[*].id","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ADDON_ID",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ADDON_ID","attr":"$.message.catalog.providers[*].items[*].add_ons[*].id","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ADDON_NAME(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].add_ons[*].descriptor.name",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ADDON_NAME",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ADDON_NAME**

- $.message.catalog.providers[*].items[*].add_ons[*].descriptor.name must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ADDON_NAME","attr":"$.message.catalog.providers[*].items[*].add_ons[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ADDON_NAME",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ADDON_NAME","attr":"$.message.catalog.providers[*].items[*].add_ons[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ADDON_PRICE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].add_ons[*].price.value",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ADDON_PRICE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ADDON_PRICE**

- $.message.catalog.providers[*].items[*].add_ons[*].price.value must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ADDON_PRICE","attr":"$.message.catalog.providers[*].items[*].add_ons[*].price.value","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ADDON_PRICE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ADDON_PRICE","attr":"$.message.catalog.providers[*].items[*].add_ons[*].price.value","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ADDON_PRICE_CURRENCY(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].add_ons[*].price.currency",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ADDON_PRICE_CURRENCY",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ADDON_PRICE_CURRENCY**

- $.message.catalog.providers[*].items[*].add_ons[*].price.currency must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ADDON_PRICE_CURRENCY","attr":"$.message.catalog.providers[*].items[*].add_ons[*].price.currency","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ADDON_PRICE_CURRENCY",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ADDON_PRICE_CURRENCY","attr":"$.message.catalog.providers[*].items[*].add_ons[*].price.currency","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ADDON_PRICE_MAXIMUM_VALUE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].add_ons[*].price.maximum_value",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_ADDON_PRICE_MAXIMUM_VALUE",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_ADDON_PRICE_MAXIMUM_VALUE**

- $.message.catalog.providers[*].items[*].add_ons[*].price.maximum_value must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ADDON_PRICE_MAXIMUM_VALUE","attr":"$.message.catalog.providers[*].items[*].add_ons[*].price.maximum_value","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ADDON_PRICE_MAXIMUM_VALUE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ADDON_PRICE_MAXIMUM_VALUE","attr":"$.message.catalog.providers[*].items[*].add_ons[*].price.maximum_value","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_CANCELLATION_TERMS_URL(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].cancellation_terms[*].external_ref.url",
                        );
                        const reg = ["^https://.*"];
                        const action = ["on_search"];

                        const skipCheck = !validations.arePresent(attr);
                        if (skipCheck) continue;

                        const validate = validations.followRegex(attr, reg);

                        if (!validate) {
                            // delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_CANCELLATION_TERMS_URL",
                                    valid: false,
                                    code: 30000,
                                    description: `#### **REQUIRED_CANCELLATION_TERMS_URL**

- All elements of $.message.catalog.providers[*].items[*].cancellation_terms[*].external_ref.url must follow every regex in ["^https://.*"]

> **Skip if:**
>
>     - $.message.catalog.providers[*].items[*].cancellation_terms[*].external_ref.url is not in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_URL","attr":"$.message.catalog.providers[*].items[*].cancellation_terms[*].external_ref.url","reg":["^https://.*"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex reg","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        // delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_CANCELLATION_TERMS_URL",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_URL","attr":"$.message.catalog.providers[*].items[*].cancellation_terms[*].external_ref.url","reg":["^https://.*"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex reg","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_ADDON_ID,
                    REQUIRED_ADDON_NAME,
                    REQUIRED_ADDON_PRICE,
                    REQUIRED_ADDON_PRICE_CURRENCY,
                    REQUIRED_ADDON_PRICE_MAXIMUM_VALUE,
                    REQUIRED_CANCELLATION_TERMS_URL,
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
                    testName: "ITEM_ADDONS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ITEM_ADDONS","action":["on_search"],"_RETURN_":[{"_NAME_":"REQUIRED_ADDON_ID","attr":"$.message.catalog.providers[*].items[*].add_ons[*].id","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ADDON_NAME","attr":"$.message.catalog.providers[*].items[*].add_ons[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ADDON_PRICE","attr":"$.message.catalog.providers[*].items[*].add_ons[*].price.value","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ADDON_PRICE_CURRENCY","attr":"$.message.catalog.providers[*].items[*].add_ons[*].price.currency","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ADDON_PRICE_MAXIMUM_VALUE","attr":"$.message.catalog.providers[*].items[*].add_ons[*].price.maximum_value","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_CANCELLATION_TERMS_URL","attr":"$.message.catalog.providers[*].items[*].cancellation_terms[*].external_ref.url","reg":["^https://.*"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex reg","action":["on_search"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            ON_SEARCH_CONTEXT,
            PROVIDERS_REQUIRED,
            PROVIDER_PAYMENTS,
            PROVIDER_ITEMS,
            ITEM_ADDONS,
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
            testName: "on_searchValidations",
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"on_searchValidations","_RETURN_":[{"_NAME_":"ON_SEARCH_CONTEXT","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV13"],"_RETURN_":"attr all in enumList","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]},{"_NAME_":"REQUIRED_CATALOG_NAME","attr":"$.message.catalog.descriptor.name","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CATALOG_CODE","attr":"$.message.catalog.descriptor.code","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV13"],"version":["2.0.0"]}]},{"_NAME_":"PROVIDERS_REQUIRED","action":["on_search"],"_RETURN_":[{"_NAME_":"REQUIRED_PROVIDER_ID","attr":"$.message.catalog.providers[*].id","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_PROVIDER_NAME","attr":"$.message.catalog.providers[*].descriptor.name","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_PROVIDER_IMAGES","attr":"$.message.catalog.providers[*].descriptor.images[*].url","reg":["^https://.*"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex reg","action":["on_search"]},{"_NAME_":"REQUIRED_PROVIDER_LOCATIONS","attr":"$.message.catalog.providers[*].locations[*].id","_CONTINUE_":"!(attr are present)","_RETURN_":"attr are present","action":["on_search"]}]},{"_NAME_":"PROVIDER_PAYMENTS","action":["on_search"],"_RETURN_":[{"_NAME_":"VALID_PAYMENT_TYPES","enumPath":"$.message.catalog.providers[*].payments[*].type","enumList":["PRE-ORDER","ON-FULFILLMENT","PART-PAYMENT"],"_CONTINUE_":"!(enumPath are present)","_RETURN_":"enumPath all in enumList","action":["on_search"]}]},{"_NAME_":"PROVIDER_ITEMS","action":["on_search"],"_RETURN_":[{"_NAME_":"REQUIRED_ITEM_ID","attr":"$.message.catalog.providers[*].items[*].id","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_LABEL","attr":"$.message.catalog.providers[*].items[*].time.label","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_TIMESTAMPS","attr":"$.message.catalog.providers[*].items[*].time.timestamp","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_NAME","attr":"$.message.catalog.providers[*].items[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_CODE","attr":"$.message.catalog.providers[*].items[*].descriptor.code","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_IMAGES","attr":"$.message.catalog.providers[*].items[*].descriptor.images[*].url","reg":["^https://.*"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex reg","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_PRICE","attr":"$.message.catalog.providers[*].items[*].price.value","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_PRICE_CURRENCY","attr":"$.message.catalog.providers[*].items[*].price.currency","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_PRICE_MAX_VALUE","attr":"$.message.catalog.providers[*].items[*].price.maximum_value","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_QUANTITY_AVAILABLE","attr":"$.message.catalog.providers[*].items[*].quantity.available.count","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_QUANTITY_MAXIMUM_COUNT","attr":"$.message.catalog.providers[*].items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_LOCATION_LINK","attr":"$.message.catalog.providers[*].items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_CATEGORY_LINK","attr":"$.message.catalog.providers[*].items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ITEM_PAYMENT_LINK","attr":"$.message.catalog.providers[*].items[*].payment_ids[*]","_RETURN_":"attr are present","action":["on_search"]}]},{"_NAME_":"ITEM_ADDONS","action":["on_search"],"_RETURN_":[{"_NAME_":"REQUIRED_ADDON_ID","attr":"$.message.catalog.providers[*].items[*].add_ons[*].id","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ADDON_NAME","attr":"$.message.catalog.providers[*].items[*].add_ons[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ADDON_PRICE","attr":"$.message.catalog.providers[*].items[*].add_ons[*].price.value","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ADDON_PRICE_CURRENCY","attr":"$.message.catalog.providers[*].items[*].add_ons[*].price.currency","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_ADDON_PRICE_MAXIMUM_VALUE","attr":"$.message.catalog.providers[*].items[*].add_ons[*].price.maximum_value","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_CANCELLATION_TERMS_URL","attr":"$.message.catalog.providers[*].items[*].cancellation_terms[*].external_ref.url","reg":["^https://.*"],"_CONTINUE_":"!(attr are present)","_RETURN_":"attr follow regex reg","action":["on_search"]}]}]}
`,
            },
        },
        ...subResults,
    ];
}
