const controller = {};

const ApiError = require("../error/ApiError");
const ApiResponse = require("../response/ApiResponse");
const { User } = require("../models/User");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const { user } = require("pg/lib/defaults");
const jwt = require("jsonwebtoken");
const { addToBlacklist } = require("../utils/tokenBlacklist");

controller.register = async (req, res) => {
    const { firstName, lastName, password, confirmPassword, email, phoneNumber } = req.body;

    // Validation input data
    if (!firstName || !lastName || !password || !confirmPassword || !email) {
        throw new ApiError(400, "Thieu thong tin bat buoc");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        throw new ApiError(400, "Email khong hop le");
    }

    // Validate password length
    if (password.length < 6) {
        throw new ApiError(400, "Mat khau phai co it nhat 6 ky tu");
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
        throw new ApiError(400, "Mat khau va xac nhan mat khau khong khop");
    }

    // Check email existence
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        throw new ApiError(400, "Email da ton tai");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phoneNumber,
        role: "user",
    });

    const userResponse = { ...newUser.toJSON() };
    delete userResponse.password;

    return res.status(201).json(new ApiResponse(201, userResponse, "Dang ky thanh cong"));
};

controller.login = async (req, res) => {
    const { email, password } = req.body;

    // Validation input data
    if (!email || !password) {
        throw new ApiError(400, "Thieu thong tin bat buoc");
    }

    // Check email existence
    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new ApiError(400, "Email khong ton tai");
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new ApiError(400, "Mat khau khong chinh xac");
    }

    // Create jwt token
    const jwt = jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role,
        },
        process.env.JWT_SECRET || "default_secret_key",
        { expiresIn: "1h" }
    );

    const userResponse = { ...user.toJSON() };
    delete userResponse.password;

    return res
        .status(200)
        .json(
            new ApiResponse(200, { token: jwt }, "Dang nhap thanh cong")
        );
};

controller.logout = async (req, res) => {
    // Get token
    const token = req.token;
    if (!token) {
        addToBlacklist(token);
    }else {
        throw new ApiError(400, null, "Thieu token");
    }   

    return res.status(200).json(new ApiResponse(200, null, "Dang xuat thanh cong"));
}

module.exports = controller;