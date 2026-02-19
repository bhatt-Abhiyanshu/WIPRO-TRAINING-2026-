const express = require("express");
const menuItemController = require("../controllers/menuItemController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router
  .route("/")
  .get(menuItemController.getMenuItems)
  .post(authMiddleware, roleMiddleware("admin"), menuItemController.createMenuItem);

router
  .route("/:id")
  .put(authMiddleware, roleMiddleware("admin"), menuItemController.updateMenuItem)
  .delete(authMiddleware, roleMiddleware("admin"), menuItemController.deleteMenuItem);

module.exports = router;
