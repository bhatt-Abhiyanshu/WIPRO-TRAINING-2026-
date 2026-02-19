const chatService = require("../services/chatService");

exports.sendMessage = async (req, res, next) => {
  try {
    const { receiverId, message } = req.body;

    const msg = await chatService.sendMessage(
      req.user.id,
      receiverId,
      message
    );

    res.status(201).json(msg);
  } catch (error) {
    next(error);
  }
};

exports.getConversation = async (req, res, next) => {
  try {
    const messages = await chatService.getConversation(
      req.user.id,
      req.params.userId
    );

    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};
