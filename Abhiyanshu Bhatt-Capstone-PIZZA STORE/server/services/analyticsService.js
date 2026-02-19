const Order = require("../models/Order");

exports.calculateMonthlyRevenue = async () => {
  const revenue = await Order.aggregate([
    {
      $match: {
        paymentStatus: "Paid",
        status: { $ne: "Cancelled" }
      }
    },
    {
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" }
        },
        totalRevenue: { $sum: "$totalAmount" },
        totalOrders: { $sum: 1 }
      }
    },
    { $sort: { "_id.year": 1, "_id.month": 1 } }
  ]);

  const totalRevenue = revenue.reduce((acc, r) => acc + r.totalRevenue, 0);
  const totalOrders = revenue.reduce((acc, r) => acc + r.totalOrders, 0);

  return { totalRevenue, totalOrders, monthlyRevenue: revenue };
};
