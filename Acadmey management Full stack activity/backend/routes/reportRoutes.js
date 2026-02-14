const express = require("express");
const sequelize = require("../db/connection");
const Course = require("../models/Course");
const Student = require("../models/Student");
const Instructor = require("../models/Instructor");

const router = express.Router();

router.get("/students-per-course", async (req, res) => {
  const result = await Course.findAll({
    attributes: [
      "title",
      [sequelize.fn("COUNT", sequelize.col("Students.id")), "totalStudents"]
    ],
    include: { model: Student, attributes: [] },
    group: ["Course.id"]
  });

  res.json(result);
});

module.exports = router;
