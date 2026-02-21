const express=require("express");
const Enrollment=require("../models/Enrollment");
const Program=require("../models/Program");

const router=express.Router();

router.post("/",async(req,res,next)=>{
try{
const {userId,programId}=req.body;

if(!userId) return res.status(400).json({success:false,message:"userId required",data:null});

const program=await Program.findOne({programId});
if(!program) return res.status(404).json({success:false,message:"Program not found",data:null});

const exists=await Enrollment.findOne({userId,programId});
if(exists) return res.status(400).json({success:false,message:"Already enrolled",data:null});

const enroll=await Enrollment.create({userId,programId});
res.status(201).json({success:true,message:"Enrolled",data:enroll});
}catch(e){next(e);}
});

module.exports=router;