const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const User = require("./models/User");

const app = express();

app.set("view engine", "ejs");

mongoose
  .connect("mongodb://localhost:27017/authdb")
  .then(() => console.log("Db connected"))
  .catch(err => console.error(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: "sample-secretkey",
  resave: false,
  saveUninitialized: false
}));

app.get("/demouser", async (req, res) => {
  await User.create({ username: "abhy", password: "1234" });
  res.send("user created");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password
  });

  if (!user) return res.send("invalid credentials");

  req.session.user = user;
  res.redirect("/dashboard");
});

app.get("/dashboard", (req, res) => {
  if (!req.session.user) return res.redirect("/login");
  res.render("dashboard", { user: req.session.user });
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

app.listen(3000, () => {
  console.log("server started on http://localhost:3000");
});

