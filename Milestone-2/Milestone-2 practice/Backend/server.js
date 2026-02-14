const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const Course = require("./Course")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/courseDB")

app.get("/courses", async (req, res) => {
  const data = await Course.find()
  res.json(data)
})

app.post("/courses", async (req, res) => {
  const course = await Course.create({ title: req.body.title })
  res.status(201).json(course)
})

app.delete("/courses/:id", async (req, res) => {
  await Course.findByIdAndDelete(req.params.id)
  res.json({ success: true })
})

app.listen(3000);
console.log("server sctive");
