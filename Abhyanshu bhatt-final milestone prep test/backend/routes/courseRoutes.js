const express = require("express");
const { body } = require("express-validator");
const Course = require("../models/Course");
const { validateRequest } = require("../middleware/errorMiddleware");

const router = express.Router();

router.post(
  "/",
  [
    body("courseId").notEmpty(),
    body("title").notEmpty(),
    body("category").notEmpty(),
    body("price").isFloat({ min: 0 })
  ],
  validateRequest,
  async (req, res, next) => {
    try {
      const course = await Course.create(req.body);

      res.status(201).json({
        success: true,
        data: course,
        message: "Course created successfully"
      });
    } catch (err) {
      next(err);
    }
  }
);

router.get("/", async (req, res, next) => {
  try {
    const courses = await Course.find();

    res.json({
      success: true,
      data: courses,
      message: "Courses fetched successfully"
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
