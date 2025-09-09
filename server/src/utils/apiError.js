/**
 * Custom API Error class that extends the built-in Error class
 * Provides structured error handling with status codes and additional metadata
 */
class ApiError extends Error {
  /**
   * Constructor for creating custom API errors
   * @param {number} statusCode - HTTP status code for the error
   * @param {string} message - Error message describing what went wrong
   * @param {Array} errors - Array of specific error details (default: empty array)
   * @param {string} stack - Custom stack trace (default: auto-generated)
   */
  constructor(statusCode, message, errors = [], stack = "") {
    // Call parent Error constructor with the message
    super(message);
    
    // Set custom properties for API error handling
    this.statusCode = statusCode;
    this.data = null; // Additional data payload (if needed)
    this.message = message;
    this.success = false; 
    this.errors = errors; // Array to hold multiple error details
    
    // Handle stack trace - use custom if provided, otherwise generate automatically
    if (stack) {
      this.stack = stack;
    } else {
      // Capture stack trace, excluding this constructor from the trace
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = ApiError;
