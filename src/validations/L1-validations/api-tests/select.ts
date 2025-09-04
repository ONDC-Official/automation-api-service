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
                (r) => r.testName === "select_validations",
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
                                const action = ["select"];
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
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
	> - **condition B**: ["select"] must be equal to ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
	> - **condition B**: ["select"] must be equal to ["search"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}
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
                                const action = ["select"];
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
{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}
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
                                const action = ["select"];
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
{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+\\/[a-zA-Z0-9\\-\\/]*\\/?$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+\\/[a-zA-Z0-9\\-\\/]*\\/?$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
                                const action = ["select"];
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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}
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
{"_NAME_":"CONTEXT_REGEX","_RETURN_":[{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+\\/[a-zA-Z0-9\\-\\/]*\\/?$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}
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
                    testName: "SELECT_CONTEXT",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SELECT_CONTEXT","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_REGEX","_RETURN_":[{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+\\/[a-zA-Z0-9\\-\\/]*\\/?$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function SELECT_ITEM_SELECT_0(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["select"];

                function REQUIRED_ORDER_ITEM(
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
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ORDER_ITEM",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_ORDER_ITEM**: $.message.order.items[*].id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["select"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ORDER_ITEM",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ORDER_ITEM_PARENT(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].parent_item_id",
                        );
                        const action = ["select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ORDER_ITEM_PARENT",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_ORDER_ITEM_PARENT**: $.message.order.items[*].parent_item_id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM_PARENT","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","action":["select"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ORDER_ITEM_PARENT",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM_PARENT","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ORDER_ITEM_QUANTITY(
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
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ORDER_ITEM_QUANTITY",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_ORDER_ITEM_QUANTITY**: $.message.order.items[*].quantity.selected.count must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["select"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ORDER_ITEM_QUANTITY",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_ORDER_ITEM,
                    REQUIRED_ORDER_ITEM_PARENT,
                    REQUIRED_ORDER_ITEM_QUANTITY,
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
                    testName: "SELECT_ITEM_SELECT_0",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SELECT_ITEM_SELECT_0","action":["select"],"_RETURN_":[{"_NAME_":"REQUIRED_ORDER_ITEM","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_PARENT","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["select"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function SELECT_ITEM_SELECT_1(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const usecasepath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].xinput.form.id",
                );
                const action = ["select"];

                const skipCheck = !validations.arePresent(usecasepath);
                if (skipCheck) continue;

                function REQUIRED_ORDER_ITEM(
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
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.message.order.items[*].xinput.form.id",
                        );
                        const action = ["select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ORDER_ITEM",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_ORDER_ITEM**: $.message.order.items[*].id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ORDER_ITEM",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ORDER_ITEM_PARENT(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].parent_item_id",
                        );
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.message.order.items[*].xinput.form.id",
                        );
                        const action = ["select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ORDER_ITEM_PARENT",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_ORDER_ITEM_PARENT**: $.message.order.items[*].parent_item_id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM_PARENT","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ORDER_ITEM_PARENT",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM_PARENT","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ORDER_ITEM_QUANTITY(
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
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.message.order.items[*].xinput.form.id",
                        );
                        const action = ["select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ORDER_ITEM_QUANTITY",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_ORDER_ITEM_QUANTITY**: $.message.order.items[*].quantity.selected.count must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ORDER_ITEM_QUANTITY",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ORDER_ITEM_XINPUT_FORM(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].xinput.form.id",
                        );
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.message.order.items[*].xinput.form.id",
                        );
                        const action = ["select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ORDER_ITEM_XINPUT_FORM",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_ORDER_ITEM_XINPUT_FORM**: $.message.order.items[*].xinput.form.id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM","attr":"$.message.order.items[*].xinput.form.id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ORDER_ITEM_XINPUT_FORM",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM","attr":"$.message.order.items[*].xinput.form.id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].xinput.form_response.status",
                        );
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.message.order.items[*].xinput.form.id",
                        );
                        const action = ["select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE**: $.message.order.items[*].xinput.form_response.status must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE","attr":"$.message.order.items[*].xinput.form_response.status","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]}
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
                                "REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE","attr":"$.message.order.items[*].xinput.form_response.status","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].xinput.form_response.submission_id",
                        );
                        const usecasepath = payloadUtils.getJsonPath(
                            testObj,
                            "$._EXTERNAL._SELF.message.order.items[*].xinput.form.id",
                        );
                        const action = ["select"];

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName:
                                        "REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION**: $.message.order.items[*].xinput.form_response.submission_id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION","attr":"$.message.order.items[*].xinput.form_response.submission_id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]}
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
                                "REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION","attr":"$.message.order.items[*].xinput.form_response.submission_id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_ORDER_ITEM,
                    REQUIRED_ORDER_ITEM_PARENT,
                    REQUIRED_ORDER_ITEM_QUANTITY,
                    REQUIRED_ORDER_ITEM_XINPUT_FORM,
                    REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE,
                    REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION,
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
                    testName: "SELECT_ITEM_SELECT_1",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SELECT_ITEM_SELECT_1","usecasepath":"$.message.order.items[*].xinput.form.id","_CONTINUE_":"!(usecasepath are present)","action":["select"],"_RETURN_":[{"_NAME_":"REQUIRED_ORDER_ITEM","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_PARENT","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM","attr":"$.message.order.items[*].xinput.form.id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE","attr":"$.message.order.items[*].xinput.form_response.status","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION","attr":"$.message.order.items[*].xinput.form_response.submission_id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function SELECT_FULLFILLMENTS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["select"];

                function REQUIRED_FULFILLMENT(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_ORDER_FULFILLMENT_ID(
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
                                    "$.message.order.fulfillments[*].id",
                                );
                                const action = ["select"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ORDER_FULFILLMENT_ID",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_ORDER_FULFILLMENT_ID**: $.message.order.fulfillments[*].id must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ORDER_FULFILLMENT_ID",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ORDER_FULFILLMENT_STOPS(
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
                                    "$.message.order.fulfillments[*].stops[*].type",
                                );
                                const action = ["select"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ORDER_FULFILLMENT_STOPS",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_ORDER_FULFILLMENT_STOPS**: $.message.order.fulfillments[*].stops[*].type must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["select"]}
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
                                        "REQUIRED_ORDER_FULFILLMENT_STOPS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ORDER_FULFILLMENT_TIME(
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
                                    "$.message.order.fulfillments[*].stops[*].time.timestamp",
                                );
                                const action = ["select"];

                                const validate = validations.arePresent(attr);

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ORDER_FULFILLMENT_TIME",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_ORDER_FULFILLMENT_TIME**: $.message.order.fulfillments[*].stops[*].time.timestamp must be present in the payload`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","_RETURN_":"attr are present","action":["select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ORDER_FULFILLMENT_TIME",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","_RETURN_":"attr are present","action":["select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_ORDER_FULFILLMENT_ID,
                            REQUIRED_ORDER_FULFILLMENT_STOPS,
                            REQUIRED_ORDER_FULFILLMENT_TIME,
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
                            testName: "REQUIRED_FULFILLMENT",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_FULFILLMENT","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","_RETURN_":"attr are present","action":["select"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }
                function ENUM_FULFILLMENT(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;

                        function REQUIRED_ORDER_FULFILLMENT_STOPS(
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
                                    "$.message.order.fulfillments[*].stops[*].type",
                                );
                                const enumList = ["START"];
                                const action = ["select"];

                                const validate = validations.allIn(
                                    attr,
                                    enumList,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ORDER_FULFILLMENT_STOPS",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_ORDER_FULFILLMENT_STOPS**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["select"]}
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
                                        "REQUIRED_ORDER_FULFILLMENT_STOPS",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }
                        function REQUIRED_ORDER_FULFILLMENT_TIME(
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
                                    "$.message.order.fulfillments[*].stops[*].time.timestamp",
                                );
                                const reg = [
                                    "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$",
                                ];
                                const action = ["select"];

                                const validate = validations.followRegex(
                                    attr,
                                    reg,
                                );

                                if (!validate) {
                                    delete testObj._EXTERNAL;
                                    return [
                                        {
                                            testName:
                                                "REQUIRED_ORDER_FULFILLMENT_TIME",
                                            valid: false,
                                            code: 30000,
                                            description: `- **condition REQUIRED_ORDER_FULFILLMENT_TIME**: all elements of $.message.order.fulfillments[*].stops[*].time.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]`,
                                            _debugInfo: {
                                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["select"]}
`,
                                            },
                                        },
                                    ];
                                }

                                delete testObj._EXTERNAL;
                            }
                            return [
                                {
                                    testName: "REQUIRED_ORDER_FULFILLMENT_TIME",
                                    valid: valid,
                                    code: valid ? 200 : 30000,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["select"]}
`,
                                    },
                                },
                                ...subResults,
                            ];
                        }

                        const testFunctions: testFunctionArray = [
                            REQUIRED_ORDER_FULFILLMENT_STOPS,
                            REQUIRED_ORDER_FULFILLMENT_TIME,
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
                            testName: "ENUM_FULFILLMENT",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"ENUM_FULFILLMENT","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["select"]},{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["select"]}]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_FULFILLMENT,
                    ENUM_FULFILLMENT,
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
                    testName: "SELECT_FULLFILLMENTS",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SELECT_FULLFILLMENTS","action":["select"],"_RETURN_":[{"_NAME_":"REQUIRED_FULFILLMENT","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","_RETURN_":"attr are present","action":["select"]}]},{"_NAME_":"ENUM_FULFILLMENT","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["select"]},{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["select"]}]}]}
