import express, { json, urlencoded } from "express";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import bcrypt from "bcrypt";

import Student from "./models/Student.js";
import User from "./models/User.js";
import "./config/passport.js";
import { isLoggedIn, isAdmin } from "./middleware/auth.js";

const app = express();

mongoose.connect("mongodb://localhost:27017/admin")
  .then(async () => {
    console.log("DB connected");
    await createDefaultUsers();
  })
  .catch(err => console.error(err));

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static("publichtml"));

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

const createDefaultUsers = async () => {
  const admin = await User.findOne({ username: "abhy" });
  if (!admin) {
    const hash = await bcrypt.hash("abhy123", 10);
    await User.create({
      username: "abhy",
      password: hash,
      role: "admin"
    });
  }

  const user = await User.findOne({ username: "bhatt" });
  if (!user) {
    const hash = await bcrypt.hash("bhatt123", 10);
    await User.create({
      username: "bhatt",
      password: hash,
      role: "user"
    });
  }
};

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/access-denied"
  })
);

app.get("/admin", isLoggedIn, isAdmin, (req, res) => {
  res.send("Welcome, Admin!");
});

app.get("/access-denied", (req, res) => {
  res.send("Access Denied");
});

app.post("/students", async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ success: false });
    }
    await Student.create({ name, email });
    res.send("Student data is saved successfully");
  } catch {
    res.status(500).send("Internal server error");
  }
});

app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/login.html");
});


