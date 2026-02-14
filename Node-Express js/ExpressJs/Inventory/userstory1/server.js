const express = require("express")
const app = express()

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
  next()
})

app.get("/", (req, res) => {
  res.send("User Story 1: Request Logging")
})

app.listen(3000, () => console.log("UserStory1 running"))
