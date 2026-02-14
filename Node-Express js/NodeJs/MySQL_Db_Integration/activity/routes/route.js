const express = require("express");
const { body } = require("express-validator");
const controller = require("../controller/controller");

const router = express.Router();

router.get("/", controller.getemployees);

router.post("/",
    [
        body("name").notEmpty().withMessage("Name is required"),
        body("email").isEmail().withMessage("Invalid email format"),
        body("department").notEmpty().withMessage("Department is required")
    ],
    controller.registeremployees
);

module.exports = router;
