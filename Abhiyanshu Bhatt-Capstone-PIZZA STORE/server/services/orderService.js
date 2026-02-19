const Order = require("../models/Order");
const Menu = require("../models/MenuItem"); // Make sure this points to your MenuItem model

exports.placeOrder = async (userId, data) => {
  const { items, totalAmount ,deliveryMode} = data;

  if (!items || items.length === 0) {
    const error = new Error("No items to order");
    error.statusCode = 400;
    throw error;
  }

  // Validate each menu item exists
  for (const item of items) {
    const menuItem = await Menu.findById(item.menuItem); // <-- use item.menuItem
    if (!menuItem) {
      const error = new Error("Menu item not found");
      error.statusCode = 404;
      throw error;
    }
  }

  const order = await Order.create({
    user: userId,
    items: items.map(i => ({
      menuItem: i.menuItem,
      quantity: i.quantity,
      price: i.price
    })),
    totalAmount,
     deliveryMode,
    paymentStatus: "Pending",
    status: "Pending"
  });

  return order;
};

exports.getOrders = async (user) => {
  if (user.role === "admin") {
    // Admin sees all orders EXCEPT delivered ones
    return await Order.find({ status: { $ne: "Delivered" } })
      .populate("user", "name email")
      .populate("items.menuItem", "name price")
      .sort({ createdAt: -1 });
  }

  // Customer sees ALL their orders 
  return await Order.find({ user: user.id })
    .populate("items.menuItem", "name price")
    .sort({ createdAt: -1 });
};



exports.updateOrderStatus = async (orderId, status) => {
  const order = await Order.findById(orderId);
  if (!order) throw new Error("Order not found");

  order.status = status;
  await order.save();
  return order;
};

exports.cancelOrder = async (orderId, userId) => {
  const order = await Order.findById(orderId);
  if (!order) throw new Error("Order not found");
  if (order.user.toString() !== userId.toString())
    throw new Error("Unauthorized");

  order.status = "Cancelled";
  await order.save();
  return order;
};
