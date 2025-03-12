import fs from 'fs';
import path from 'path';
import logger from '../../utils/logger';

// Interface for validation function
export interface L1ExceptionValidationFn {
  (context: any, payload: any): boolean | Promise<boolean>;
}

// Map of validation functions
const validationFunctions: Record<string, L1ExceptionValidationFn> = {};

// Dynamically load all validation functions from this directory
const loadValidations = () => {
  try {
    const directoryPath = __dirname;
    const files = fs.readdirSync(directoryPath);
    
    for (const file of files) {
      // Skip non-js/ts files, README, and this index file
      if (
        (file.endsWith('.js') || file.endsWith('.ts')) && 
        file !== 'index.js' && 
        file !== 'index.ts' && 
        !file.endsWith('.d.ts') &&
        !file.endsWith('.map')
      ) {
        try {
          // Import the file
          const validationModule = require(path.join(directoryPath, file));
          
          // Get all exported functions
          Object.keys(validationModule).forEach(key => {
            if (typeof validationModule[key] === 'function') {
              validationFunctions[key] = validationModule[key];
              logger.info(`Loaded L1 exception validation: ${key}`);
            }
          });
        } catch (error) {
          logger.error(`Error loading validation from ${file}:`, error);
        }
      }
    }
    
    if (Object.keys(validationFunctions).length > 0) {
      logger.info(`Loaded ${Object.keys(validationFunctions).length} custom L1 exception validations`);
    }
  } catch (error) {
    logger.error('Error loading L1 exception validations:', error);
  }
};

// Load all validations when this module is imported
loadValidations();

/**
 * Perform L1 exception validations
 * @param context The request context
 * @param payload The request payload
 * @returns True if all validations pass, or no validations exist for this context
 */
export const performL1ExceptionsValidations = async (context: any, payload: any): Promise<boolean> => {
  // If we have no validations, return true
  if (Object.keys(validationFunctions).length === 0) {
    return true;
  }

  const domain = context?.domain;
  const action = context?.action;
  
  // Log the validation being performed
  logger.info(`Performing ${Object.keys(validationFunctions).length} L1 exception validations for ${domain}/${action}`);

  // Run all validation functions
  for (const [name, validationFn] of Object.entries(validationFunctions)) {
    try {
      const result = await Promise.resolve(validationFn(context, payload));
      if (!result) {
        logger.error(`L1 exception validation failed: ${name}`);
        return false;
      }
    } catch (error) {
      logger.error(`Error in L1 exception validation ${name}:`, error);
      return false;
    }
  }
  
  logger.info(`All L1 exception validations passed for ${domain}/${action}`);
  return true;
}; 