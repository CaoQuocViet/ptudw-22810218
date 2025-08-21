const models = {};

// Products data - 10 sản phẩm mẫu
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    description: "Latest Apple smartphone with advanced camera system",
    price: 999.99,
    categoryId: 1
  },
  {
    id: 2,
    name: "MacBook Air M2",
    description: "Lightweight laptop with powerful M2 chip",
    price: 1199.99,
    categoryId: 1
  },
  {
    id: 3,
    name: "Nike Air Max",
    description: "Comfortable running shoes with air cushioning",
    price: 129.99,
    categoryId: 2
  },
  {
    id: 4,
    name: "Levi's Jeans",
    description: "Classic blue denim jeans for everyday wear",
    price: 79.99,
    categoryId: 2
  },
  {
    id: 5,
    name: "The Art of Programming",
    description: "Comprehensive guide to software development",
    price: 49.99,
    categoryId: 3
  },
  {
    id: 6,
    name: "Data Science Handbook",
    description: "Complete guide to data analysis and machine learning",
    price: 39.99,
    categoryId: 3
  },
  {
    id: 7,
    name: "Garden Tool Set",
    description: "Complete set of essential gardening tools",
    price: 89.99,
    categoryId: 4
  },
  {
    id: 8,
    name: "Smart LED Bulbs",
    description: "WiFi-enabled smart bulbs with color control",
    price: 19.99,
    categoryId: 4
  },
  {
    id: 9,
    name: "Yoga Mat",
    description: "Premium non-slip yoga mat for home workouts",
    price: 29.99,
    categoryId: 5
  },
  {
    id: 10,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: 199.99,
    categoryId: 1
  }
];

// Assign data to models
models.Product = products;

module.exports = models;
