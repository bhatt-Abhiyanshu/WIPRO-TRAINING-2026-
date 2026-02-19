const generateBill = (order) => {
  const billItems = order.items.map(item => ({
    name: item.menuItem.name,
    quantity: item.quantity,
    pricePerUnit: item.menuItem.price,
    total: item.price
  }));

  return {
    orderId: order._id,
    items: billItems,
    totalAmount: order.totalAmount,
    paymentStatus: order.paymentStatus,
    status: order.status,
    generatedAt: new Date()
  };
};

module.exports = generateBill;
