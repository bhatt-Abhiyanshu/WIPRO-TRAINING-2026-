const express = require("express")
const morgan = require("morgan")

const app = express()
app.use(morgan("dev"))

app.get("/", (req, res) => {
  res.send("User Story 4: Morgan Logging")
})

app.listen(3000, () => console.log("UserStory4 running"))
