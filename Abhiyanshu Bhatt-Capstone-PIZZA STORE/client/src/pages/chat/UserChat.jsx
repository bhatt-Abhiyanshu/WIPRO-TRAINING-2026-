import React, { useEffect, useState, useContext, useRef } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "../../context/AuthContext";
import API from "../../utils/axiosConfig";

const socket = io("http://localhost:5000");

const UserChat = () => {
  const { user } = useContext(AuthContext);

  const [adminId, setAdminId] = useState("");
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const bottomRef = useRef(null);

  // Join socket + get admin
  useEffect(() => {
    if (!user) return;

    socket.emit("join", user.id);

    const fetchAdmin = async () => {
      try {
        const res = await API.get("/auth/admin");
        setAdminId(res.data._id);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAdmin();
  }, [user]);

  // Load previous messages when adminId ready
  useEffect(() => {
    if (!adminId) return;

    const fetchMessages = async () => {
      try {
        const res = await API.get(`/chat/${adminId}`);
        setMessages(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessages();
  }, [adminId]);

  // Listen for new messages
  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
      if (
        msg.sender._id === adminId ||
        msg.receiver._id === adminId
      ) {
        setMessages((prev) => [...prev, msg]);
      }
    });

    return () => socket.off("receiveMessage");
  }, [adminId]);

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!text.trim()) return;

    socket.emit("sendMessage", {
      senderId: user.id,
      receiverId: adminId,
      message: text,
    });

    setText("");
  };

  return (
    <div className="container mt-4">
      <h3>Chat with Admin</h3>

      <div
        className="border p-3 mb-3"
        style={{ height: "400px", overflowY: "auto" }}
      >
        {messages.map((m, index) => (
          <div
            key={index}
            className={`mb-2 ${
              m.sender._id === user.id ? "text-end" : "text-start"
            }`}
          >
            <span className="badge bg-secondary">{m.message}</span>
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>

      <div className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type message..."
        />
        <button className="btn btn-danger" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default UserChat;
