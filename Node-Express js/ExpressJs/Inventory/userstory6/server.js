const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");

const User = require("./models/User");
const auth = require("./middleware/auth");
const authorize = require("./middleware/authorize");

const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* ---------- DATABASE ---------- */
mongoose
  .connect("mongodb://127.0.0.1:27017/inventory_userstory6")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

/* ---------- CREATE USERS ---------- */
app.get("/createuser", async (req, res) => {
  await User.deleteMany({});

  await User.create({
    username: "admin",
    password: await bcrypt.hash("admin123", 10),
    role: "admin"
  });

  await User.create({
    username: "user",
    password: await bcrypt.hash("user123", 10),
    role: "user"
  });

  res.send("Users created");
});

/* ---------- LOGIN PAGE ---------- */
app.get("/", (req, res) => {
  res.render("login", { error: null });
});

/* ---------- LOGIN LOGIC ---------- */
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.render("login", { error: "All fields are required" });
  }

  const user = await User.findOne({ username });
  if (!user) {
    return res.render("login", { error: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.render("login", { error: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    "jwt_secret_key",
    { expiresIn: "1h" }
  );

  if (user.role === "admin") {
    return res.render("admin", { token });
  }

  res.send("User logged in successfully");
});

/* ---------- PROTECTED ROUTES ---------- */
app.get("/admin", auth, authorize("admin"), (req, res) => {
  res.render("admin", { token: null });
});

app.get("/user", auth, authorize("user"), (req, res) => {
  res.send("Welcome User");
});

/* ---------- SERVER ---------- */
app.listen(3000, () => {
  console.log("UserStory6 running on port 3000");
});
