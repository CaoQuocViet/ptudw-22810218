// Import required modules
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

// Configure CORS to allow clients from different origins to access the API
  // cau hinh CORS cho phep client tu cac nguon khac truy cap API
app.use(cors());

// Configure Morgan to log HTTP requests for debugging and monitoring
app.use(morgan("dev"));

// Configure Express to parse JSON and URL-encoded data from request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up API routes with version prefix
app.use("/api/v1", require("./routes"));

// Centralized error handling

// Handle 404 errors for requests to non-existent endpoints
app.use((req, res, next) => {
  const error = new Error("Request Not Found");
  error.statusCode = 404;
  next(error);
});

// Global error handler middleware to handle all other errors
app.use(require("./middlewares/errorHandler"));

module.exports = app;
