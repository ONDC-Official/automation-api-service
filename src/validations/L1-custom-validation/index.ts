import fs from 'fs';
import path from 'path';
import logger from '../../utils/logger';

// Import validation types from L1-validations to maintain consistency
import { validationInput, validationOutput } from '../L1-validations/types/test-config';

// Map of validation modules (each containing a performL1CustomValidation function)
const validationModules: Record<string, any> = {};

// Dynamically load all validation modules from this directory
const loadValidationModules = () => {
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
          
          // Check if it exports the performL1CustomValidation function
          if (typeof validationModule.performL1CustomValidation === 'function') {
            // Add to modules map with the filename as key (without extension)
            const moduleName = file.replace(/\.(js|ts)$/, '');
            validationModules[moduleName] = validationModule;
            logger.info(`Loaded custom L1 validation module: ${moduleName}`);
          }
        } catch (error) {
          logger.error(`Error loading validation module from ${file}:`, error);
        }
      }
    }
    
    if (Object.keys(validationModules).length > 0) {
      logger.info(`Loaded ${Object.keys(validationModules).length} custom L1 validation modules`);
    }
  } catch (error) {
    logger.error('Error loading custom L1 validation modules:', error);
  }
};

// Load all validation modules when this module is imported
loadValidationModules();

/**
 * Perform custom L1 validations
 * @param action The API action (e.g., 'search', 'select')
 * @param payload The request payload
 * @param allErrors Whether to run all validations or stop at first error
 * @param externalData Additional data for validation
 * @returns Array of validation results
 */
export function performL1CustomValidations(
  action: string,
  payload: any,
  allErrors = false,
  externalData = {}
): validationOutput {
  logger.info(`Running custom L1 validations for action: ${action}`);
  
  // Create the validation input object
  const input: validationInput = {
    payload,
    externalData,
    config: {
      runAllValidations: allErrors
    }
  };
  
  // Initialize with a valid result
  let results: validationOutput = [{ valid: true, code: 200 }];
  
  // Execute each validation module
  for (const [moduleName, module] of Object.entries(validationModules)) {
    try {
      const moduleResults: validationOutput = module.performL1CustomValidation(input);
      
      // Check if any validation failed
      const failedResults = moduleResults.filter(result => !result.valid);
      
      if (failedResults.length > 0) {
        // If any validation failed, return those results
        results = failedResults;
        
        // If not running all validations, return on first failure
        if (!allErrors) {
          logger.error(`Custom L1 validation failed in module ${moduleName}: ${failedResults[0].description}`);
          return failedResults;
        }
      }
    } catch (error: unknown) {
      logger.error(`Error in custom L1 validation module ${moduleName}:`, error);
      // Return an error result
      return [{
        valid: false,
        code: 500,
        description: `Internal error in custom validation module ${moduleName}: ${error instanceof Error ? error.message : String(error)}`
      }];
    }
  }
  
  return results;
} 