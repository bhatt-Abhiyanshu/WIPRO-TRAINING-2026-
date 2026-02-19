const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Order = require("../models/Order");
const paymentService = require("../services/paymentService");

let mongoServer;
let order;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());

  order = await Order.create({
    user: new mongoose.Types.ObjectId(),
    items: [],
    totalAmount: 500,
    status: "Delivered",
    paymentStatus: "Pending"
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

test("should process payment", async () => {
  const result = await paymentService.processPayment(order.user, {
    orderId: order._id,
    mode: "COD"
  });

  expect(result.status).toBeDefined();
});
