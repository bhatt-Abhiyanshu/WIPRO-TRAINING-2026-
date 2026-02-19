const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../app");
const User = require("../models/User");
const { signToken } = require("../config/jwt");

let mongoServer;
let token;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());

  const admin = await User.create({
    name: "Admin",
    email: "admin@test.com",
    password: "123456",
    role: "admin"
  });

  token = signToken({ id: admin._id, role: "admin" });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

test("admin can create category", async () => {
  const res = await request(app)
    .post("/api/categories")
    .set("Authorization", `Bearer ${token}`)
    .send({ name: "Pizza", description: "Pizza Category" });

  expect(res.statusCode).toBe(201);
});
