const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Order = require("../models/Order");
const orderService = require("../services/orderService");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

test("should not allow empty order", async () => {
  await expect(
    orderService.placeOrder(new mongoose.Types.ObjectId(), { items: [] })
  ).rejects.toThrow();
});
