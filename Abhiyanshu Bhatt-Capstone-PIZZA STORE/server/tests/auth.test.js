const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../app");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

test("should register user", async () => {
  const res = await request(app).post("/api/auth/register").send({
    name: "Test User",
    email: "test@example.com",
    password: "123456"
  });

  expect(res.statusCode).toBe(201);
  expect(res.body.token).toBeDefined();
});
