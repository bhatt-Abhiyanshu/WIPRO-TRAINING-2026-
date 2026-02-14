const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/submit", (req, res) => {
  res.json(req.body)
})

app.listen(3000, () => console.log("UserStory3 running"))
