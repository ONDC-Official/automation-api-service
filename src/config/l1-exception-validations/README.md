# Custom L1 Exception Validations

This directory contains custom L1 exception validation rules that override or supplement the standard L1 validations.

## How to Add Custom Validations

Create a new TypeScript file in this directory with your validation functions. Each function should accept context and payload parameters and return a boolean value:

```typescript
export const myCustomValidation = (context: any, payload: any): boolean => {
  // Your custom validation logic here
  // Return true if validation passes, false if it fails

  // Example: Check if a required field exists in retail domain search
  if (context.domain === "retail" && context.action === "search") {
    return payload.message?.intent?.category !== undefined;
  }

  // For other actions/domains, validation passes
  return true;
};
```

## Usage

All custom validation functions in this directory are automatically discovered and executed during the L1 validation phase. If any custom validation returns `false`, the request will be rejected.

## Best Practices

1. Name your validation functions clearly to describe what they validate
2. Include domain/action checks to limit where validations apply
3. Keep validations focused on specific business requirements
4. Handle edge cases gracefully (null checks, etc.)
5. Return `true` for cases where validation should not apply

Your validations will be automatically integrated without modifying any core code.
