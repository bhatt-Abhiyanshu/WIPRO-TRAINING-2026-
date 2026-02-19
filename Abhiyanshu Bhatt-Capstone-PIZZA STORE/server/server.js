const http = require("http");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { Server } = require("socket.io");

const app = require("./app");
const connectDB = require("./config/db");
const Message = require("./models/Message");

dotenv.config();

const PORT = process.env.PORT || 5000;
connectDB();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

//CHAT SOCKET 
io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  // User/Admin joins
  socket.on("join", (userId) => {
    socket.join(userId);
    console.log(`User joined room: ${userId}`);
  });

  // Send message
  socket.on("sendMessage", async ({ senderId, receiverId, message }) => {
    try {
      if (!senderId || !receiverId || !message) return;

      // Save message to DB
      const newMessage = await Message.create({
        sender: senderId,
        receiver: receiverId,
        message,
      });
      const populatedMessage = await newMessage.populate(
      "sender receiver",
      "name role"
    );
      // Emit to receiver
      io.to(receiverId).emit("receiveMessage", newMessage);

      // Emit back to sender
      io.to(senderId).emit("receiveMessage", newMessage);

    } catch (error) {
      console.error("Socket sendMessage error:", error.message);
    }
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION:", err.message);
  server.close(() => {
    process.exit(1);
  });
});
