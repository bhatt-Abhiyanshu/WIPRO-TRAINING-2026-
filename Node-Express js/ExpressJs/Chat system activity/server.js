const express = require("express")
const http = require("http")
const socketIO = require("socket.io")
const multer = require("multer")
const path = require("path")

const auth = require("./middleware/auth")
const role = require("./middleware/role")
const rateLimit = require("./middleware/rateLimit")

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.json({ limit: "1mb", type: "application/json" }))

app.use(express.static("pages"))
app.use("/uploads", express.static("uploads"))

let chat = []

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/pages/login.html")
})

app.post("/login", auth, (req, res) => {
  res.json({ role: req.user.role })
})

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (_, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname))
})

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = [
      "image/jpeg",
      "image/png",
      "application/pdf"
    ]
    allowed.includes(file.mimetype)
      ? cb(null, true)
      : cb(new Error("Invalid file type"))
  }
})



app.post("/upload",auth,role("admin"),rateLimit("upload"),upload.single("file"),(req, res) => 
  {
    chat.push({ type: "file", value: req.file.filename })
    io.emit("update", chat)
    res.sendStatus(200)
  }
)
const socketLimits = {}

io.on("connection", socket => {
  socket.on("register", role => {
    socket.role = role
    socket.emit("update", chat)
  })

  socket.on("chatMessage", msg => {
    if (socket.role !== "admin") return

    const now = Date.now()
    socketLimits[socket.id] = socketLimits[socket.id] || []
    socketLimits[socket.id] = socketLimits[socket.id].filter(
      t => now - t < 5000
    )

    if (socketLimits[socket.id].length >= 5) return

    socketLimits[socket.id].push(now)
    chat.push({ type: "text", value: msg })
    io.emit("update", chat)
  })
})

server.listen(5001);
console.log("Server running on 5001");
