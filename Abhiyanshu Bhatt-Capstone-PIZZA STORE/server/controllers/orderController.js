const orderService = require("../services/orderService");

exports.placeOrder = async (req, res, next) => {
  try {
    const order = await orderService.placeOrder(req.user.id, req.body);
    res.status(201).json({id:order._id});
  } catch (error) {
    next(error);
  }
};

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await orderService.getOrders(req.user);
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

exports.updateOrderStatus = async (req, res, next) => {
  try {
    const order = await orderService.updateOrderStatus(req.params.id, req.body.status);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

exports.cancelOrder = async (req, res, next) => {
  try {
    const order = await orderService.cancelOrder(req.params.id, req.user.id);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};
