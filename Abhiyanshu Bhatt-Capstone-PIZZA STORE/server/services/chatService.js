const Message = require("../models/Message");
const User = require("../models/User");

exports.sendMessage = async (senderId, receiverId, text) => {
  const sender = await User.findById(senderId);
  const receiver = await User.findById(receiverId);

  if (!receiver) throw new Error("Receiver not found");

  
  if (sender.role === "customer" && receiver.role !== "admin") {
    throw new Error("Users can only contact admin");
  }

  if (sender.role === "admin" && receiver.role === "admin") {
    throw new Error("Admin cannot message another admin");
  }

  const message = await Message.create({
    sender: senderId,
    receiver: receiverId,
    message: text
  });

return await message.populate("sender receiver", "name role");};

exports.getConversation = async (userId1, userId2) => {
  return await Message.find({
    $or: [
      { sender: userId1, receiver: userId2 },
      { sender: userId2, receiver: userId1 }
    ]
  })
    .populate("sender", "name role")
    .populate("receiver", "name role")
    .sort({ createdAt: 1 });
};
