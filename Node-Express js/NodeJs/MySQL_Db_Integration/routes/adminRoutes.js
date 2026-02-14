const express = require("express");

const controller =require("../controller/userController"); // Import the user controller to ensure it's 

//is used to create a new router instance, which will handle the routes related to users.
const router = express.Router();

// Define a route for POST requests to "/addusers" that will invoke the 
// createUsers function from the user controller.("URL Mapping Handler")
router.get("/users", controller.getAllUsers); 
router.post("/addusers", controller.createUsers); 
router.put("/updateuser/:id", controller.updateUsers); 
router.delete("/deleteuser/:id", controller.deleteUsers); 
module.exports = router; // Export the router instance so it can be used in other parts of the application, such as the main server file (app.js).