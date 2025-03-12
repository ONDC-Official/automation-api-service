/**
 * Example L1 exception validation for demonstration purposes.
 * This is a placeholder and should be replaced or removed in production.
 */

/**
 * Validates that category is present in retail search requests
 */
export const validateRetailCategory = (context: any, payload: any): boolean => {
  // Only apply this validation to retail domain search actions
  if (context?.domain !== 'retail' || context?.action !== 'search') {
    return true;
  }
  
  // Check if category exists in the search intent
  const hasCategory = payload?.message?.intent?.category !== undefined;
  
  // Return validation result
  return hasCategory;
};

/**
 * Validates that location is present in food search requests
 */
export const validateFoodLocation = (context: any, payload: any): boolean => {
  // Only apply this validation to food domain search actions
  if (context?.domain !== 'food' || context?.action !== 'search') {
    return true;
  }
  
  // Check if location exists in the search intent
  const hasLocation = payload?.message?.intent?.fulfillment?.end?.location !== undefined;
  
  // Return validation result
  return hasLocation;
}; 