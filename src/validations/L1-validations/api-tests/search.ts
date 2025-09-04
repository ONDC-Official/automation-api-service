import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function search(input: validationInput): validationOutput {
    let totalResults = searchValidations(input);

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
                (r) => r.testName === "search_validations",
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

function searchValidations(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;

        function SEARCH_CONTEXT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["search"];
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
                                const action = ["search"];
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
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["search"];
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
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["search"];
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
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["search"];
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
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["search"];
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["search"];
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["search"];
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
	> - **condition B**: ["search"] must be equal to ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["search"];
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
	> - **condition B**: ["search"] must be equal to ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["search"];
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
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["search"];
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
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["search"];
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
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["search"];
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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}
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
                                const action = ["search"];
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
{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["search"];
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
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}
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
                                const action = ["search"];
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
{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["search"];
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
{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["search"];
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
{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+\\/[a-zA-Z0-9\\-\\/]*\\/?$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+\\/[a-zA-Z0-9\\-\\/]*\\/?$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["search"];
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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"CONTEXT_REGEX","_RETURN_":[{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+\\/[a-zA-Z0-9\\-\\/]*\\/?$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}
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
                    testName: "SEARCH_CONTEXT",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SEARCH_CONTEXT","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_REGEX","_RETURN_":[{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+\\/[a-zA-Z0-9\\-\\/]*\\/?$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function SEARCH_INTENT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["search"];

                function REQUIRED_CATEGORY_CODE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.intent.category.descriptor.code",
                        );
                        const action = ["search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_CATEGORY_CODE",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_CATEGORY_CODE**: $.message.intent.category.descriptor.code must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_CATEGORY_CODE","attr":"$.message.intent.category.descriptor.code","_RETURN_":"attr are present","action":["search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_CATEGORY_CODE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_CATEGORY_CODE","attr":"$.message.intent.category.descriptor.code","_RETURN_":"attr are present","action":["search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function VALID_ENUM_CATEGORY_CODE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.intent.category.descriptor.code",
                        );
                        const enumList = ["CULTURE_HERITAGE"];
                        const action = ["search"];

                        const validate = validations.allIn(attr, enumList);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "VALID_ENUM_CATEGORY_CODE",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition VALID_ENUM_CATEGORY_CODE**: every element of $.message.intent.category.descriptor.code must be in ["CULTURE_HERITAGE"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_ENUM_CATEGORY_CODE","attr":"$.message.intent.category.descriptor.code","enumList":["CULTURE_HERITAGE"],"_RETURN_":"attr all in enumList","action":["search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "VALID_ENUM_CATEGORY_CODE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"VALID_ENUM_CATEGORY_CODE","attr":"$.message.intent.category.descriptor.code","enumList":["CULTURE_HERITAGE"],"_RETURN_":"attr all in enumList","action":["search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_CATEGORY_CODE,
                    VALID_ENUM_CATEGORY_CODE,
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
                    testName: "SEARCH_INTENT",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SEARCH_INTENT","action":["search"],"_RETURN_":[{"_NAME_":"REQUIRED_CATEGORY_CODE","attr":"$.message.intent.category.descriptor.code","_RETURN_":"attr are present","action":["search"]},{"_NAME_":"VALID_ENUM_CATEGORY_CODE","attr":"$.message.intent.category.descriptor.code","enumList":["CULTURE_HERITAGE"],"_RETURN_":"attr all in enumList","action":["search"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function SEARCH_FULFILMENT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["search"];

                function FULFILMENT_REQUIRED(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_FULFILMENT_CATEGORY(
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
                                    "$.message.intent.fulfillment.vehicle.category",
                                );
                                const action = ["search"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_FULFILMENT_CATEGORY",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_FULFILMENT_CATEGORY**: $.message.intent.fulfillment.vehicle.category must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_CATEGORY","attr":"$.message.intent.fulfillment.vehicle.category","_RETURN_":"attr are present","action":["search"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_FULFILMENT_CATEGORY",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_CATEGORY","attr":"$.message.intent.fulfillment.vehicle.category","_RETURN_":"attr are present","action":["search"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_FULFILMENT_CATEGORY,
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
                            testName: "FULFILMENT_REQUIRED",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"FULFILMENT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_FULFILMENT_CATEGORY","attr":"$.message.intent.fulfillment.vehicle.category","_RETURN_":"attr are present","action":["search"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function FULFILMENT_ENUM(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function VALID_ENUM_CATEGORY(
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
                                    "$.message.intent.fulfillment.vehicle.category",
                                );
                                const enumList = ["SITE"];
                                const action = ["search"];

                                const validate = validations.allIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName: "VALID_ENUM_CATEGORY",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition VALID_ENUM_CATEGORY**: every element of $.message.intent.fulfillment.vehicle.category must be in ["SITE"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"VALID_ENUM_CATEGORY","attr":"$.message.intent.fulfillment.vehicle.category","enumList":["SITE"],"_RETURN_":"attr all in enumList","action":["search"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "VALID_ENUM_CATEGORY",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"VALID_ENUM_CATEGORY","attr":"$.message.intent.fulfillment.vehicle.category","enumList":["SITE"],"_RETURN_":"attr all in enumList","action":["search"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            VALID_ENUM_CATEGORY,
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
                            testName: "FULFILMENT_ENUM",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"FULFILMENT_ENUM","_RETURN_":[{"_NAME_":"VALID_ENUM_CATEGORY","attr":"$.message.intent.fulfillment.vehicle.category","enumList":["SITE"],"_RETURN_":"attr all in enumList","action":["search"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_STOPS_START(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.intent.fulfillment.stops[*].type",
                        );
                        const var_type = ["START"];

                        const skipCheck = !validations.equalTo(var_type, attr);
                        if (skipCheck) continue;

                        function REQUIRED_STOPS_TYPE(
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

                                function REQUIRED_FULFILMENT_STOP_TYPE(
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
                                            "$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type",
                                        );
                                        const action = ["search"];
                                        const var_type = ["START"];

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        "REQUIRED_FULFILMENT_STOP_TYPE",
                                                    valid: false,
                                                    code: 30000,
                                                    description: `- **condition REQUIRED_FULFILMENT_STOP_TYPE**: $._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_STOP_TYPE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]}
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
                                                "REQUIRED_FULFILMENT_STOP_TYPE",
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_STOP_TYPE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function REQUIRED_FULFILMENT_LOCATION_CODE(
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
                                            "$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type",
                                        );
                                        const action = ["search"];
                                        const var_type = ["START"];

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        "REQUIRED_FULFILMENT_LOCATION_CODE",
                                                    valid: false,
                                                    code: 30000,
                                                    description: `- **condition REQUIRED_FULFILMENT_LOCATION_CODE**: $._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_LOCATION_CODE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]}
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
                                                "REQUIRED_FULFILMENT_LOCATION_CODE",
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_LOCATION_CODE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function REQUIRED_FULFILMENT_START_RANGE(
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
                                            "$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type",
                                        );
                                        const action = ["search"];
                                        const var_type = ["START"];

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        "REQUIRED_FULFILMENT_START_RANGE",
                                                    valid: false,
                                                    code: 30000,
                                                    description: `- **condition REQUIRED_FULFILMENT_START_RANGE**: $._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_START_RANGE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]}
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
                                                "REQUIRED_FULFILMENT_START_RANGE",
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_START_RANGE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function REQUIRED_FULFILMENT_END_RANGE(
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
                                            "$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type",
                                        );
                                        const action = ["search"];
                                        const var_type = ["START"];

                                        const validate =
                                            validations.arePresent(attr);

                                        if (!validate) {
                                            delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        "REQUIRED_FULFILMENT_END_RANGE",
                                                    valid: false,
                                                    code: 30000,
                                                    description: `- **condition REQUIRED_FULFILMENT_END_RANGE**: $._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type must be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_END_RANGE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]}
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
                                                "REQUIRED_FULFILMENT_END_RANGE",
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILMENT_END_RANGE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    REQUIRED_FULFILMENT_STOP_TYPE,
                                    REQUIRED_FULFILMENT_LOCATION_CODE,
                                    REQUIRED_FULFILMENT_START_RANGE,
                                    REQUIRED_FULFILMENT_END_RANGE,
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
                                    testName: "REQUIRED_STOPS_TYPE",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_STOPS_TYPE","_RETURN_":[{"_NAME_":"REQUIRED_FULFILMENT_STOP_TYPE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]},{"_NAME_":"REQUIRED_FULFILMENT_LOCATION_CODE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]},{"_NAME_":"REQUIRED_FULFILMENT_START_RANGE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]},{"_NAME_":"REQUIRED_FULFILMENT_END_RANGE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function ENUMS_STOPS(
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

                                function ENUM_STOP_TYPE(
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
                                        const attr1 = payloadUtils.getJsonPath(
                                            testObj,
                                            "$.message.intent.fulfillment.stops[*].type",
                                        );
                                        const enumList = ["START"];
                                        const action = ["search"];
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            "$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type",
                                        );
                                        const var_type = ["START"];

                                        const validate = validations.allIn(
                                            attr,
                                            enumList,
                                        );

                                        if (!validate) {
                                            delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName: "ENUM_STOP_TYPE",
                                                    valid: false,
                                                    code: 30000,
                                                    description: `- **condition ENUM_STOP_TYPE**: every element of $._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type must be in ["START"]`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"ENUM_STOP_TYPE","attr1":"$.message.intent.fulfillment.stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]}
`,
                                                    },
                                                },
                                            ];
                                        }

                                        delete testObj._EXTERNAL;
                                    }
                                    return [
                                        {
                                            testName: "ENUM_STOP_TYPE",
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"ENUM_STOP_TYPE","attr1":"$.message.intent.fulfillment.stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function REGEX_FULFILMENT_LOCATION_CODE(
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
                                        const attr2 = payloadUtils.getJsonPath(
                                            testObj,
                                            "$.message.intent.fulfillment.stops[*].location.city.code",
                                        );
                                        const reg = ["^std:\\d{3,5}$"];
                                        const action = ["search"];
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            "$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type",
                                        );
                                        const var_type = ["START"];

                                        const skipCheck =
                                            !validations.arePresent(attr2);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.followRegex(attr2, reg);

                                        if (!validate) {
                                            delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        "REGEX_FULFILMENT_LOCATION_CODE",
                                                    valid: false,
                                                    code: 30000,
                                                    description: `- **condition REGEX_FULFILMENT_LOCATION_CODE**: all elements of $.message.intent.fulfillment.stops[*].location.city.code must follow every regex in ["^std:\\d{3,5}$"]

	> Note: **Condition REGEX_FULFILMENT_LOCATION_CODE** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.intent.fulfillment.stops[*].location.city.code must **not** be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"REGEX_FULFILMENT_LOCATION_CODE","attr2":"$.message.intent.fulfillment.stops[*].location.city.code","reg":["^std:\\\\d{3,5}$"],"_CONTINUE_":"!(attr2 are present)","_RETURN_":"attr2 follow regex reg","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]}
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
                                                "REGEX_FULFILMENT_LOCATION_CODE",
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REGEX_FULFILMENT_LOCATION_CODE","attr2":"$.message.intent.fulfillment.stops[*].location.city.code","reg":["^std:\\\\d{3,5}$"],"_CONTINUE_":"!(attr2 are present)","_RETURN_":"attr2 follow regex reg","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function REGEX_FULFILMENT_START_RANGE(
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
                                        const attr3 = payloadUtils.getJsonPath(
                                            testObj,
                                            "$.message.intent.fulfillment.stops[*].time.range.start",
                                        );
                                        const reg = [
                                            "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$",
                                        ];
                                        const action = ["search"];
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            "$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type",
                                        );
                                        const var_type = ["START"];

                                        const skipCheck =
                                            !validations.arePresent(attr3);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.followRegex(attr3, reg);

                                        if (!validate) {
                                            delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        "REGEX_FULFILMENT_START_RANGE",
                                                    valid: false,
                                                    code: 30000,
                                                    description: `- **condition REGEX_FULFILMENT_START_RANGE**: all elements of $.message.intent.fulfillment.stops[*].time.range.start must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]

	> Note: **Condition REGEX_FULFILMENT_START_RANGE** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.intent.fulfillment.stops[*].time.range.start must **not** be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"REGEX_FULFILMENT_START_RANGE","attr3":"$.message.intent.fulfillment.stops[*].time.range.start","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr3 are present)","_RETURN_":"attr3 follow regex reg","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]}
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
                                                "REGEX_FULFILMENT_START_RANGE",
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REGEX_FULFILMENT_START_RANGE","attr3":"$.message.intent.fulfillment.stops[*].time.range.start","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr3 are present)","_RETURN_":"attr3 follow regex reg","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }
                                function REGEX_FULFILMENT_END_RANGE(
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
                                        const attr4 = payloadUtils.getJsonPath(
                                            testObj,
                                            "$.message.intent.fulfillment.stops[*].time.range.end",
                                        );
                                        const reg = [
                                            "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$",
                                        ];
                                        const action = ["search"];
                                        const attr = payloadUtils.getJsonPath(
                                            testObj,
                                            "$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type",
                                        );
                                        const var_type = ["START"];

                                        const skipCheck =
                                            !validations.arePresent(attr4);
                                        if (skipCheck) continue;

                                        const validate =
                                            validations.followRegex(attr4, reg);

                                        if (!validate) {
                                            delete testObj._EXTERNAL;
                                            return [
                                                {
                                                    testName:
                                                        "REGEX_FULFILMENT_END_RANGE",
                                                    valid: false,
                                                    code: 30000,
                                                    description: `- **condition REGEX_FULFILMENT_END_RANGE**: all elements of $.message.intent.fulfillment.stops[*].time.range.end must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]

	> Note: **Condition REGEX_FULFILMENT_END_RANGE** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.intent.fulfillment.stops[*].time.range.end must **not** be present in the payload`,
                                                    _debugInfo: {
                                                        fedConfig: `
{"_NAME_":"REGEX_FULFILMENT_END_RANGE","attr4":"$.message.intent.fulfillment.stops[*].time.range.end","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr4 are present)","_RETURN_":"attr4 follow regex reg","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]}
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
                                                "REGEX_FULFILMENT_END_RANGE",
                                            valid: valid,
                                            code: valid ? 200 : 30000,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REGEX_FULFILMENT_END_RANGE","attr4":"$.message.intent.fulfillment.stops[*].time.range.end","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr4 are present)","_RETURN_":"attr4 follow regex reg","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]}
`,
                                            },
                                        },
                                        ...subResults,
                                    ];
                                }

                                const testFunctions: testFunctionArray = [
                                    ENUM_STOP_TYPE,
                                    REGEX_FULFILMENT_LOCATION_CODE,
                                    REGEX_FULFILMENT_START_RANGE,
                                    REGEX_FULFILMENT_END_RANGE,
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
                                    testName: "ENUMS_STOPS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ENUMS_STOPS","_RETURN_":[{"_NAME_":"ENUM_STOP_TYPE","attr1":"$.message.intent.fulfillment.stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]},{"_NAME_":"REGEX_FULFILMENT_LOCATION_CODE","attr2":"$.message.intent.fulfillment.stops[*].location.city.code","reg":["^std:\\\\d{3,5}$"],"_CONTINUE_":"!(attr2 are present)","_RETURN_":"attr2 follow regex reg","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]},{"_NAME_":"REGEX_FULFILMENT_START_RANGE","attr3":"$.message.intent.fulfillment.stops[*].time.range.start","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr3 are present)","_RETURN_":"attr3 follow regex reg","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]},{"_NAME_":"REGEX_FULFILMENT_END_RANGE","attr4":"$.message.intent.fulfillment.stops[*].time.range.end","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr4 are present)","_RETURN_":"attr4 follow regex reg","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]}]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_STOPS_TYPE,
                            ENUMS_STOPS,
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
                            testName: "REQUIRED_STOPS_START",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_STOPS_START","attr":"$.message.intent.fulfillment.stops[*].type","var_type":["START"],"_CONTINUE_":"!(var_type equal to attr)","_RETURN_":[{"_NAME_":"REQUIRED_STOPS_TYPE","_RETURN_":[{"_NAME_":"REQUIRED_FULFILMENT_STOP_TYPE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]},{"_NAME_":"REQUIRED_FULFILMENT_LOCATION_CODE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]},{"_NAME_":"REQUIRED_FULFILMENT_START_RANGE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]},{"_NAME_":"REQUIRED_FULFILMENT_END_RANGE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]}]},{"_NAME_":"ENUMS_STOPS","_RETURN_":[{"_NAME_":"ENUM_STOP_TYPE","attr1":"$.message.intent.fulfillment.stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]},{"_NAME_":"REGEX_FULFILMENT_LOCATION_CODE","attr2":"$.message.intent.fulfillment.stops[*].location.city.code","reg":["^std:\\\\d{3,5}$"],"_CONTINUE_":"!(attr2 are present)","_RETURN_":"attr2 follow regex reg","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]},{"_NAME_":"REGEX_FULFILMENT_START_RANGE","attr3":"$.message.intent.fulfillment.stops[*].time.range.start","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr3 are present)","_RETURN_":"attr3 follow regex reg","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]},{"_NAME_":"REGEX_FULFILMENT_END_RANGE","attr4":"$.message.intent.fulfillment.stops[*].time.range.end","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr4 are present)","_RETURN_":"attr4 follow regex reg","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]}]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    FULFILMENT_REQUIRED,
                    FULFILMENT_ENUM,
                    REQUIRED_STOPS_START,
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
                    testName: "SEARCH_FULFILMENT",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SEARCH_FULFILMENT","action":["search"],"_RETURN_":[{"_NAME_":"FULFILMENT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_FULFILMENT_CATEGORY","attr":"$.message.intent.fulfillment.vehicle.category","_RETURN_":"attr are present","action":["search"]}]},{"_NAME_":"FULFILMENT_ENUM","_RETURN_":[{"_NAME_":"VALID_ENUM_CATEGORY","attr":"$.message.intent.fulfillment.vehicle.category","enumList":["SITE"],"_RETURN_":"attr all in enumList","action":["search"]}]},{"_NAME_":"REQUIRED_STOPS_START","attr":"$.message.intent.fulfillment.stops[*].type","var_type":["START"],"_CONTINUE_":"!(var_type equal to attr)","_RETURN_":[{"_NAME_":"REQUIRED_STOPS_TYPE","_RETURN_":[{"_NAME_":"REQUIRED_FULFILMENT_STOP_TYPE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]},{"_NAME_":"REQUIRED_FULFILMENT_LOCATION_CODE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]},{"_NAME_":"REQUIRED_FULFILMENT_START_RANGE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]},{"_NAME_":"REQUIRED_FULFILMENT_END_RANGE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]}]},{"_NAME_":"ENUMS_STOPS","_RETURN_":[{"_NAME_":"ENUM_STOP_TYPE","attr1":"$.message.intent.fulfillment.stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]},{"_NAME_":"REGEX_FULFILMENT_LOCATION_CODE","attr2":"$.message.intent.fulfillment.stops[*].location.city.code","reg":["^std:\\\\d{3,5}$"],"_CONTINUE_":"!(attr2 are present)","_RETURN_":"attr2 follow regex reg","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]},{"_NAME_":"REGEX_FULFILMENT_START_RANGE","attr3":"$.message.intent.fulfillment.stops[*].time.range.start","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr3 are present)","_RETURN_":"attr3 follow regex reg","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]},{"_NAME_":"REGEX_FULFILMENT_END_RANGE","attr4":"$.message.intent.fulfillment.stops[*].time.range.end","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr4 are present)","_RETURN_":"attr4 follow regex reg","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]}]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function SEARCH_PAYMENT(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["search"];

                function REQUIRED_PAYMENT_COLLECTED_BY(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.intent.payment.collected_by",
                        );
                        const action = ["search"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_PAYMENT_COLLECTED_BY",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_PAYMENT_COLLECTED_BY**: $.message.intent.payment.collected_by must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_COLLECTED_BY","attr":"$.message.intent.payment.collected_by","_RETURN_":"attr are present","action":["search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_PAYMENT_COLLECTED_BY",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_COLLECTED_BY","attr":"$.message.intent.payment.collected_by","_RETURN_":"attr are present","action":["search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ENUM_PAYMENT_COLLECTED_BY(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.intent.payment.collected_by",
                        );
                        const enumList = ["BPP", "BAP"];
                        const action = ["search"];

                        const validate = validations.anyIn(attr, enumList);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "ENUM_PAYMENT_COLLECTED_BY",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition ENUM_PAYMENT_COLLECTED_BY**: at least one element of $.message.intent.payment.collected_by must be in ["BPP", "BAP"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"ENUM_PAYMENT_COLLECTED_BY","attr":"$.message.intent.payment.collected_by","enumList":["BPP","BAP"],"_RETURN_":"attr any in enumList","action":["search"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "ENUM_PAYMENT_COLLECTED_BY",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ENUM_PAYMENT_COLLECTED_BY","attr":"$.message.intent.payment.collected_by","enumList":["BPP","BAP"],"_RETURN_":"attr any in enumList","action":["search"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_PAYMENT_COLLECTED_BY,
                    ENUM_PAYMENT_COLLECTED_BY,
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
                    testName: "SEARCH_PAYMENT",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SEARCH_PAYMENT","action":["search"],"_RETURN_":[{"_NAME_":"REQUIRED_PAYMENT_COLLECTED_BY","attr":"$.message.intent.payment.collected_by","_RETURN_":"attr are present","action":["search"]},{"_NAME_":"ENUM_PAYMENT_COLLECTED_BY","attr":"$.message.intent.payment.collected_by","enumList":["BPP","BAP"],"_RETURN_":"attr any in enumList","action":["search"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function SEARCH_INTENT_TAGS(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;

                function PAYMENT_TAG_GROUP(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const validTags = ["BAP_TERMS", "INCREMENTAL_PULL"];
                        const tagPath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.intent.tags[*].descriptor.code",
                        );

                        const validate = validations.allIn(tagPath, validTags);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "PAYMENT_TAG_GROUP",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition PAYMENT_TAG_GROUP**: every element of $.message.intent.tags[*].descriptor.code must be in ["BAP_TERMS", "INCREMENTAL_PULL"]`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_TAG_GROUP","validTags":["BAP_TERMS","INCREMENTAL_PULL"],"tagPath":"$.message.intent.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags"}
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
{"_NAME_":"PAYMENT_TAG_GROUP","validTags":["BAP_TERMS","INCREMENTAL_PULL"],"tagPath":"$.message.intent.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_PAYMENT_TAG_BAP_TERMS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(
                        input.payload,
                        "$.message.intent.tags[?(@.descriptor.code=='BAP_TERMS')]",
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
                            "SETTLEMENT_BASIS",
                            "SETTLEMENT_WINDOW",
                        ];

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
                                    testName: "REQUIRED_PAYMENT_TAG_BAP_TERMS",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_PAYMENT_TAG_BAP_TERMS**: every element of $.message.intent.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_TYPE", "STATIC_TERMS", "SETTLEMENT_BASIS", "SETTLEMENT_WINDOW"]

	> Note: **Condition REQUIRED_PAYMENT_TAG_BAP_TERMS** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.intent.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must **not** be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_TAG_BAP_TERMS","_SCOPE_":"$.message.intent.tags[?(@.descriptor.code=='BAP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["BUYER_FINDER_FEES_PERCENTAGE","BUYER_FINDER_FEES_TYPE","STATIC_TERMS","SETTLEMENT_BASIS","SETTLEMENT_WINDOW"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues"}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_PAYMENT_TAG_BAP_TERMS",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_PAYMENT_TAG_BAP_TERMS","_SCOPE_":"$.message.intent.tags[?(@.descriptor.code=='BAP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["BUYER_FINDER_FEES_PERCENTAGE","BUYER_FINDER_FEES_TYPE","STATIC_TERMS","SETTLEMENT_BASIS","SETTLEMENT_WINDOW"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function PAYMENT_TAG_INCREMENTAL_PULL(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(
                        input.payload,
                        "$.message.intent.tags[?(@.descriptor.code=='INCREMENTAL_PULL')]",
                    );
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const subTags = payloadUtils.getJsonPath(
                            testObj,
                            "$.list[*].descriptor.code",
                        );
                        const validValues = ["REGISTER"];

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
                                    testName: "PAYMENT_TAG_INCREMENTAL_PULL",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition PAYMENT_TAG_INCREMENTAL_PULL**: every element of $.message.intent.tags[?(@.descriptor.code=='INCREMENTAL_PULL')].list[*].descriptor.code must be in ["REGISTER"]

	> Note: **Condition PAYMENT_TAG_INCREMENTAL_PULL** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.intent.tags[?(@.descriptor.code=='INCREMENTAL_PULL')].list[*].descriptor.code must **not** be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"PAYMENT_TAG_INCREMENTAL_PULL","_SCOPE_":"$.message.intent.tags[?(@.descriptor.code=='INCREMENTAL_PULL')]","subTags":"$.list[*].descriptor.code","validValues":["REGISTER"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues"}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "PAYMENT_TAG_INCREMENTAL_PULL",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"PAYMENT_TAG_INCREMENTAL_PULL","_SCOPE_":"$.message.intent.tags[?(@.descriptor.code=='INCREMENTAL_PULL')]","subTags":"$.list[*].descriptor.code","validValues":["REGISTER"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues"}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    PAYMENT_TAG_GROUP,
                    REQUIRED_PAYMENT_TAG_BAP_TERMS,
                    PAYMENT_TAG_INCREMENTAL_PULL,
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
                    testName: "SEARCH_INTENT_TAGS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SEARCH_INTENT_TAGS","_RETURN_":[{"_NAME_":"PAYMENT_TAG_GROUP","validTags":["BAP_TERMS","INCREMENTAL_PULL"],"tagPath":"$.message.intent.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags"},{"_NAME_":"REQUIRED_PAYMENT_TAG_BAP_TERMS","_SCOPE_":"$.message.intent.tags[?(@.descriptor.code=='BAP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["BUYER_FINDER_FEES_PERCENTAGE","BUYER_FINDER_FEES_TYPE","STATIC_TERMS","SETTLEMENT_BASIS","SETTLEMENT_WINDOW"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues"},{"_NAME_":"PAYMENT_TAG_INCREMENTAL_PULL","_SCOPE_":"$.message.intent.tags[?(@.descriptor.code=='INCREMENTAL_PULL')]","subTags":"$.list[*].descriptor.code","validValues":["REGISTER"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues"}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            SEARCH_CONTEXT,
            SEARCH_INTENT,
            SEARCH_FULFILMENT,
            SEARCH_PAYMENT,
            SEARCH_INTENT_TAGS,
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
            testName: "searchValidations",
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"searchValidations","_RETURN_":[{"_NAME_":"SEARCH_CONTEXT","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_REGEX","_RETURN_":[{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+\\/[a-zA-Z0-9\\-\\/]*\\/?$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["search"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}]},{"_NAME_":"SEARCH_INTENT","action":["search"],"_RETURN_":[{"_NAME_":"REQUIRED_CATEGORY_CODE","attr":"$.message.intent.category.descriptor.code","_RETURN_":"attr are present","action":["search"]},{"_NAME_":"VALID_ENUM_CATEGORY_CODE","attr":"$.message.intent.category.descriptor.code","enumList":["CULTURE_HERITAGE"],"_RETURN_":"attr all in enumList","action":["search"]}]},{"_NAME_":"SEARCH_FULFILMENT","action":["search"],"_RETURN_":[{"_NAME_":"FULFILMENT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_FULFILMENT_CATEGORY","attr":"$.message.intent.fulfillment.vehicle.category","_RETURN_":"attr are present","action":["search"]}]},{"_NAME_":"FULFILMENT_ENUM","_RETURN_":[{"_NAME_":"VALID_ENUM_CATEGORY","attr":"$.message.intent.fulfillment.vehicle.category","enumList":["SITE"],"_RETURN_":"attr all in enumList","action":["search"]}]},{"_NAME_":"REQUIRED_STOPS_START","attr":"$.message.intent.fulfillment.stops[*].type","var_type":["START"],"_CONTINUE_":"!(var_type equal to attr)","_RETURN_":[{"_NAME_":"REQUIRED_STOPS_TYPE","_RETURN_":[{"_NAME_":"REQUIRED_FULFILMENT_STOP_TYPE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]},{"_NAME_":"REQUIRED_FULFILMENT_LOCATION_CODE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]},{"_NAME_":"REQUIRED_FULFILMENT_START_RANGE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]},{"_NAME_":"REQUIRED_FULFILMENT_END_RANGE","attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","_RETURN_":"attr are present","action":["search"],"var_type":["START"]}]},{"_NAME_":"ENUMS_STOPS","_RETURN_":[{"_NAME_":"ENUM_STOP_TYPE","attr1":"$.message.intent.fulfillment.stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]},{"_NAME_":"REGEX_FULFILMENT_LOCATION_CODE","attr2":"$.message.intent.fulfillment.stops[*].location.city.code","reg":["^std:\\\\d{3,5}$"],"_CONTINUE_":"!(attr2 are present)","_RETURN_":"attr2 follow regex reg","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]},{"_NAME_":"REGEX_FULFILMENT_START_RANGE","attr3":"$.message.intent.fulfillment.stops[*].time.range.start","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr3 are present)","_RETURN_":"attr3 follow regex reg","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]},{"_NAME_":"REGEX_FULFILMENT_END_RANGE","attr4":"$.message.intent.fulfillment.stops[*].time.range.end","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_CONTINUE_":"!(attr4 are present)","_RETURN_":"attr4 follow regex reg","action":["search"],"attr":"$._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type","var_type":["START"]}]}]}]},{"_NAME_":"SEARCH_PAYMENT","action":["search"],"_RETURN_":[{"_NAME_":"REQUIRED_PAYMENT_COLLECTED_BY","attr":"$.message.intent.payment.collected_by","_RETURN_":"attr are present","action":["search"]},{"_NAME_":"ENUM_PAYMENT_COLLECTED_BY","attr":"$.message.intent.payment.collected_by","enumList":["BPP","BAP"],"_RETURN_":"attr any in enumList","action":["search"]}]},{"_NAME_":"SEARCH_INTENT_TAGS","_RETURN_":[{"_NAME_":"PAYMENT_TAG_GROUP","validTags":["BAP_TERMS","INCREMENTAL_PULL"],"tagPath":"$.message.intent.tags[*].descriptor.code","_RETURN_":"tagPath all in validTags"},{"_NAME_":"REQUIRED_PAYMENT_TAG_BAP_TERMS","_SCOPE_":"$.message.intent.tags[?(@.descriptor.code=='BAP_TERMS')]","subTags":"$.list[*].descriptor.code","validValues":["BUYER_FINDER_FEES_PERCENTAGE","BUYER_FINDER_FEES_TYPE","STATIC_TERMS","SETTLEMENT_BASIS","SETTLEMENT_WINDOW"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues"},{"_NAME_":"PAYMENT_TAG_INCREMENTAL_PULL","_SCOPE_":"$.message.intent.tags[?(@.descriptor.code=='INCREMENTAL_PULL')]","subTags":"$.list[*].descriptor.code","validValues":["REGISTER"],"_CONTINUE_":"!(subTags are present)","_RETURN_":"subTags all in validValues"}]}]}
`,
            },
        },
        ...subResults,
    ];
}
