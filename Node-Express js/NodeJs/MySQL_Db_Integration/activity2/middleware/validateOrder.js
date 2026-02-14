const { body } = require("express-validator");

exports.validateOrder = [
    body("custname").notEmpty().withMessage("Customer name is required"),
    body("items").isArray({ min: 1 }).withMessage("Items must be a non-empty array"),
    body("items.*.product_id").isInt().withMessage("Product ID must be integer"),
    body("items.*.quantity").isInt({ min: 1 }).withMessage("Quantity must be at least 1")
];
