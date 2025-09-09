/**
 * Standardized API Response class
 * Provides consistent response format across all API endpoints
 */
class ApiResponse {
  /**
   * Constructor for creating standardized API responses
   * @param {number} statusCode - HTTP status code
   * @param {any} data - Response data payload
   * @param {string} message - Response message (default: "Success")
   */
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    // Automatically determine success based on status code (< 400 means success)
    this.success = statusCode < 400;
  }
}

module.exports = ApiResponse;