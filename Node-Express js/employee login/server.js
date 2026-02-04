const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Route to handle form submission
app.post("/login", (req, res) => {
  const { name, salary } = req.body;

  const dateTime = new Date().toLocaleString();
  const logData = `Name: ${name}, Salary: ${salary}, DateTime: ${dateTime}\n`;

  fs.appendFile("logs.txt", logData, (err) => {
    if (err) {
      return res.send("Error saving data");
    }
    res.send("Employee data saved successfully");
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
