const express = require("express");
const { validationResult } = require("express-validator");
const Enrollment = require("../models/Enrollment");
const Program = require("../models/Program");
const { enrollmentValidation } = require("../validators/enrollmentValidator");

const router = express.Router();

router.post("/", enrollmentValidation, async(req,res,next)=>{
  try{
    const errors = validationResult(req);
    if(!errors.isEmpty())
      return res.status(400).json({success:false,message:"Validation error",data:null});

    const { userId, programId } = req.body;

    const program = await Program.findOne({ programId });
    if(!program)
      return res.status(404).json({success:false,message:"Program not found",data:null});

    const duplicate = await Enrollment.findOne({ userId, programId });
    if(duplicate)
      return res.status(400).json({success:false,message:"Already enrolled",data:null});

    const enroll = await Enrollment.create({ userId, programId });

    res.status(201).json({success:true,message:"Enrollment success",data:enroll});
  }catch(err){ next(err); }
});

module.exports = router;