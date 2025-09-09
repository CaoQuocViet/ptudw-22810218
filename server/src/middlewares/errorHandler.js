/**
 * Centralized error handling middleware
 * Handles all errors thrown in the application and sends appropriate response to client
 */
const errorHandler = (err, req, res, next) => {
  // Extract status code from error object, default to 500 for server errors
  const statusCode = err.statusCode || err.status || 500;

  // Prepare standardized error response object
  const errorResponse = {
    statusCode: statusCode,
    message: err.message || "An unexpected error occurred",
    data: err.data || null,
    errors: err.errors || [],
    // Only include stack trace in development environment for security
    stack: process.env.NODE_ENV === "development" ? err.stack : "",
  };

  // Log error to console for server-side debugging and monitoring
  console.error(err);

  // Send error response back to client with appropriate status code
  res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;