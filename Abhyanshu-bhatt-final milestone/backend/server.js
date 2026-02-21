const app = require("./app");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fittrack")
.then(()=>{
  console.log("Mongo connected");
  app.listen(5000,()=>console.log("Server running"));
});