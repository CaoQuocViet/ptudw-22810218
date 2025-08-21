const controller = {};
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");
const { Product } = require("../models");

controller.getAllProducts = (req, res) => {
  let { search, categoryId, minPrice, maxPrice } = req.query;
  let products = Product;

  // Loc theo search
  if (search) {
    products = products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Loc theo categoryId
  if (categoryId) {
    if (isNaN(categoryId)) {
      throw new ApiError(400, "categoryId phai la so nguyen");
    }
    categoryId = parseInt(categoryId);
    products = products.filter((product) => product.categoryId === categoryId);
  }

  // Loc theo gia
  if (minPrice) {
    if (isNaN(minPrice)) {
      throw new ApiError(400, "minPrice phai la so thuc");
    }
    minPrice = parseFloat(minPrice);
    products = products.filter((product) => product.price >= minPrice);
  }

  if (maxPrice) {
    if (isNaN(maxPrice)) {
      throw new ApiError(400, "maxPrice phai la so thuc");
    }
    maxPrice = parseFloat(maxPrice);
    products = products.filter((product) => product.price <= maxPrice);
  }

  if (products.length === 0) {
    throw new ApiError(404, "Khong tim thay san pham nao");
  }

  const responseData = {
    products: products,
    filters: {
      search: search || null,
      categoryId: categoryId || null,
      minPrice: minPrice || null,
      maxPrice: maxPrice || null,
    },
  };

  res
    .status(200)
    .json(new ApiResponse(200, responseData, "Tim danh sach san pham thanh cong"));
};

controller.getProductById = (req, res) => {
  let { id } = req.params;
  
  if (isNaN(id)) {
    throw new ApiError(400, "ID phai la so nguyen");
  }
  
  id = parseInt(id);
  const product = Product.find((product) => product.id === id);
  
  if (!product) {
    throw new ApiError(400, "Khong tim thay san pham");
  }
  
  res.status(200).json(new ApiResponse(200, product, "Tim san pham thanh cong"));
};

controller.createProduct = (req, res) => {
  const { name, description, price, categoryId } = req.body;

  if (!name || !description || !price || !categoryId) {
    throw new ApiError(400, "Thieu thuoc tinh");
  }

  if (isNaN(price)) {
    throw new ApiError(400, "Gia phai la so thuc");
  }

  if (isNaN(categoryId)) {
    throw new ApiError(400, "Category ID phai la so nguyen");
  }

  const newProduct = {
    id: Product.length + 1,
    name,
    description,
    price,
    categoryId,
  };

  Product.push(newProduct);
  res
    .status(201)
    .json(new ApiResponse(201, newProduct, "Them san pham thanh cong"));
};

controller.updateProduct = (req, res) => {
  let { id } = req.params;
  
  if (isNaN(id)) {
    throw new ApiError(400, "id phai la so nguyen");
  }
  
  id = parseInt(id);
  const product = Product.find((product) => product.id === id);
  
  if (!product) {
    throw new ApiError(400, "Khong tim thay san pham");
  }

  const { name, description, price, categoryId } = req.body;

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

  res.json(new ApiResponse(200, product, "Cap nhat san pham thanh cong"));
};

controller.deleteProduct = (req, res) => {
  let { id } = req.params;

  if (isNaN(id)) {
    throw new ApiError(400, "id phai la so nguyen");
  }
  
  id = parseInt(id);
  const index = Product.findIndex((product) => product.id === id);
  
  if (index === -1) {
    throw new ApiError(404, "Khong tim thay san pham");
  }

  Product.splice(index, 1);
  res.json(new ApiResponse(204, null, "Xoa san pham thanh cong"));
};

module.exports = controller;