`,
                    },
                },
                ...subResults,
            ];
        }
        function SELECT_PROVIDER(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const action = ["select"];

                function REQUIRED_ORDER_PROVIDER(
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
                            delete testObj._EXTERNAL;
                            return [
                                {
                                    testName: "REQUIRED_ORDER_PROVIDER",
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition REQUIRED_ORDER_PROVIDER**: $.message.order.provider.id must be present in the payload`,
                                    _debugInfo: {
                                        fedConfig: `
{"_NAME_":"REQUIRED_ORDER_PROVIDER","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["select"]}
`,
                                    },
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [
                        {
                            testName: "REQUIRED_ORDER_PROVIDER",
                            valid: valid,
                            code: valid ? 200 : 30000,
                            _debugInfo: {
                                fedConfig: `
{"_NAME_":"REQUIRED_ORDER_PROVIDER","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["select"]}
`,
                            },
                        },
                        ...subResults,
                    ];
                }

                const testFunctions: testFunctionArray = [
                    REQUIRED_ORDER_PROVIDER,
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
                    testName: "SELECT_PROVIDER",
                    valid: valid,
                    code: valid ? 200 : 30000,
                    _debugInfo: {
                        fedConfig: `
{"_NAME_":"SELECT_PROVIDER","action":["select"],"_RETURN_":[{"_NAME_":"REQUIRED_ORDER_PROVIDER","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["select"]}]}
`,
                    },
                },
                ...subResults,
            ];
        }

        const testFunctions: testFunctionArray = [
            SELECT_CONTEXT,
            SELECT_ITEM_SELECT_0,
            SELECT_ITEM_SELECT_1,
            SELECT_FULLFILLMENTS,
            SELECT_PROVIDER,
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
            testName: "selectValidations",
            valid: valid,
            code: valid ? 200 : 30000,
            _debugInfo: {
                fedConfig: `
{"_NAME_":"selectValidations","_RETURN_":[{"_NAME_":"SELECT_CONTEXT","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"],"_RETURN_":[{"_NAME_":"CONTEXT_REQUIRED","_RETURN_":[{"_NAME_":"REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_DOMAIN","attr":"$.context.domain","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_ID","attr":"$.context.bap_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BAP_URI","attr":"$.context.bap_uri","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_ID","attr":"$.context.bpp_id","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_BPP_URI","attr":"$.context.bpp_uri","var_search":["search"],"_CONTINUE_":"(action equal to var_search)","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TRANSACTION_ID","attr":"$.context.transaction_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_MESSAGE_ID","attr":"$.context.message_id","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_VERSION","attr":"$.context.version","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","_RETURN_":"attr are present","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_ENUM","_RETURN_":[{"_NAME_":"VALID_CONTEXT_LOCATION_COUNTRY_CODE","attr":"$.context.location.country.code","enumList":["IND"],"_RETURN_":"attr any in enumList","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"VALID_CONTEXT_DOMAIN","attr":"$.context.domain","enumList":["ONDC:TRV14"],"_RETURN_":"attr all in enumList","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]},{"_NAME_":"CONTEXT_REGEX","_RETURN_":[{"_NAME_":"REGEX_CONTEXT_LOCATION_CITY_CODE","attr":"$.context.location.city.code","reg":["^std:\\\\d{3,5}$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_TIMESTAMP","attr":"$.context.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REGEX_CONTEXT_BAP_URI","attr":"$.context.bap_uri","reg":["^https:\\/\\/[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+\\/[a-zA-Z0-9\\-\\/]*\\/?$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]},{"_NAME_":"REQUIRED_CONTEXT_TTL","attr":"$.context.ttl","reg":["^P(?=\\\\d|T\\\\d)(\\\\d+Y)?(\\\\d+M)?(\\\\d+D)?(T(\\\\d+H)?(\\\\d+M)?(\\\\d+S)?)?$"],"_RETURN_":"attr follow regex reg","action":["select"],"domain":["ONDC:TRV14"],"version":["2.0.0"]}]}]},{"_NAME_":"SELECT_ITEM_SELECT_0","action":["select"],"_RETURN_":[{"_NAME_":"REQUIRED_ORDER_ITEM","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_PARENT","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","action":["select"]}]},{"_NAME_":"SELECT_ITEM_SELECT_1","usecasepath":"$.message.order.items[*].xinput.form.id","_CONTINUE_":"!(usecasepath are present)","action":["select"],"_RETURN_":[{"_NAME_":"REQUIRED_ORDER_ITEM","attr":"$.message.order.items[*].id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_PARENT","attr":"$.message.order.items[*].parent_item_id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_QUANTITY","attr":"$.message.order.items[*].quantity.selected.count","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM","attr":"$.message.order.items[*].xinput.form.id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE","attr":"$.message.order.items[*].xinput.form_response.status","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]},{"_NAME_":"REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION","attr":"$.message.order.items[*].xinput.form_response.submission_id","_RETURN_":"attr are present","usecasepath":"$._EXTERNAL._SELF.message.order.items[*].xinput.form.id","action":["select"]}]},{"_NAME_":"SELECT_FULLFILLMENTS","action":["select"],"_RETURN_":[{"_NAME_":"REQUIRED_FULFILLMENT","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_ID","attr":"$.message.order.fulfillments[*].id","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","_RETURN_":"attr are present","action":["select"]},{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","_RETURN_":"attr are present","action":["select"]}]},{"_NAME_":"ENUM_FULFILLMENT","_RETURN_":[{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_STOPS","attr":"$.message.order.fulfillments[*].stops[*].type","enumList":["START"],"_RETURN_":"attr all in enumList","action":["select"]},{"_NAME_":"REQUIRED_ORDER_FULFILLMENT_TIME","attr":"$.message.order.fulfillments[*].stops[*].time.timestamp","reg":["^\\\\d{4}-\\\\d{2}-\\\\d{2}T\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d{3}Z$"],"_RETURN_":"attr follow regex reg","action":["select"]}]}]},{"_NAME_":"SELECT_PROVIDER","action":["select"],"_RETURN_":[{"_NAME_":"REQUIRED_ORDER_PROVIDER","attr":"$.message.order.provider.id","_RETURN_":"attr are present","action":["select"]}]}]}
`,
            },
        },
        ...subResults,
    ];
}
