const express = require("express");
const analyticsController = require("../controllers/analyticsController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.get(
  "/monthly-revenue",
  authMiddleware,
  roleMiddleware("admin"),
  analyticsController.getMonthlyRevenue
);

module.exports = router;
