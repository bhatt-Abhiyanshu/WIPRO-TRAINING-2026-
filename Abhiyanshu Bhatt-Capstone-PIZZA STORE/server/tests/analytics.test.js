const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Order = require("../models/Order");
const analyticsService = require("../services/analyticsService");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

test("should calculate monthly revenue", async () => {
  await Order.create({
    user: new mongoose.Types.ObjectId(),
    items: [],
    totalAmount: 1000,
    status: "Delivered",
    paymentStatus: "Paid"
  });

  const revenue = await analyticsService.calculateMonthlyRevenue();
  expect(revenue.length).toBeGreaterThan(0);
  expect(revenue[0].totalRevenue).toBe(1000);
});
