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
                (r) => r.testName === "on_search_validations",
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
                const domain = ["ONDC:TRV14"];
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
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE**: $.context.location.country.code must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_LOCATION_CITY_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CONTEXT_LOCATION_CITY_CODE**: $.context.location.city.code must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_CONTEXT_LOCATION_CITY_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_CONTEXT_DOMAIN",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CONTEXT_DOMAIN**: $.context.domain must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_DOMAIN",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_TIMESTAMP",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_TIMESTAMP",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_CONTEXT_BAP_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_BAP_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_BAP_URI",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_BAP_URI",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const var_search = ["search"];
                                const action = ["on_search"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

                                const skipCheck = validations.equalTo(
                                    action,
                                    var_search,
                                );
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_CONTEXT_BPP_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_BPP_ID** can be skipped if the following conditions are met:
	>
	> - **condition B**: ["on_search"] must be equal to ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_BPP_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const var_search = ["search"];
                                const action = ["on_search"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

                                const skipCheck = validations.equalTo(
                                    action,
                                    var_search,
                                );
                                if (skipCheck) continue;

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_BPP_URI",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload

	> Note: **Condition REQUIRED_CONTEXT_BPP_URI** can be skipped if the following conditions are met:
	>
	> - **condition B**: ["on_search"] must be equal to ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_BPP_URI",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_TRANSACTION_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_TRANSACTION_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_MESSAGE_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_MESSAGE_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CONTEXT_VERSION",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CONTEXT_VERSION**: $.context.version must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_VERSION",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_CONTEXT_TTL",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_TTL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "CONTEXT_REQUIRED",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}
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
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

                                const validate = validations.anyIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "VALID_CONTEXT_LOCATION_COUNTRY_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition VALID_CONTEXT_LOCATION_COUNTRY_CODE**: at least one element of $.context.location.country.code must be in ["IND"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "VALID_CONTEXT_LOCATION_COUNTRY_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const enumList = ["ONDC:TRV14"];
                                const action = ["on_search"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

                                const validate = validations.allIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "VALID_CONTEXT_DOMAIN",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition VALID_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:TRV14"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "VALID_CONTEXT_DOMAIN",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "CONTEXT_ENUM",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function CONTEXT_REGEX(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REGEX_CONTEXT_LOCATION_CITY_CODE(
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
                                const reg = ["^std:\\d{3,5}$"];
                                const action = ["on_search"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REGEX_CONTEXT_LOCATION_CITY_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REGEX_CONTEXT_LOCATION_CITY_CODE**: all elements of $.context.location.city.code must follow every regex in ["^std:\\d{3,5}$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REGEX_CONTEXT_LOCATION_CITY_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["on_search"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REGEX_CONTEXT_TIMESTAMP",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REGEX_CONTEXT_TIMESTAMP**: all elements of $.context.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REGEX_CONTEXT_TIMESTAMP",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REGEX_CONTEXT_BAP_URI(
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
                                const reg = [
                                    "^https:\\/\\/[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+\\/[a-zA-Z0-9\\-\\/]*\\/?$",
                                ];
                                const action = ["on_search"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REGEX_CONTEXT_BAP_URI",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REGEX_CONTEXT_BAP_URI**: all elements of $.context.bap_uri must follow every regex in ["^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+\/[a-zA-Z0-9\-\/]*\/?$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+\\/[a-zA-Z0-9\\-\\/]*\\/?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REGEX_CONTEXT_BAP_URI",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+\\/[a-zA-Z0-9\\-\\/]*\\/?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const reg = [
                                    "^P(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$",
                                ];
                                const action = ["on_search"];
                                const domain = ["ONDC:TRV14"];
                                const version = ["2.0.0"];

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_CONTEXT_TTL",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CONTEXT_TTL**: all elements of $.context.ttl must follow every regex in ["^P(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_CONTEXT_TTL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REGEX_CONTEXT_LOCATION_CITY_CODE,
                            REGEX_CONTEXT_TIMESTAMP,
                            REGEX_CONTEXT_BAP_URI,
                            REQUIRED_CONTEXT_TTL,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "CONTEXT_REGEX",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"CONTEXT_REGEX","_RETURN_":[{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+\\/[a-zA-Z0-9\\-\\/]*\\/?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    CONTEXT_REQUIRED,
                    CONTEXT_ENUM,
                    CONTEXT_REGEX,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every((r) => r.valid);

                delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: "ON_SEARCH_CONTEXT",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SEARCH_CONTEXT","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_REGEX","_RETURN_":[{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+\\/[a-zA-Z0-9\\-\\/]*\\/?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_SEARCH_CATALOG(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_search"];

                function REQUIRED_MESSAGE_CATALOG_NAME(
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

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_MESSAGE_CATALOG_NAME",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_MESSAGE_CATALOG_NAME**: $.message.catalog.descriptor.name must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_CATALOG_NAME","attr":"$.message.catalog.descriptor.name","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_MESSAGE_CATALOG_NAME",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_CATALOG_NAME","attr":"$.message.catalog.descriptor.name","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_MESSAGE_CATALOG_NAME,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every((r) => r.valid);

                delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: "ON_SEARCH_CATALOG",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SEARCH_CATALOG","action":["on_search"],"_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_CATALOG_NAME","attr":"$.message.catalog.descriptor.name","_RETURN_":"attr are present","action":["on_search"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_SEARCH_PROVIDERS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_search"];

                function REQUIRED_MESSAGE_PROVIDERS_ID(
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
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_MESSAGE_PROVIDERS_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_MESSAGE_PROVIDERS_ID**: $.message.catalog.providers[*].id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ID","attr":"$.message.catalog.providers[*].id","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_MESSAGE_PROVIDERS_ID",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ID","attr":"$.message.catalog.providers[*].id","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_MESSAGE_PROVIDERS_DESCRIPTOR(
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

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_DESCRIPTOR",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_MESSAGE_PROVIDERS_DESCRIPTOR**: $.message.catalog.providers[*].descriptor.name must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_DESCRIPTOR","attr":"$.message.catalog.providers[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_MESSAGE_PROVIDERS_DESCRIPTOR",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_DESCRIPTOR","attr":"$.message.catalog.providers[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_MESSAGE_PROVIDERS_CATRGORY_ID(
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
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_CATRGORY_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_MESSAGE_PROVIDERS_CATRGORY_ID**: $.message.catalog.providers[*].categories[*].id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_CATRGORY_ID","attr":"$.message.catalog.providers[*].categories[*].id","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_MESSAGE_PROVIDERS_CATRGORY_ID",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_CATRGORY_ID","attr":"$.message.catalog.providers[*].categories[*].id","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_MESSAGE_PROVIDERS_CATRGORY(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].categories[*].descriptor.name",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_CATRGORY",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_MESSAGE_PROVIDERS_CATRGORY**: $.message.catalog.providers[*].categories[*].descriptor.name must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_CATRGORY","attr":"$.message.catalog.providers[*].categories[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_MESSAGE_PROVIDERS_CATRGORY",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_CATRGORY","attr":"$.message.catalog.providers[*].categories[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_MESSAGE_PROVIDERS_CATRGORY_CODE(
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
                        const useCasePath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].categories[*].parent_category_id",
                        );
                        const action = ["on_search"];

                        const skipCheck = validations.arePresent(useCasePath);
                        if (skipCheck) continue;

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_CATRGORY_CODE",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_MESSAGE_PROVIDERS_CATRGORY_CODE**: $.message.catalog.providers[*].categories[*].descriptor.code must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_PROVIDERS_CATRGORY_CODE** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.catalog.providers[*].categories[*].parent_category_id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_CATRGORY_CODE","attr":"$.message.catalog.providers[*].categories[*].descriptor.code","useCasePath":"$.message.catalog.providers[*].categories[*].parent_category_id","_CONTINUE_":"(useCasePath are present)","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName:
                                "REQUIRED_MESSAGE_PROVIDERS_CATRGORY_CODE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_CATRGORY_CODE","attr":"$.message.catalog.providers[*].categories[*].descriptor.code","useCasePath":"$.message.catalog.providers[*].categories[*].parent_category_id","_CONTINUE_":"(useCasePath are present)","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ENUM_MESSAGE_PROVIDERS_CATRGORY_CODE(
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
                        const enumList = ["CULTURE_HERITAGE"];
                        const useCasePath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].categories[*].parent_category_id",
                        );
                        const action = ["on_search"];

                        const skipCheck = validations.arePresent(useCasePath);
                        if (skipCheck) continue;

                        const validate = validations.allIn(attr, enumList);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "ENUM_MESSAGE_PROVIDERS_CATRGORY_CODE",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition ENUM_MESSAGE_PROVIDERS_CATRGORY_CODE**: every element of $.message.catalog.providers[*].categories[*].descriptor.code must be in ["CULTURE_HERITAGE"]

	> Note: **Condition ENUM_MESSAGE_PROVIDERS_CATRGORY_CODE** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.catalog.providers[*].categories[*].parent_category_id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ENUM_MESSAGE_PROVIDERS_CATRGORY_CODE","attr":"$.message.catalog.providers[*].categories[*].descriptor.code","enumList":["CULTURE_HERITAGE"],"useCasePath":"$.message.catalog.providers[*].categories[*].parent_category_id","_CONTINUE_":"(useCasePath are present)","_RETURN_":"attr all in enumList","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "ENUM_MESSAGE_PROVIDERS_CATRGORY_CODE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ENUM_MESSAGE_PROVIDERS_CATRGORY_CODE","attr":"$.message.catalog.providers[*].categories[*].descriptor.code","enumList":["CULTURE_HERITAGE"],"useCasePath":"$.message.catalog.providers[*].categories[*].parent_category_id","_CONTINUE_":"(useCasePath are present)","_RETURN_":"attr all in enumList","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function CHECK_CATEGORY_ID_PARENT_ID(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].categories[*].parent_category_id",
                        );
                        const useCasePath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].categories[*].descriptor.code",
                        );
                        const var_category_id = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].categories[*].id",
                        );
                        const action = ["on_search"];

                        const skipCheck = !(
                            validations.arePresent(useCasePath) &&
                            validations.equalTo(var_category_id, attr)
                        );
                        if (skipCheck) continue;

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "CHECK_CATEGORY_ID_PARENT_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition CHECK_CATEGORY_ID_PARENT_ID**: $.message.catalog.providers[*].categories[*].parent_category_id must be present in the payload

	> Note: **Condition CHECK_CATEGORY_ID_PARENT_ID** can be skipped if the following conditions are met:
	>
	> - **condition B**: all of the following sub conditions must**not** be met:
	>
	>   - **condition B.1**: $.message.catalog.providers[*].categories[*].descriptor.code must **not** be present in the payload
	>   - **condition B.2**: $.message.catalog.providers[*].categories[*].id must **not** be equal to $.message.catalog.providers[*].categories[*].parent_category_id`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"CHECK_CATEGORY_ID_PARENT_ID","attr":"$.message.catalog.providers[*].categories[*].parent_category_id","useCasePath":"$.message.catalog.providers[*].categories[*].descriptor.code","var_category_id":"$.message.catalog.providers[*].categories[*].id","_CONTINUE_":"!(useCasePath are present && var_category_id equal to attr)","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "CHECK_CATEGORY_ID_PARENT_ID",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"CHECK_CATEGORY_ID_PARENT_ID","attr":"$.message.catalog.providers[*].categories[*].parent_category_id","useCasePath":"$.message.catalog.providers[*].categories[*].descriptor.code","var_category_id":"$.message.catalog.providers[*].categories[*].id","_CONTINUE_":"!(useCasePath are present && var_category_id equal to attr)","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_MESSAGE_PROVIDERS_START_RANGE(
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
                        const reg = [
                            "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$",
                        ];
                        const action = ["on_search"];

                        const validate =
                            validations.arePresent(attr) &&
                            validations.followRegex(attr, reg);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_START_RANGE",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_MESSAGE_PROVIDERS_START_RANGE**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_PROVIDERS_START_RANGE.1**: $.message.catalog.providers[*].time.range.start must be present in the payload
  - **condition REQUIRED_MESSAGE_PROVIDERS_START_RANGE.2**: all elements of $.message.catalog.providers[*].time.range.start must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_START_RANGE","attr":"$.message.catalog.providers[*].time.range.start","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex reg","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_MESSAGE_PROVIDERS_START_RANGE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_START_RANGE","attr":"$.message.catalog.providers[*].time.range.start","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex reg","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_MESSAGE_PROVIDERS_END_RANGE(
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
                        const reg = [
                            "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$",
                        ];
                        const action = ["on_search"];

                        const validate =
                            validations.arePresent(attr) &&
                            validations.followRegex(attr, reg);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_END_RANGE",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_MESSAGE_PROVIDERS_END_RANGE**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_PROVIDERS_END_RANGE.1**: $.message.catalog.providers[*].time.range.end must be present in the payload
  - **condition REQUIRED_MESSAGE_PROVIDERS_END_RANGE.2**: all elements of $.message.catalog.providers[*].time.range.end must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_END_RANGE","attr":"$.message.catalog.providers[*].time.range.end","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex reg","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_MESSAGE_PROVIDERS_END_RANGE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_END_RANGE","attr":"$.message.catalog.providers[*].time.range.end","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex reg","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID(
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

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID**: $.message.catalog.providers[*].locations[*].id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID","attr":"$.message.catalog.providers[*].locations[*].id","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID","attr":"$.message.catalog.providers[*].locations[*].id","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].locations[*].descriptor.name",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME**: $.message.catalog.providers[*].locations[*].descriptor.name must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME","attr":"$.message.catalog.providers[*].locations[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName:
                                "REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME","attr":"$.message.catalog.providers[*].locations[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].locations[*].descriptor.short_desc",
                        );
                        const action = ["on_search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC**: $.message.catalog.providers[*].locations[*].descriptor.short_desc must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC","attr":"$.message.catalog.providers[*].locations[*].descriptor.short_desc","_RETURN_":"attr are present","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName:
                                "REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC","attr":"$.message.catalog.providers[*].locations[*].descriptor.short_desc","_RETURN_":"attr are present","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_MESSAGE_PROVIDERS_ID,
                    REQUIRED_MESSAGE_PROVIDERS_DESCRIPTOR,
                    REQUIRED_MESSAGE_PROVIDERS_CATRGORY_ID,
                    REQUIRED_MESSAGE_PROVIDERS_CATRGORY,
                    REQUIRED_MESSAGE_PROVIDERS_CATRGORY_CODE,
                    ENUM_MESSAGE_PROVIDERS_CATRGORY_CODE,
                    CHECK_CATEGORY_ID_PARENT_ID,
                    REQUIRED_MESSAGE_PROVIDERS_START_RANGE,
                    REQUIRED_MESSAGE_PROVIDERS_END_RANGE,
                    REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID,
                    REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME,
                    REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every((r) => r.valid);

                delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: "ON_SEARCH_PROVIDERS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SEARCH_PROVIDERS","action":["on_search"],"_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ID","attr":"$.message.catalog.providers[*].id","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_DESCRIPTOR","attr":"$.message.catalog.providers[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_CATRGORY_ID","attr":"$.message.catalog.providers[*].categories[*].id","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_CATRGORY","attr":"$.message.catalog.providers[*].categories[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_CATRGORY_CODE","attr":"$.message.catalog.providers[*].categories[*].descriptor.code","useCasePath":"$.message.catalog.providers[*].categories[*].parent_category_id","_CONTINUE_":"(useCasePath are present)","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"ENUM_MESSAGE_PROVIDERS_CATRGORY_CODE","attr":"$.message.catalog.providers[*].categories[*].descriptor.code","enumList":["CULTURE_HERITAGE"],"useCasePath":"$.message.catalog.providers[*].categories[*].parent_category_id","_CONTINUE_":"(useCasePath are present)","_RETURN_":"attr all in enumList","action":["on_search"]},{"_NAME_":"CHECK_CATEGORY_ID_PARENT_ID","attr":"$.message.catalog.providers[*].categories[*].parent_category_id","useCasePath":"$.message.catalog.providers[*].categories[*].descriptor.code","var_category_id":"$.message.catalog.providers[*].categories[*].id","_CONTINUE_":"!(useCasePath are present && var_category_id equal to attr)","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_START_RANGE","attr":"$.message.catalog.providers[*].time.range.start","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex reg","action":["on_search"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_END_RANGE","attr":"$.message.catalog.providers[*].time.range.end","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex reg","action":["on_search"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID","attr":"$.message.catalog.providers[*].locations[*].id","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME","attr":"$.message.catalog.providers[*].locations[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC","attr":"$.message.catalog.providers[*].locations[*].descriptor.short_desc","_RETURN_":"attr are present","action":["on_search"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_SEARCH_ITEMS_PAGE_1(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.catalog.tags[?(@.descriptor.code=='PAGINATION')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_search"];
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].descriptor.code",
                );
                const var_page = ["CURRENT_PAGE_NUMBER"];

                const skipCheck = !validations.allIn(var_page, subTags);
                if (skipCheck) continue;

                function REQUIRED_ITEMS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_MESSAGE_PROVIDERS_ITEMS_ID(
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
                                    "$.message.catalog.providers[*].items[*].id",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_ITEMS_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_ID**: $.message.catalog.providers[*].items[*].id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_ID","attr":"$.message.catalog.providers[*].items[*].id","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_ITEMS_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_ID","attr":"$.message.catalog.providers[*].items[*].id","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_PROVIDERS_ITEMS_NAME(
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
                                    "$.message.catalog.providers[*].items[*].descriptor.name",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_ITEMS_NAME",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_NAME**: $.message.catalog.providers[*].items[*].descriptor.name must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_NAME","attr":"$.message.catalog.providers[*].items[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_ITEMS_NAME",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_NAME","attr":"$.message.catalog.providers[*].items[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_PROVIDERS_ITEMS_CODE(
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
                                    "$.message.catalog.providers[*].items[*].descriptor.code",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_ITEMS_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_CODE**: $.message.catalog.providers[*].items[*].descriptor.code must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CODE","attr":"$.message.catalog.providers[*].items[*].descriptor.code","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_ITEMS_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CODE","attr":"$.message.catalog.providers[*].items[*].descriptor.code","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_PROVIDERS_ITEMS_LOCATIONS(
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
                                    "$.message.catalog.providers[*].items[*].location_ids[*]",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_ITEMS_LOCATIONS",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_LOCATIONS**: $.message.catalog.providers[*].items[*].location_ids[*] must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_LOCATIONS","attr":"$.message.catalog.providers[*].items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_ITEMS_LOCATIONS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_LOCATIONS","attr":"$.message.catalog.providers[*].items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function VALID_MESSAGE_PROVIDERS_ITEMS_LOCATIONS_1(
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
                                    "$.message.catalog.providers[*].items[*].location_ids[*]",
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.catalog.providers[*].locations[*].id",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];

                                const validate = validations.allIn(
                                    attr,
                                    usecasepath,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "VALID_MESSAGE_PROVIDERS_ITEMS_LOCATIONS_1",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition VALID_MESSAGE_PROVIDERS_ITEMS_LOCATIONS_1**: every element of $.message.catalog.providers[*].items[*].location_ids[*] must be in $.message.catalog.providers[*].locations[*].id`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"VALID_MESSAGE_PROVIDERS_ITEMS_LOCATIONS_1","attr":"$.message.catalog.providers[*].items[*].location_ids[*]","usecasepath":"$.message.catalog.providers[*].locations[*].id","_RETURN_":"attr all in usecasepath","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "VALID_MESSAGE_PROVIDERS_ITEMS_LOCATIONS_1",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_MESSAGE_PROVIDERS_ITEMS_LOCATIONS_1","attr":"$.message.catalog.providers[*].items[*].location_ids[*]","usecasepath":"$.message.catalog.providers[*].locations[*].id","_RETURN_":"attr all in usecasepath","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES(
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
                                    "$.message.catalog.providers[*].items[*].category_ids[*]",
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.catalog.providers[*].categories[*].id",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];

                                const validate = validations.allIn(
                                    attr,
                                    usecasepath,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES**: every element of $.message.catalog.providers[*].items[*].category_ids[*] must be in $.message.catalog.providers[*].categories[*].id`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES","attr":"$.message.catalog.providers[*].items[*].category_ids[*]","usecasepath":"$.message.catalog.providers[*].categories[*].id","_RETURN_":"attr all in usecasepath","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES","attr":"$.message.catalog.providers[*].items[*].category_ids[*]","usecasepath":"$.message.catalog.providers[*].categories[*].id","_RETURN_":"attr all in usecasepath","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_1(
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
                                    "$.message.catalog.providers[*].items[*].category_ids[*]",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_1",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_1**: $.message.catalog.providers[*].items[*].category_ids[*] must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_1","attr":"$.message.catalog.providers[*].items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_1",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_1","attr":"$.message.catalog.providers[*].items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS(
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
                                    "$.message.catalog.providers[*].items[*].fulfillment_ids[*]",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS**: $.message.catalog.providers[*].items[*].fulfillment_ids[*] must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS","attr":"$.message.catalog.providers[*].items[*].fulfillment_ids[*]","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS","attr":"$.message.catalog.providers[*].items[*].fulfillment_ids[*]","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_2(
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
                                    "$.message.catalog.providers[*].items[*].fulfillment_ids[*]",
                                );
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.catalog.providers[*].fulfillments[*].id",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];

                                const validate = validations.allIn(
                                    attr,
                                    usecasepath,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_2",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_2**: every element of $.message.catalog.providers[*].items[*].fulfillment_ids[*] must be in $.message.catalog.providers[*].fulfillments[*].id`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_2","attr":"$.message.catalog.providers[*].items[*].fulfillment_ids[*]","usecasepath":"$.message.catalog.providers[*].fulfillments[*].id","_RETURN_":"attr all in usecasepath","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_2",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_2","attr":"$.message.catalog.providers[*].items[*].fulfillment_ids[*]","usecasepath":"$.message.catalog.providers[*].fulfillments[*].id","_RETURN_":"attr all in usecasepath","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL(
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
                                    "$.message.catalog.providers[*].items[*].descriptor.images[*].url",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL**: $.message.catalog.providers[*].items[*].descriptor.images[*].url must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.catalog.providers[*].items[*].descriptor.images[*].url","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.catalog.providers[*].items[*].descriptor.images[*].url","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_MESSAGE_PROVIDERS_ITEMS_ID,
                            REQUIRED_MESSAGE_PROVIDERS_ITEMS_NAME,
                            REQUIRED_MESSAGE_PROVIDERS_ITEMS_CODE,
                            REQUIRED_MESSAGE_PROVIDERS_ITEMS_LOCATIONS,
                            VALID_MESSAGE_PROVIDERS_ITEMS_LOCATIONS_1,
                            VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES,
                            REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_1,
                            REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS,
                            VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_2,
                            REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ITEMS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ITEMS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_ID","attr":"$.message.catalog.providers[*].items[*].id","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_NAME","attr":"$.message.catalog.providers[*].items[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CODE","attr":"$.message.catalog.providers[*].items[*].descriptor.code","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_LOCATIONS","attr":"$.message.catalog.providers[*].items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"VALID_MESSAGE_PROVIDERS_ITEMS_LOCATIONS_1","attr":"$.message.catalog.providers[*].items[*].location_ids[*]","usecasepath":"$.message.catalog.providers[*].locations[*].id","_RETURN_":"attr all in usecasepath","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES","attr":"$.message.catalog.providers[*].items[*].category_ids[*]","usecasepath":"$.message.catalog.providers[*].categories[*].id","_RETURN_":"attr all in usecasepath","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_1","attr":"$.message.catalog.providers[*].items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS","attr":"$.message.catalog.providers[*].items[*].fulfillment_ids[*]","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_2","attr":"$.message.catalog.providers[*].items[*].fulfillment_ids[*]","usecasepath":"$.message.catalog.providers[*].fulfillments[*].id","_RETURN_":"attr all in usecasepath","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.catalog.providers[*].items[*].descriptor.images[*].url","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ENUM_ITEMS(input: validationInput): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function ENUM_MESSAGE_PROVIDERS_ITEMS_CODE(
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
                                    "$.message.catalog.providers[*].items[*].descriptor.code",
                                );
                                const enumList = [
                                    "ABSTRACT",
                                    "ENTRY_PASS",
                                    "ADD_ON",
                                ];
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];

                                const validate = validations.allIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "ENUM_MESSAGE_PROVIDERS_ITEMS_CODE",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition ENUM_MESSAGE_PROVIDERS_ITEMS_CODE**: every element of $.message.catalog.providers[*].items[*].descriptor.code must be in ["ABSTRACT", "ENTRY_PASS", "ADD_ON"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ENUM_MESSAGE_PROVIDERS_ITEMS_CODE","attr":"$.message.catalog.providers[*].items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "ENUM_MESSAGE_PROVIDERS_ITEMS_CODE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ENUM_MESSAGE_PROVIDERS_ITEMS_CODE","attr":"$.message.catalog.providers[*].items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            ENUM_MESSAGE_PROVIDERS_ITEMS_CODE,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "ENUM_ITEMS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ENUM_ITEMS","_RETURN_":[{"_NAME_":"ENUM_MESSAGE_PROVIDERS_ITEMS_CODE","attr":"$.message.catalog.providers[*].items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REGEX_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL(
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
                        const reg = [
                            "^https:\\/\\/[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}(\\/.*)?$",
                        ];
                        const action = ["on_search"];
                        const subTags = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                        );
                        const var_page = ["CURRENT_PAGE_NUMBER"];

                        const validate = validations.followRegex(attr, reg);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REGEX_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REGEX_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL**: all elements of $.message.catalog.providers[*].items[*].descriptor.images[*].url must follow every regex in ["^https:\\/\\/[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}(\\/.*)?$"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REGEX_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.catalog.providers[*].items[*].descriptor.images[*].url","reg":["^https:\\\\/\\\\/[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}(\\\\/.*)?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName:
                                "REGEX_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REGEX_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.catalog.providers[*].items[*].descriptor.images[*].url","reg":["^https:\\\\/\\\\/[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}(\\\\/.*)?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ABSTRACT_ITEM_CODE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].descriptor.code",
                        );
                        const var_code = ["ABSTRACT"];

                        const skipCheck = !validations.equalTo(
                            var_code,
                            usecasepath,
                        );
                        if (skipCheck) continue;

                        function REQUIRED_CANCELLATION_TERMS_ELIGIBLE(
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
                                    "$.message.catalog.providers[*].items[*].cancellation_terms[*].cancellation_eligible",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code",
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_CANCELLATION_TERMS_ELIGIBLE",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_CANCELLATION_TERMS_ELIGIBLE**: $.message.catalog.providers[*].items[*].cancellation_terms[*].cancellation_eligible must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.catalog.providers[*].items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_CANCELLATION_TERMS_ELIGIBLE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.catalog.providers[*].items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME(
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
                                    "$.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.mimetype",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code",
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME**: $.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.mimetype must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL(
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
                                    "$.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.url",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code",
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL**: $.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.url must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL(
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
                                    "$.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.url",
                                );
                                const reg = [
                                    "^https?:\\/\\/[a-zA-Z0-9.-]+(?:\\.[a-zA-Z]{2,})?(:\\d+)?(\\/[^\\s?#]*)?(\\?[^\\s#]*)?(#[^\\s]*)?$",
                                ];
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code",
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL**: all elements of $.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.url must follow every regex in ["^https?:\\/\\/[a-zA-Z0-9.-]+(?:\\.[a-zA-Z]{2,})?(:\\d+)?(\\/[^\\s?#]*)?(\\?[^\\s#]*)?(#[^\\s]*)?$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_CANCELLATION_TERMS_ELIGIBLE,
                            REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME,
                            REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL,
                            REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "ABSTRACT_ITEM_CODE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ABSTRACT_ITEM_CODE","usecasepath":"$.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code equal to usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.catalog.providers[*].items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function CHILD_ITEM_CODE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.providers[*].items[*].descriptor.code",
                        );
                        const var_code = ["ABSTRACT"];

                        const skipCheck = !validations.noneIn(
                            var_code,
                            usecasepath,
                        );
                        if (skipCheck) continue;

                        function REQUIRED_PARENT_ITEM_ID(
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
                                    "$.message.catalog.providers[*].items[*].parent_item_id",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code",
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "REQUIRED_PARENT_ITEM_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_PARENT_ITEM_ID**: $.message.catalog.providers[*].items[*].parent_item_id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.catalog.providers[*].items[*].parent_item_id","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_PARENT_ITEM_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.catalog.providers[*].items[*].parent_item_id","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_VAL(
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
                                    "$.message.catalog.providers[*].items[*].price.value",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code",
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_VAL",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_VAL**: $.message.catalog.providers[*].items[*].price.value must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_VAL","attr":"$.message.catalog.providers[*].items[*].price.value","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_VAL",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_VAL","attr":"$.message.catalog.providers[*].items[*].price.value","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_CURRENCY(
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
                                    "$.message.catalog.providers[*].items[*].price.currency",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code",
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_CURRENCY",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_CURRENCY**: $.message.catalog.providers[*].items[*].price.currency must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_CURRENCY","attr":"$.message.catalog.providers[*].items[*].price.currency","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_CURRENCY",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_CURRENCY","attr":"$.message.catalog.providers[*].items[*].price.currency","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MAX(
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
                                    "$.message.catalog.providers[*].items[*].quantity.maximum.count",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code",
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MAX",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MAX**: $.message.catalog.providers[*].items[*].quantity.maximum.count must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MAX","attr":"$.message.catalog.providers[*].items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MAX",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MAX","attr":"$.message.catalog.providers[*].items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MIN(
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
                                    "$.message.catalog.providers[*].items[*].quantity.minimum.count",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code",
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MIN",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MIN**: $.message.catalog.providers[*].items[*].quantity.minimum.count must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MIN","attr":"$.message.catalog.providers[*].items[*].quantity.minimum.count","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MIN",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MIN","attr":"$.message.catalog.providers[*].items[*].quantity.minimum.count","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function ITEM_TAGS(
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
                                const validTags = ["FARE_POLICY"];
                                const tagPath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$.message.catalog.tags[*].descriptor.code",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code",
                                );
                                const var_code = ["ABSTRACT"];

                                const validate = validations.allIn(
                                    tagPath,
                                    validTags,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "ITEM_TAGS",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition ITEM_TAGS**: every element of $.message.catalog.tags[*].descriptor.code must be in ["FARE_POLICY"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.catalog.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "ITEM_TAGS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.catalog.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ITEM_TAG_FARE_POLICY(
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
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const validValues = [
                                    "MIN_AGE",
                                    "MAX_AGE",
                                    "GENDER",
                                    "NATIONALITY",
                                ];
                                const action = ["on_search"];
                                const var_page = ["CURRENT_PAGE_NUMBER"];
                                const usecasepath = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code",
                                );
                                const var_code = ["ABSTRACT"];

                                const skipCheck =
                                    !validations.arePresent(subTags);
                                if (skipCheck) continue;

                                const validate = validations.allIn(
                                    subTags,
                                    validValues,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ITEM_TAG_FARE_POLICY",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_ITEM_TAG_FARE_POLICY**: every element of $.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='FARE_POLICY')]._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code must be in ["MIN_AGE", "MAX_AGE", "GENDER", "NATIONALITY"]

	> Note: **Condition REQUIRED_ITEM_TAG_FARE_POLICY** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='FARE_POLICY')]._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code must **not** be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_search"],"var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ITEM_TAG_FARE_POLICY",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_search"],"var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_PARENT_ITEM_ID,
                            REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_VAL,
                            REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_CURRENCY,
                            REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MAX,
                            REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MIN,
                            ITEM_TAGS,
                            REQUIRED_ITEM_TAG_FARE_POLICY,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "CHILD_ITEM_CODE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"CHILD_ITEM_CODE","usecasepath":"$.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code none in usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.catalog.providers[*].items[*].parent_item_id","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_VAL","attr":"$.message.catalog.providers[*].items[*].price.value","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_CURRENCY","attr":"$.message.catalog.providers[*].items[*].price.currency","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MAX","attr":"$.message.catalog.providers[*].items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MIN","attr":"$.message.catalog.providers[*].items[*].quantity.minimum.count","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.catalog.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_search"],"var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_ITEMS,
                    ENUM_ITEMS,
                    REGEX_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL,
                    ABSTRACT_ITEM_CODE,
                    CHILD_ITEM_CODE,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every((r) => r.valid);

                delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: "ON_SEARCH_ITEMS_PAGE_1",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SEARCH_ITEMS_PAGE_1","action":["on_search"],"_SCOPE_":"$.message.catalog.tags[?(@.descriptor.code=='PAGINATION')]","subTags":"$.list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"_CONTINUE_":"!(var_page all in subTags)","_RETURN_":[{"_NAME_":"REQUIRED_ITEMS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_ID","attr":"$.message.catalog.providers[*].items[*].id","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_NAME","attr":"$.message.catalog.providers[*].items[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CODE","attr":"$.message.catalog.providers[*].items[*].descriptor.code","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_LOCATIONS","attr":"$.message.catalog.providers[*].items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"VALID_MESSAGE_PROVIDERS_ITEMS_LOCATIONS_1","attr":"$.message.catalog.providers[*].items[*].location_ids[*]","usecasepath":"$.message.catalog.providers[*].locations[*].id","_RETURN_":"attr all in usecasepath","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES","attr":"$.message.catalog.providers[*].items[*].category_ids[*]","usecasepath":"$.message.catalog.providers[*].categories[*].id","_RETURN_":"attr all in usecasepath","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_1","attr":"$.message.catalog.providers[*].items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS","attr":"$.message.catalog.providers[*].items[*].fulfillment_ids[*]","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_2","attr":"$.message.catalog.providers[*].items[*].fulfillment_ids[*]","usecasepath":"$.message.catalog.providers[*].fulfillments[*].id","_RETURN_":"attr all in usecasepath","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.catalog.providers[*].items[*].descriptor.images[*].url","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}]},{"_NAME_":"ENUM_ITEMS","_RETURN_":[{"_NAME_":"ENUM_MESSAGE_PROVIDERS_ITEMS_CODE","attr":"$.message.catalog.providers[*].items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}]},{"_NAME_":"REGEX_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.catalog.providers[*].items[*].descriptor.images[*].url","reg":["^https:\\\\/\\\\/[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}(\\\\/.*)?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"ABSTRACT_ITEM_CODE","usecasepath":"$.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code equal to usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.catalog.providers[*].items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}]},{"_NAME_":"CHILD_ITEM_CODE","usecasepath":"$.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code none in usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.catalog.providers[*].items[*].parent_item_id","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_VAL","attr":"$.message.catalog.providers[*].items[*].price.value","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_CURRENCY","attr":"$.message.catalog.providers[*].items[*].price.currency","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MAX","attr":"$.message.catalog.providers[*].items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MIN","attr":"$.message.catalog.providers[*].items[*].quantity.minimum.count","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.catalog.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_search"],"var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_SEARCH_FULLFILLMENTS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(
                input.payload,
                "$.message.catalog.tags[?(@.descriptor.code=='PAGINATION')]",
            );
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_search"];
                const subTags = payloadUtils.getJsonPath(
                    testObj,
                    "$.list[*].descriptor.code",
                );
                const var_page = ["CURRENT_PAGE_NUMBER"];

                const skipCheck = !validations.equalTo(var_page, subTags);
                if (skipCheck) continue;

                function REQUIRED_FULFILLMENTS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_ID(
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
                                    "$.message.catalog.providers[*].fulfillments[*].id",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_ID**: $.message.catalog.providers[*].fulfillments[*].id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_ID","attr":"$.message.catalog.providers[*].fulfillments[*].id","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_ID","attr":"$.message.catalog.providers[*].fulfillments[*].id","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE(
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
                                    "$.message.catalog.providers[*].fulfillments[*].type",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE**: $.message.catalog.providers[*].fulfillments[*].type must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].type","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].type","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE(
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
                                    "$.message.catalog.providers[*].fulfillments[*].stops[*].type",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE**: $.message.catalog.providers[*].fulfillments[*].stops[*].type must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY(
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
                                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                                );
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY**: $.message.catalog.providers[*].fulfillments[*].vehicle.category must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY","attr":"$.message.catalog.providers[*].fulfillments[*].vehicle.category","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY","attr":"$.message.catalog.providers[*].fulfillments[*].vehicle.category","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_ID,
                            REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE,
                            REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE,
                            REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_FULFILLMENTS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILLMENTS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_ID","attr":"$.message.catalog.providers[*].fulfillments[*].id","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].type","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY","attr":"$.message.catalog.providers[*].fulfillments[*].vehicle.category","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ENUM_FULFILLMENTS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE(
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
                                    "$.message.catalog.providers[*].fulfillments[*].type",
                                );
                                const enumList = ["VISIT"];
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];

                                const validate = validations.allIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE**: every element of $.message.catalog.providers[*].fulfillments[*].type must be in ["VISIT"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].type","enumList":["VISIT"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].type","enumList":["VISIT"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE(
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
                                    "$.message.catalog.providers[*].fulfillments[*].stops[*].type",
                                );
                                const enumList = ["START"];
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];

                                const validate = validations.allIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].type must be in ["START"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY(
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
                                    "$.message.catalog.providers[*].fulfillments[*].vehicle.category",
                                );
                                const enumList = ["VISIT"];
                                const action = ["on_search"];
                                const subTags = payloadUtils.getJsonPath(
                                    testObj,
                                    "$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code",
                                );
                                const var_page = ["CURRENT_PAGE_NUMBER"];

                                const validate = validations.allIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must be in ["VISIT"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY","attr":"$.message.catalog.providers[*].fulfillments[*].vehicle.category","enumList":["VISIT"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName:
                                        "REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY","attr":"$.message.catalog.providers[*].fulfillments[*].vehicle.category","enumList":["VISIT"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE,
                            REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE,
                            REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY,
                        ];

                        let allResults: validationOutput = [];
                        for (const fn of testFunctions) {
                            const subResult = fn(input);
                            allResults = [...allResults, ...subResult];
                        }
                        subResults = allResults;
                        valid = subResults.every((r) => r.valid);

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "ENUM_FULFILLMENTS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ENUM_FULFILLMENTS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].type","enumList":["VISIT"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY","attr":"$.message.catalog.providers[*].fulfillments[*].vehicle.category","enumList":["VISIT"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_FULFILLMENTS,
                    ENUM_FULFILLMENTS,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every((r) => r.valid);

                delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: "ON_SEARCH_FULLFILLMENTS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SEARCH_FULLFILLMENTS","action":["on_search"],"_SCOPE_":"$.message.catalog.tags[?(@.descriptor.code=='PAGINATION')]","subTags":"$.list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"_CONTINUE_":"!(var_page equal to subTags)","_RETURN_":[{"_NAME_":"REQUIRED_FULFILLMENTS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_ID","attr":"$.message.catalog.providers[*].fulfillments[*].id","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].type","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY","attr":"$.message.catalog.providers[*].fulfillments[*].vehicle.category","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}]},{"_NAME_":"ENUM_FULFILLMENTS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].type","enumList":["VISIT"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY","attr":"$.message.catalog.providers[*].fulfillments[*].vehicle.category","enumList":["VISIT"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function ON_SEARCH_TAGS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["on_search"];

                function PAYMENT_TAG_GROUP(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const validTags = ["BPP_TERMS", "PAGINATION"];
                        const tagPath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.catalog.tags[*].descriptor.code",
                        );
                        const action = ["on_search"];

                        const validate = validations.allIn(tagPath, validTags);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "PAYMENT_TAG_GROUP",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition PAYMENT_TAG_GROUP**: every element of $.message.catalog.tags[*].descriptor.code must be in ["BPP_TERMS", "PAGINATION"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_TAG_GROUP","validTags":["BPP_TERMS","PAGINATION"],"tagPath":"$.message.catalog.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "PAYMENT_TAG_GROUP",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"PAYMENT_TAG_GROUP","validTags":["BPP_TERMS","PAGINATION"],"tagPath":"$.message.catalog.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_search"]}
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
                        "$.message.catalog.tags[?(@.descriptor.code=='BPP_TERMS')]",
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
                            "BUYER_FINDER_FEES_PERCENTAGE",
                            "BUYER_FINDER_FEES_TYPE",
                            "STATIC_TERMS",
                            "MANDATORY_ARBITRATION",
                            "COURT_JURISDICTION",
                            "DELAY_INTEREST",
                        ];
                        const action = ["on_search"];

                        const skipCheck = !validations.arePresent(subTags);
                        if (skipCheck) continue;

                        const validate = validations.allIn(
                            subTags,
                            validValues,
                        );

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_PAYMENT_TAG_BPP_TERMS",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_PAYMENT_TAG_BPP_TERMS**: every element of $.message.catalog.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_TYPE", "STATIC_TERMS", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST"]

	> Note: **Condition REQUIRED_PAYMENT_TAG_BPP_TERMS** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.catalog.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must **not** be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_TAG_BPP_TERMS","_SCOPE_":"$.message.catalog.tags[?(@.descriptor.code=='BPP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["BUYER_FINDER_FEES_PERCENTAGE","BUYER_FINDER_FEES_TYPE","STATIC_TERMS","MANDATORY_ARBITRATION","COURT_JURISDICTION","DELAY_INTEREST"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_PAYMENT_TAG_BPP_TERMS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_TAG_BPP_TERMS","_SCOPE_":"$.message.catalog.tags[?(@.descriptor.code=='BPP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["BUYER_FINDER_FEES_PERCENTAGE","BUYER_FINDER_FEES_TYPE","STATIC_TERMS","MANDATORY_ARBITRATION","COURT_JURISDICTION","DELAY_INTEREST"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_PAYMENT_TAG_PAGINATION(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(
                        input.payload,
                        "$.message.catalog.tags[?(@.descriptor.code=='PAGINATION')]",
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
                            "PAGINATION_ID",
                            "CURRENT_PAGE_NUMBER",
                            "MAX_PAGE_NUMBER",
                        ];
                        const action = ["on_search"];

                        const skipCheck = !validations.arePresent(subTags);
                        if (skipCheck) continue;

                        const validate = validations.allIn(
                            subTags,
                            validValues,
                        );

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_PAYMENT_TAG_PAGINATION",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_PAYMENT_TAG_PAGINATION**: every element of $.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code must be in ["PAGINATION_ID", "CURRENT_PAGE_NUMBER", "MAX_PAGE_NUMBER"]

	> Note: **Condition REQUIRED_PAYMENT_TAG_PAGINATION** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code must **not** be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_TAG_PAGINATION","_SCOPE_":"$.message.catalog.tags[?(@.descriptor.code=='PAGINATION')]","subTags":"$.list[*].descriptor.code","validValues":["PAGINATION_ID","CURRENT_PAGE_NUMBER","MAX_PAGE_NUMBER"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_PAYMENT_TAG_PAGINATION",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_TAG_PAGINATION","_SCOPE_":"$.message.catalog.tags[?(@.descriptor.code=='PAGINATION')]","subTags":"$.list[*].descriptor.code","validValues":["PAGINATION_ID","CURRENT_PAGE_NUMBER","MAX_PAGE_NUMBER"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    PAYMENT_TAG_GROUP,
                    REQUIRED_PAYMENT_TAG_BPP_TERMS,
                    REQUIRED_PAYMENT_TAG_PAGINATION,
                ];

                let allResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    allResults = [...allResults, ...subResult];
                }
                subResults = allResults;
                valid = subResults.every((r) => r.valid);

                delete testObj._EXTERNAL;
            }
            return [
                {
                    testName: "ON_SEARCH_TAGS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"ON_SEARCH_TAGS","action":["on_search"],"_RETURN_":[{"_NAME_":"PAYMENT_TAG_GROUP","validTags":["BPP_TERMS","PAGINATION"],"tagPath":"$.message.catalog.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_search"]},{"_NAME_":"REQUIRED_PAYMENT_TAG_BPP_TERMS","_SCOPE_":"$.message.catalog.tags[?(@.descriptor.code=='BPP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["BUYER_FINDER_FEES_PERCENTAGE","BUYER_FINDER_FEES_TYPE","STATIC_TERMS","MANDATORY_ARBITRATION","COURT_JURISDICTION","DELAY_INTEREST"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_search"]},{"_NAME_":"REQUIRED_PAYMENT_TAG_PAGINATION","_SCOPE_":"$.message.catalog.tags[?(@.descriptor.code=='PAGINATION')]","subTags":"$.list[*].descriptor.code","validValues":["PAGINATION_ID","CURRENT_PAGE_NUMBER","MAX_PAGE_NUMBER"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_search"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            ON_SEARCH_CONTEXT,
            ON_SEARCH_CATALOG,
            ON_SEARCH_PROVIDERS,
            ON_SEARCH_ITEMS_PAGE_1,
            ON_SEARCH_FULLFILLMENTS,
            ON_SEARCH_TAGS,
        ];

        let allResults: validationOutput = [];
        for (const fn of testFunctions) {
            const subResult = fn(input);
            allResults = [...allResults, ...subResult];
        }
        subResults = allResults;
        valid = subResults.every((r) => r.valid);

        delete testObj._EXTERNAL;
    }
    return [
        {
            testName: "on_searchValidations",
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"on_searchValidations","_RETURN_":[{"_NAME_":"ON_SEARCH_CONTEXT","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_REGEX","_RETURN_":[{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+\\/[a-zA-Z0-9\\-\\/]*\\/?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}]},{"_NAME_":"ON_SEARCH_CATALOG","action":["on_search"],"_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_CATALOG_NAME","attr":"$.message.catalog.descriptor.name","_RETURN_":"attr are present","action":["on_search"]}]},{"_NAME_":"ON_SEARCH_PROVIDERS","action":["on_search"],"_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ID","attr":"$.message.catalog.providers[*].id","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_DESCRIPTOR","attr":"$.message.catalog.providers[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_CATRGORY_ID","attr":"$.message.catalog.providers[*].categories[*].id","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_CATRGORY","attr":"$.message.catalog.providers[*].categories[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_CATRGORY_CODE","attr":"$.message.catalog.providers[*].categories[*].descriptor.code","useCasePath":"$.message.catalog.providers[*].categories[*].parent_category_id","_CONTINUE_":"(useCasePath are present)","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"ENUM_MESSAGE_PROVIDERS_CATRGORY_CODE","attr":"$.message.catalog.providers[*].categories[*].descriptor.code","enumList":["CULTURE_HERITAGE"],"useCasePath":"$.message.catalog.providers[*].categories[*].parent_category_id","_CONTINUE_":"(useCasePath are present)","_RETURN_":"attr all in enumList","action":["on_search"]},{"_NAME_":"CHECK_CATEGORY_ID_PARENT_ID","attr":"$.message.catalog.providers[*].categories[*].parent_category_id","useCasePath":"$.message.catalog.providers[*].categories[*].descriptor.code","var_category_id":"$.message.catalog.providers[*].categories[*].id","_CONTINUE_":"!(useCasePath are present && var_category_id equal to attr)","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_START_RANGE","attr":"$.message.catalog.providers[*].time.range.start","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex reg","action":["on_search"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_END_RANGE","attr":"$.message.catalog.providers[*].time.range.end","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr are present && attr follow regex reg","action":["on_search"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID","attr":"$.message.catalog.providers[*].locations[*].id","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME","attr":"$.message.catalog.providers[*].locations[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC","attr":"$.message.catalog.providers[*].locations[*].descriptor.short_desc","_RETURN_":"attr are present","action":["on_search"]}]},{"_NAME_":"ON_SEARCH_ITEMS_PAGE_1","action":["on_search"],"_SCOPE_":"$.message.catalog.tags[?(@.descriptor.code=='PAGINATION')]","subTags":"$.list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"_CONTINUE_":"!(var_page all in subTags)","_RETURN_":[{"_NAME_":"REQUIRED_ITEMS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_ID","attr":"$.message.catalog.providers[*].items[*].id","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_NAME","attr":"$.message.catalog.providers[*].items[*].descriptor.name","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CODE","attr":"$.message.catalog.providers[*].items[*].descriptor.code","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_LOCATIONS","attr":"$.message.catalog.providers[*].items[*].location_ids[*]","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"VALID_MESSAGE_PROVIDERS_ITEMS_LOCATIONS_1","attr":"$.message.catalog.providers[*].items[*].location_ids[*]","usecasepath":"$.message.catalog.providers[*].locations[*].id","_RETURN_":"attr all in usecasepath","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES","attr":"$.message.catalog.providers[*].items[*].category_ids[*]","usecasepath":"$.message.catalog.providers[*].categories[*].id","_RETURN_":"attr all in usecasepath","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_1","attr":"$.message.catalog.providers[*].items[*].category_ids[*]","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS","attr":"$.message.catalog.providers[*].items[*].fulfillment_ids[*]","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_2","attr":"$.message.catalog.providers[*].items[*].fulfillment_ids[*]","usecasepath":"$.message.catalog.providers[*].fulfillments[*].id","_RETURN_":"attr all in usecasepath","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.catalog.providers[*].items[*].descriptor.images[*].url","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}]},{"_NAME_":"ENUM_ITEMS","_RETURN_":[{"_NAME_":"ENUM_MESSAGE_PROVIDERS_ITEMS_CODE","attr":"$.message.catalog.providers[*].items[*].descriptor.code","enumList":["ABSTRACT","ENTRY_PASS","ADD_ON"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}]},{"_NAME_":"REGEX_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL","attr":"$.message.catalog.providers[*].items[*].descriptor.images[*].url","reg":["^https:\\\\/\\\\/[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}(\\\\/.*)?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"ABSTRACT_ITEM_CODE","usecasepath":"$.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code equal to usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_CANCELLATION_TERMS_ELIGIBLE","attr":"$.message.catalog.providers[*].items[*].cancellation_terms[*].cancellation_eligible","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME","attr":"$.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.mimetype","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.url","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL","attr":"$.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.url","reg":["^https?:\\\\/\\\\/[a-zA-Z0-9.-]+(?:\\\\.[a-zA-Z]{2,})?(:\\\\d+)?(\\\\/[^\\\\s?#]*)?(\\\\?[^\\\\s#]*)?(#[^\\\\s]*)?$"],"_RETURN_":"attr follow regex reg","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}]},{"_NAME_":"CHILD_ITEM_CODE","usecasepath":"$.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"],"_CONTINUE_":"!(var_code none in usecasepath)","_RETURN_":[{"_NAME_":"REQUIRED_PARENT_ITEM_ID","attr":"$.message.catalog.providers[*].items[*].parent_item_id","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_VAL","attr":"$.message.catalog.providers[*].items[*].price.value","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_CURRENCY","attr":"$.message.catalog.providers[*].items[*].price.currency","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MAX","attr":"$.message.catalog.providers[*].items[*].quantity.maximum.count","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MIN","attr":"$.message.catalog.providers[*].items[*].quantity.minimum.count","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"ITEM_TAGS","validTags":["FARE_POLICY"],"tagPath":"$.message.catalog.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]},{"_NAME_":"REQUIRED_ITEM_TAG_FARE_POLICY","_SCOPE_":"$.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='FARE_POLICY')]","subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","validValues":["MIN_AGE","MAX_AGE","GENDER","NATIONALITY"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_search"],"var_page":["CURRENT_PAGE_NUMBER"],"usecasepath":"$._EXTERNAL._SELF.message.catalog.providers[*].items[*].descriptor.code","var_code":["ABSTRACT"]}]}]},{"_NAME_":"ON_SEARCH_FULLFILLMENTS","action":["on_search"],"_SCOPE_":"$.message.catalog.tags[?(@.descriptor.code=='PAGINATION')]","subTags":"$.list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"],"_CONTINUE_":"!(var_page equal to subTags)","_RETURN_":[{"_NAME_":"REQUIRED_FULFILLMENTS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_ID","attr":"$.message.catalog.providers[*].fulfillments[*].id","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].type","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY","attr":"$.message.catalog.providers[*].fulfillments[*].vehicle.category","_RETURN_":"attr are present","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}]},{"_NAME_":"ENUM_FULFILLMENTS","_RETURN_":[{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].type","enumList":["VISIT"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE","attr":"$.message.catalog.providers[*].fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]},{"_NAME_":"REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY","attr":"$.message.catalog.providers[*].fulfillments[*].vehicle.category","enumList":["VISIT"],"_RETURN_":"attr all in enumList","action":["on_search"],"subTags":"$._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code","var_page":["CURRENT_PAGE_NUMBER"]}]}]},{"_NAME_":"ON_SEARCH_TAGS","action":["on_search"],"_RETURN_":[{"_NAME_":"PAYMENT_TAG_GROUP","validTags":["BPP_TERMS","PAGINATION"],"tagPath":"$.message.catalog.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags","action":["on_search"]},{"_NAME_":"REQUIRED_PAYMENT_TAG_BPP_TERMS","_SCOPE_":"$.message.catalog.tags[?(@.descriptor.code=='BPP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["BUYER_FINDER_FEES_PERCENTAGE","BUYER_FINDER_FEES_TYPE","STATIC_TERMS","MANDATORY_ARBITRATION","COURT_JURISDICTION","DELAY_INTEREST"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_search"]},{"_NAME_":"REQUIRED_PAYMENT_TAG_PAGINATION","_SCOPE_":"$.message.catalog.tags[?(@.descriptor.code=='PAGINATION')]","subTags":"$.list[*].descriptor.code","validValues":["PAGINATION_ID","CURRENT_PAGE_NUMBER","MAX_PAGE_NUMBER"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues","action":["on_search"]}]}]}
`,
            },
        },
        ...subResults,
    ];
}
