const express = require("express")
const app = express()

function auth(req, res, next) {
  const token = req.headers.authorization
  if (token !== "secret") {
    return res.status(401).send("Unauthorized")
  }
  next()
}

app.get("/protected", auth, (req, res) => {
  res.send("Authenticated User")
})

app.listen(3000, () => console.log("UserStory5 running"))
