const authService = require("../services/authService");
const User = require("../models/User");
exports.register = async (req, res, next) => {
  try {
    const result = await authService.register(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
exports.getAdmin = async (req, res, next) => {
  try {
    const admin = await User.findOne({ role: "admin" })
      .select("_id name email");

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json(admin);
  } catch (error) {
    next(error);
  }
};
exports.getAllUsers = async (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const users = await User.find({ role: "customer" })
      .select("_id name email");

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

