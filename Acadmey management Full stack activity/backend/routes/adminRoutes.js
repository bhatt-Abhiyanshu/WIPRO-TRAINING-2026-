const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Instructor = require("../models/Instructor");
const Course = require("../models/Course");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/create-instructor", auth, role("admin"), async (req, res) => {
  const { username, password, name } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    password: hashed,
    role: "instructor"
  });

  await Instructor.create({
    name,
    UserId: user.id
  });

  res.json({ message: "Instructor created" });
});

router.post("/create-course", auth, role("admin"), async (req, res) => {
  const { title, fee, instructorId } = req.body;

  await Course.create({
    title,
    fee,
    InstructorId: instructorId
  });

  res.json({ message: "Course created" });
});

module.exports = router;
