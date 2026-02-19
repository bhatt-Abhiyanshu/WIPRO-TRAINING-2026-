class OrderDTO {
  constructor(order) {
    this.id = order._id;
    this.user = order.user;
    this.items = order.items.map(i => ({
      menuItem: i.menuItem,
      quantity: i.quantity,
      price: i.price
    }));
    this.totalAmount = order.totalAmount;
    this.status = order.status;
    this.paymentStatus = order.paymentStatus;
    this.deliveryMode = order.deliveryMode;
    this.message = order.message;
    this.createdAt = order.createdAt;
  }
}

module.exports = OrderDTO;
