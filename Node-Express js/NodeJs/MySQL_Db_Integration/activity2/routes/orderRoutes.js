const express = require("express");
const { validateOrder } = require("../middleware/validateOrder");
const { placeOrder } = require("../controller/orderController");

const router = express.Router();

router.post("/", validateOrder, placeOrder);

module.exports = router;
