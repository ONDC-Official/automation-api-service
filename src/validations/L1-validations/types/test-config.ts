import StorageInterface from "../interfaces/storage-interface";

/**
 * Configuration options for running validation routines.
 *
 * @property onlyInvalid - If true, only invalid results will be returned.
 * @property stateFullValidations - If true, enables stateful validations that may depend on previous data.
 * @property uniqueKey - Optional. A unique key for the validation instance.
 * @property store - Optional. An implementation of StorageInterface for persisting data across validations.
 * @property hideParentErrors - Optional. Hides nested error details if set to true.
 * @property _debug - Optional. Enables debug mode for additional diagnostic information.
 */
export interface ValidationConfig {
    stateFullValidations: boolean;
    uniqueKey?: string;
    store?: StorageInterface;
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

export type ExternalData = {
    _SELF?: any;
};

export type validationInput = {
    payload: any;
    externalData: ExternalData;
    config: ValidationConfig;
};

export type testFunctionArray = Array<
    (input: validationInput) => validationOutput
>;
