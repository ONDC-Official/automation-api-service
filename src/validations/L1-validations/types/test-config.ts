/**
 * Configuration options for running validation routines.
 *
 * @property onlyInvalid - If true, only invalid results will be returned.
 * @property hideParentErrors - Optional. Hides nested error details if set to true.
 * @property _debug - Optional. Enables debug mode for additional diagnostic information.
 */
export interface ValidationConfig {
    onlyInvalid: boolean;
    hideParentErrors: boolean;
    _debug: boolean;
}

/**
 * Represents the output of a validation run.
 *
 * Each element in the array corresponds to a single validation test result.
 *
 * Object shape:
 * ```ts
 * {
 *   testName: string;
 *   valid: boolean;
 *   code: number;
 *   description?: string;
 *   _debugInfo?: {
 *     fedConfig: any;
 *   };
 * }
 * ```
 *
 * ### Properties
 * - **testName** — The name of the validation test.
 * - **valid** — Whether the test passed (`true`) or failed (`false`).
 * - **code** — Numeric code representing the result or error type.
 * - **description** — *(Optional)* Additional details about the test result.
 * - **_debugInfo** — *(Optional)* Diagnostic information useful for debugging.
 *   - **fedConfig** — The configuration used to generate the validation.
 */
export type validationOutput = {
    testName: string;
    valid: boolean;
    code: number;
    description?: string;
    _debugInfo?: {
        fedConfig: any;
    };
}[];

/*
{% comment %} export type ExternalData = {
    _SELF?: string[];
}; {% endcomment %}
*/

export type ExternalData = {};

export type validationInput = {
    payload: any;
    externalData: ExternalData;
    config: ValidationConfig;
};

export type testFunctionArray = Array<
    (input: validationInput) => validationOutput
>;
