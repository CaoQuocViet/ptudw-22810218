const jwt = require("jsonwebtoken");
const ApiError = require("../utils/apiError");
const { User } = require("../models");
const { isTokenBlacklisted } = require("../utils/tokenBlacklist");

const authenticateToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) {
            throw new ApiError(401, "Thieu token xac thuc");
        }

        // Verify token in blacklist
        if (isTokenBlacklisted(token)) {
            throw new ApiError(401, "Token da bi thu hoi");
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET || "default_secret_key"
        );

        const user = await User.findByPk(decoded.id, {
            attributes: { exclude: ["password"] },
        })

        if (!user) {
            throw new ApiError(401, "Nguoi dung khong ton tai");
        }

        req.user = user;
        req.token = token;
        next();

    } catch (error) {
        if (error.name === "JsonWebTokenError") {
            error = new ApiError(401, "Token xac thuc khong hop le");
        } else if (error.name === "TokenExpiredError") {
            error = new ApiError(401, "Token xac thuc da het han");
        }
    }
    next(error);
};

const requireAdmin = (req, res, next) => {
    try {
        if (!req.user)
            return new ApiError(401, "Chua xac thuc nguoi dung");

        if (req.user.role !== "admin") {
            throw new ApiError(403, "Khong co quyen truy cap");
        }
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = { authenticateToken, requireAdmin };