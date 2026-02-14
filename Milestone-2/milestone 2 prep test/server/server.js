const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const Todo = require("./Todo")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/todoapp")

app.get("/todos", async (req, res) => {
  const todos = await Todo.find()
  res.json(todos)
})

app.post("/todos", async (req, res) => {
  const todo = await Todo.create(req.body)
  res.json(todo)
})

app.delete("/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id)
  res.json({ message: "deleted" })
})

app.put("/todos/:id", async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(updated)
})

app.listen(5000);
console.log("server running on port 5000");
