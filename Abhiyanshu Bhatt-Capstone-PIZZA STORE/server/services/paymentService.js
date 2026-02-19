const Payment = require("../models/Payment");
const Order = require("../models/Order");
const PaymentDTO = require("../dtos/paymentDTO");
const mockPayment = require("../utils/mockPayment");

exports.processPayment = async (userId, data) => {
  const { orderId, mode } = data;

  if (!orderId || !mode) {
    const error = new Error("OrderId and mode are required");
    error.statusCode = 400;
    throw error;
  }

  const order = await Order.findById(orderId);

  if (!order) {
    const error = new Error("Order not found");
    error.statusCode = 404;
    throw error;
  }

  if (order.user.toString() !== userId.toString()) {
    const error = new Error("Unauthorized payment attempt");
    error.statusCode = 403;
    throw error;
  }

  if (order.paymentStatus === "Paid") {
    const error = new Error("Order already paid");
    error.statusCode = 400;
    throw error;
  }

  const paymentResult = mockPayment(order.totalAmount, mode);

  const payment = await Payment.create({
    order: order._id,
    user: userId,
    amount: order.totalAmount,
    mode,
    status: paymentResult.status,
    transactionId: paymentResult.transactionId
  });

  if (paymentResult.status === "Success") {
    order.paymentStatus = "Paid";
    await order.save();
  }

  return new PaymentDTO(payment);
};
