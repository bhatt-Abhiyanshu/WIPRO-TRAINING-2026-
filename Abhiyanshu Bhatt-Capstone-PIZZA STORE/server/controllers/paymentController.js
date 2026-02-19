const paymentService = require("../services/paymentService");

exports.processPayment = async (req, res, next) => {
  try {
    const payment = await paymentService.processPayment(
      req.user.id,
      req.body
    );

    res.status(200).json(payment);
  } catch (error) {
    next(error);
  }
};
