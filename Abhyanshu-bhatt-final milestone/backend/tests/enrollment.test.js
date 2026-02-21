const request=require("supertest");
const app=require("../app");

describe("Enrollment API",()=>{
 it("should enroll user",async()=>{
   await request(app)
   .post("/api/enroll")
   .send({userId:"USR101",programId:"FTP001"})
   .expect(201);
 });

 it("duplicate enrollment",async()=>{
   await request(app)
   .post("/api/enroll")
   .send({userId:"USR101",programId:"FTP001"})
   .expect(400);
 });
});