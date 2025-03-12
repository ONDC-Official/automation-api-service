# Custom L1 Validations

This directory contains custom L1 validation rules that extend or override the standard L1 validations.

## How to Create Custom Validations

1. Create a new TypeScript file in this directory (e.g., `my-validations.ts`)
2. Export a single function named `performL1CustomValidation` that follows this structure:

```typescript
import { validationInput, validationOutput } from '../L1-validations/types/test-config';

export function performL1CustomValidation(input: validationInput): validationOutput {
  const { payload } = input;
  const context = payload.context || {};

  // Initialize results array
  const results: validationOutput = [];

  // Perform your validations here
  if (/* your validation condition */) {
    results.push({
      valid: false,
      code: 30000, // Custom error code (30000-39999 range recommended)
      description: "Your validation error message"
    });
  }

  // If no failures were found, return a success result
  if (results.length === 0) {
    results.push({ valid: true, code: 200 });
  }

  return results;
}
```

## Input Structure

The `validationInput` object has the following properties:

- `payload`: The complete request payload
- `externalData`: Additional external data available for validation
- `config`: Configuration settings including `runAllValidations`

## Output Structure

The `validationOutput` is an array of objects, each with:

- `valid`: Boolean indicating if validation passed (true) or failed (false)
- `code`: Numeric error code (use 200 for success, 30000-39999 range for errors)
- `description`: Optional error message (use markdown for formatting)

## Best Practices

1. Create internal helper functions for specific validations
2. Check domain/action to limit validation scope
3. Use descriptive error codes and messages
4. Handle edge cases gracefully (null checks, etc.)
5. Return a valid result (code 200) when no errors are found

## Using with the Generator

Add your custom validations to `src/config/l1-exception-validations/` in your generator project.
These files will be automatically copied to this directory in the build output.

## Example

See `example-validation.ts` for a complete example showing:

1. How to structure the exported function
2. How to check domain/action to apply targeted validations
3. How to format validation error messages
4. How to return appropriate success/failure results
