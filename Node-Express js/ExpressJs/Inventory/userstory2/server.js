const express = require("express")
const app = express()

app.use(express.json())

function validateStudent(req, res, next) {
  const { name, email } = req.body
  if (!name || !email) {
    return res.status(400).json({ message: "Name and Email required" })
  }
  next()
}

app.post("/students", validateStudent, (req, res) => {
  res.json({ message: "Student validated successfully" })
})

app.listen(3000, () => console.log("UserStory2 running"))
