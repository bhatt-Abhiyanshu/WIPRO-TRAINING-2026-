const express = require("express");
const orderController = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/", authMiddleware, (req, res, next) => {
  next();
},orderController.placeOrder);
router.get("/", authMiddleware, orderController.getOrders);

router.put(
  "/:id/status",
  authMiddleware,
  roleMiddleware("admin"),
  orderController.updateOrderStatus
);

router.put("/:id/cancel", authMiddleware, orderController.cancelOrder);

module.exports = router;
