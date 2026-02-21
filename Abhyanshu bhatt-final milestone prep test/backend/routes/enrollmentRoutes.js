const express = require("express");
const { body } = require("express-validator");
const Enrollment = require("../models/Enrollment");
const Course = require("../models/Course");
const { validateRequest } = require("../middleware/errorMiddleware");

const router = express.Router();

router.post(
  "/",
  [body("userId").notEmpty(), body("courseId").notEmpty()],
  validateRequest,
  async (req, res, next) => {
    try {
      const { userId, courseId } = req.body;

      const courseExists = await Course.findOne({ courseId });
      if (!courseExists) {
        return res.status(400).json({
          success: false,
          data: null,
          message: "Course does not exist"
        });
      }

      const enrollment = await Enrollment.create({ userId, courseId });

      res.status(201).json({
        success: true,
        data: enrollment,
        message: "Enrollment successful"
      });
    } catch (err) {
      if (err.code === 11000) {
        return res.status(400).json({
          success: false,
          data: null,
          message: "Duplicate enrollment"
        });
      }
      next(err);
    }
  }
);

module.exports = router;
