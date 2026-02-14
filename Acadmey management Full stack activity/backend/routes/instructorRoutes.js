const express = require("express");
const Course = require("../models/Course");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/my-courses", auth, role("instructor"), async (req, res) => {
  const courses = await Course.findAll({
    where: { InstructorId: req.session.user.id }
  });

  res.json(courses);
});

module.exports = router;
