const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../app");
const User = require("../models/User");
const Category = require("../models/Category");
const { signToken } = require("../config/jwt");

let mongoServer;
let token;
let category;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());

  const admin = await User.create({
    name: "Admin",
    email: "admin2@test.com",
    password: "123456",
    role: "admin"
  });

  token = signToken({ id: admin._id, role: "admin" });

  category = await Category.create({
    name: "Pizza",
    description: "Pizza Category"
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

test("admin can create menu item", async () => {
  const res = await request(app)
    .post("/api/menu")
    .set("Authorization", `Bearer ${token}`)
    .send({
      name: "Margherita",
      price: 299,
      description: "Classic Pizza",
      imageUrl: "http://image.com/pizza.jpg",
      category: category._id
    });

  expect(res.statusCode).toBe(201);
});
