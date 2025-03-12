import { validationInput, validationOutput } from '../L1-validations/types/test-config';
import logger from '../../utils/logger';

/**
 * Perform custom L1 validations for this module
 * @param input The validation input object
 * @returns Array of validation results
 */
export function performL1CustomValidation(input: validationInput): validationOutput {
  const { payload } = input;
  const context = payload.context || {};
  const domain = context.domain || '';
  const action = context.action || '';
  
  logger.info(`Executing example custom validations for ${domain}/${action}`);
  
  // Initialize with a valid result
  const results: validationOutput = [];
  
  // Example: Validate retail domain search requests have category field
  if (domain === 'retail' && action === 'search') {
    const hasCategory = validateRetailCategory(payload);
    if (!hasCategory) {
      results.push({
        valid: false,
        code: 30001,
        description: `- **condition CustomRetailCategoryRequired**: Retail search request must include a category in the intent`
      });
    }
  }
  
  // Example: Validate food domain search requests have delivery location
  if (domain === 'food' && action === 'search') {
    const hasLocation = validateFoodLocation(payload);
    if (!hasLocation) {
      results.push({
        valid: false,
        code: 30002,
        description: `- **condition CustomFoodLocationRequired**: Food search request must include a delivery location`
      });
    }
  }
  
  // If no issues found, return a success result
  if (results.length === 0) {
    results.push({ valid: true, code: 200 });
  }
  
  return results;
}

/**
 * Validate that retail search requests include a category
 * @param payload The request payload
 * @returns True if validation passes, false if it fails
 */
function validateRetailCategory(payload: any): boolean {
  // Check if category exists in the search intent
  return payload?.message?.intent?.category !== undefined;
}

/**
 * Validate that food search requests include a delivery location
 * @param payload The request payload
 * @returns True if validation passes, false if it fails
 */
function validateFoodLocation(payload: any): boolean {
  // Check if location exists in the search intent
  return payload?.message?.intent?.delivery?.location !== undefined;
} 