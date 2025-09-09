// Initialize controller object to hold all product-related controller functions
const controller = {};

// Import utility classes for error and response handling
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");

// Import Product model for data access
const { Product } = require("../models");

/**
 * Get all products with optional filtering
 * Supports filtering by search term, category ID, and price range
 */
controller.getAllProducts = (req, res) => {
  // Extract query parameters for filtering
  let { search, categoryId, minPrice, maxPrice } = req.query;
  let products = Product;

  // Filter by search term (searches in both name and description)
  if (search) {
    products = products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Filter by category ID
  if (categoryId) {
    if (isNaN(categoryId)) {
      throw new ApiError(400, "categoryId phai la so nguyen");
    }
    categoryId = parseInt(categoryId);
    products = products.filter((product) => product.categoryId === categoryId);
  }

  // Filter by minimum price
  if (minPrice) {
    if (isNaN(minPrice)) {
      throw new ApiError(400, "minPrice phai la so thuc");
    }
    minPrice = parseFloat(minPrice);
    products = products.filter((product) => product.price >= minPrice);
  }

  // Filter by maximum price
  if (maxPrice) {
    if (isNaN(maxPrice)) {
      throw new ApiError(400, "maxPrice phai la so thuc");
    }
    maxPrice = parseFloat(maxPrice);
    products = products.filter((product) => product.price <= maxPrice);
  }

  // Check if any products match the filters
  if (products.length === 0) {
    throw new ApiError(404, "Khong tim thay san pham nao");
  }

  // Prepare response data with products and applied filters
  const responseData = {
    products: products,
    filters: {
      search: search || null,
      categoryId: categoryId || null,
      minPrice: minPrice || null,
      maxPrice: maxPrice || null,
    },
  };

  // Send successful response with filtered products
  res
    .status(200)
    .json(new ApiResponse(200, responseData, "Tim danh sach san pham thanh cong"));
};

/**
 * Get a single product by its ID
 */
controller.getProductById = (req, res) => {
  // Extract and validate product ID from URL parameters
  let { id } = req.params;
  
  if (isNaN(id)) {
    throw new ApiError(400, "ID phai la so nguyen");
  }
  
  id = parseInt(id);
  
  // Find the product with the specified ID
  const product = Product.find((product) => product.id === id);
  
  // Check if product exists
  if (!product) {
    throw new ApiError(400, "Khong tim thay san pham");
  }
  
  // Send successful response with the found product
  res.status(200).json(new ApiResponse(200, product, "Tim san pham thanh cong"));
};

/**
 * Create a new product
 */
controller.createProduct = (req, res) => {
  // Extract product data from request body
  const { name, description, price, categoryId } = req.body;

  // Validate required fields
  if (!name || !description || !price || !categoryId) {
    throw new ApiError(400, "Thieu thuoc tinh");
  }

  // Validate price is a number
  if (isNaN(price)) {
    throw new ApiError(400, "Gia phai la so thuc");
  }

  // Validate category ID is a number
  if (isNaN(categoryId)) {
    throw new ApiError(400, "Category ID phai la so nguyen");
  }

  // Create new product object with auto-generated ID
  const newProduct = {
    id: Product.length + 1,
    name,
    description,
    price,
    categoryId,
  };

  // Add the new product to the products array
  Product.push(newProduct);
  
  // Send successful response with the created product
  res
    .status(201)
    .json(new ApiResponse(201, newProduct, "Them san pham thanh cong"));
};

/**
 * Update an existing product by ID
 */
controller.updateProduct = (req, res) => {
  // Extract and validate product ID from URL parameters
  let { id } = req.params;
  
  if (isNaN(id)) {
    throw new ApiError(400, "id phai la so nguyen");
  }
  
  id = parseInt(id);
  
  // Find the product to update
  const product = Product.find((product) => product.id === id);
  
  if (!product) {
    throw new ApiError(400, "Khong tim thay san pham");
  }

  // Extract update data from request body
  const { name, description, price, categoryId } = req.body;

  // Update product fields if provided
  if (name) {
    product.name = name;
  }
  if (description) {
    product.description = description;
  }
  if (price) {
    if (isNaN(price)) {
      throw new ApiError(400, "Gia phai la so thuc");
    }
    product.price = price;
  }
  if (categoryId) {
    if (isNaN(categoryId)) {
      throw new ApiError(400, "categoryId phai la so nguyen");
    }
    product.categoryId = categoryId;
  }

  // Send successful response with updated product
  res.json(new ApiResponse(200, product, "Cap nhat san pham thanh cong"));
};

/**
 * Delete a product by ID
 */
controller.deleteProduct = (req, res) => {
  // Extract and validate product ID from URL parameters
  let { id } = req.params;

  if (isNaN(id)) {
    throw new ApiError(400, "id phai la so nguyen");
  }
  
  id = parseInt(id);
  
  // Find the index of the product to delete
  const index = Product.findIndex((product) => product.id === id);
  
  if (index === -1) {
    throw new ApiError(404, "Khong tim thay san pham");
  }

  // Remove the product from the array
  Product.splice(index, 1);
  
  // Send successful response indicating deletion
  res.json(new ApiResponse(204, null, "Xoa san pham thanh cong"));
};

// Export the controller object with all methods
module.exports = controller;
