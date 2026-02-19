const express = require("express");
const authController = require("../controllers/authController");
const validateMiddleware = require("../middleware/validateMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/register",
  validateMiddleware(["name", "email", "password"]),
  authController.register
);

router.post(
  "/login",
  validateMiddleware(["email", "password"]),
  authController.login
);
router.get("/admin", authMiddleware, authController.getAdmin);
router.get("/users", authMiddleware, authController.getAllUsers);
module.exports = router;
