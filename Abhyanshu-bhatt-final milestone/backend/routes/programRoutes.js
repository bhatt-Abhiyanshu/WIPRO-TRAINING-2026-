const express = require("express");
const {body,validationResult} = require("express-validator");

const Enrollment=require("../models/Enrollment");
const Program=require("../models/Program");

const router=express.Router();

router.post(
"/",
[body("userId").notEmpty(),body("programId").notEmpty()],
async(req,res,next)=>{
 try{
  const errors=validationResult(req);
  if(!errors.isEmpty()) throw {status:400,message:"Validation error"};

  const program=await Program.findOne({programId:req.body.programId});
  if(!program) throw {status:400,message:"Program not found"};

  const exists=await Enrollment.findOne(req.body);
  if(exists) throw {status:400,message:"Already enrolled"};

  const enroll=await Enrollment.create(req.body);
  res.status(201).json({success:true,message:"Enrolled",data:enroll});
 }catch(e){next(e);}
});

module.exports=router;