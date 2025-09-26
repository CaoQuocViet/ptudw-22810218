const controller = {};
const { Product, Category } = require("../models");
const apiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");
const apiResponse = require("../utils/apiResponse");

controller.getAllCategories = async (req, res) => {
    const options = {
        attributes: ["id", "name"],
        include: [{ model: Product, attributes: ["id"] }],
    };

    const categories = await Category.findAll(options);
    res
        .status(200)
        .json(new ApiResponse(
            200, categories, "Lay danh muc san pham thanh cong"
        )
    );
};

module.exports = controller;