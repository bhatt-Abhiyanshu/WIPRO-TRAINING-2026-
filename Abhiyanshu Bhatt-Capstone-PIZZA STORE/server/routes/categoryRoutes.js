const express = require("express");
const categoryController = require("../controllers/categoryController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router
  .route("/")
  .get(categoryController.getCategories)
  .post(authMiddleware, roleMiddleware("admin"), categoryController.createCategory);

router
  .route("/:id")
  .put(authMiddleware, roleMiddleware("admin"), categoryController.updateCategory)
  .delete(authMiddleware, roleMiddleware("admin"), categoryController.deleteCategory);

module.exports = router;
