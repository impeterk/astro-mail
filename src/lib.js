import { readFile } from 'fs/promises';
import { createRequire } from 'module';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);

export async function importAndInvoke(filePath, functionName, ...args) {
    try {
        // Read the file content
        const fileContent = await readFile(filePath, 'utf-8');

        // Create a temporary module to evaluate the file content
        const module = require('vm').runInNewContext(fileContent, {
            exports: {},
            module: { exports: {} },
        });

        // Invoke the specified function if it exists
        if (typeof module.exports[functionName] === 'function') {
            return module.exports[functionName](...args);
        } else {
            throw new Error(`Function ${functionName} not found in ${filePath}`);
        }
    } catch (error) {
        console.error('Error importing or invoking function:', error);
    }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function importAndInvoke2(filePath, functionName, ...args) {
    try {
        // Convert the relative file path to an absolute URL
        const absolutePath = new URL(filePath, import.meta.url).href;

        // Dynamically import the module
        const file = await import(absolutePath);
        console.log(file)
        // Check if the function exists in the module
        if (typeof file[functionName] === 'function') {
            // Invoke the function with the provided arguments
            return file[functionName](...args);
        } else {
            throw new Error(`Function ${functionName} not found in ${filePath}`);
        }
    } catch (error) {
        console.error('Error importing or invoking function:', error);
    }
}