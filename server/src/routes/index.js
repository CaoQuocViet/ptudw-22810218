// Import Express router and product routes
const express = require("express");
const router = express.Router();
const productRouter = require("./productRouter");

// All product-related endpoints will be accessible via /api/v1/products
router.use("/products", productRouter);

module.exports = router;
