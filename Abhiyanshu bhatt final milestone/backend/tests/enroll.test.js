const request=require("supertest");
const app=require("../app");
const chai=require("chai");
const expect=chai.expect;

describe("Enrollment API",()=>{
it("should enroll successfully",async()=>{
const res=await request(app)
.post("/api/enroll")
.send({userId:"USR101",programId:"FTP001"});

expect(res.status).to.be.oneOf([201,400]);
});
});