const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");
const { authenticateToken, requireAdmin } = require("../middlewares/authMiddleware");

router.get("/", controller.getAllProducts);
router.get("/:id", controller.getProductById);
router.post("/", authenticateToken, controller.createProduct);
router.put("/:id", authenticateToken, controller.updateProduct);
router.delete("/:id", authenticateToken, requireAdmin, controller.deleteProduct);

module.exports = router;
