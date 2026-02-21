const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const chai = require("chai");
const expect = chai.expect;

const app = require("../app");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");

let mongoServer;

describe("Enrollment API", function () {

  before(async function () {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
  });

  after(async function () {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  beforeEach(async function () {
    await Course.deleteMany({});
    await Enrollment.deleteMany({});

    await Course.create({
      courseId: "C101",
      title: "Node Mastery",
      category: "Backend",
      price: 100
    });
  });

  it("should return 201 on successful enrollment", async function () {
    const res = await request(app)
      .post("/api/enroll")
      .send({
        userId: "USER1",
        courseId: "C101"
      });

    expect(res.status).to.equal(201);
    expect(res.body.success).to.equal(true);
    expect(res.body.message).to.equal("Enrollment successful");
  });

  it("should return 400 on duplicate enrollment", async function () {

    // First enrollment
    await request(app)
      .post("/api/enroll")
      .send({
        userId: "USER1",
        courseId: "C101"
      });

    // Duplicate attempt
    const res = await request(app)
      .post("/api/enroll")
      .send({
        userId: "USER1",
        courseId: "C101"
      });

    expect(res.status).to.equal(400);
    expect(res.body.success).to.equal(false);
    expect(res.body.message).to.equal("Duplicate enrollment");
  });

});
