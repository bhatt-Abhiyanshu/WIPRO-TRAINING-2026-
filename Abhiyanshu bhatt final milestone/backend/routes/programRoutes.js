const express=require("express");
const {body,validationResult}=require("express-validator");
const Program=require("../models/Program");

const router=express.Router();

router.post("/",
[
body("programId").notEmpty(),
body("name").notEmpty(),
body("category").notEmpty(),
body("price").isNumeric()
],
async(req,res,next)=>{
try{
const errors=validationResult(req);
if(!errors.isEmpty()) return res.status(400).json({success:false,message:"Validation error",data:null});

const program=await Program.create(req.body);
res.status(201).json({success:true,message:"Program added",data:program});
}catch(e){next(e);}
});

router.get("/",async(req,res,next)=>{
try{
const programs=await Program.find();
res.json({success:true,message:"Programs",data:programs});
}catch(e){next(e);}
});
router.put("/:id",async(req,res)=>{
 const p=await Program.findOneAndUpdate(
  {programId:req.params.id},
  req.body,
  {new:true}
 );
 res.json({success:true,data:p});
});

router.delete("/:id",async(req,res)=>{
 await Program.findOneAndDelete({programId:req.params.id});
 res.json({success:true});
});

module.exports=router;