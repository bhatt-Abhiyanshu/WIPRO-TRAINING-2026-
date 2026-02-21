const express=require("express");
const mongoose=require("mongoose");
const programRoutes=require("./routes/programRoutes");
const enrollRoutes=require("./routes/enrollRoutes");
const errorMiddleware=require("./middleware/errorMiddleware");
const cors = require("cors");

const app=express();

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/fittrack")
.then(()=>console.log("MongoDB Connected"));

app.use("/api/programs",programRoutes);
app.use("/api/enroll",enrollRoutes);

app.use(errorMiddleware);

module.exports=app;