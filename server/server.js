// Load environment variables from .env file
require("dotenv").config();

// Import the Express application from app.js
const app = require("./src/app");

// Set the port from environment variable or default to 3000
const port = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is runing on port ${port}: http://localhost:${port}`);
});

// Alternative single-line server startup (commented out)
// app.listen(port, () => { console.log(`Server is running on port ${port}: http://localhost:${port}`); }); 