const express = require("express");
const session = require("express-session");
const sequelize = require("./backend/db/connection");
const cors = require("cors");

const User = require("./backend/models/User");
const Instructor = require("./backend/models/Instructor");
const Student = require("./backend/models/Student");
const Profile = require("./backend/models/Profile");
const Course = require("./backend/models/Course");
const Enrollment = require("./backend/models/Enrollment");

const authRoutes = require("./backend/routes/authRoutes");
const adminRoutes = require("./backend/routes/adminRoutes");
const instructorRoutes = require("./backend/routes/instructorRoutes");
const reportRoutes = require("./backend/routes/reportRoutes");

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

app.use(session({
  secret: "academy-secret",
  resave: false,
  saveUninitialized: false
}));

// ------------------ RELATIONSHIPS ------------------

Student.hasOne(Profile);
Profile.belongsTo(Student);

Instructor.hasMany(Course);
Course.belongsTo(Instructor);

Student.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(Student, { through: Enrollment });

// ---------------------------------------------------

app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/instructor", instructorRoutes);
app.use("/reports", reportRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log("Database connected");
  app.listen(5000, () => console.log("Server running on port 5000"));
});
