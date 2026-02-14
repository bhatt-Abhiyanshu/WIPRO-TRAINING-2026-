const pool = require("../db/connection"); // Import the database connection pool

exports.getAllUsers = async (req,res,next) => {
    try{

       const [rows] = await pool.query("SELECT * FROM users");
        res.status(200).json({rows});
    }
catch(error){
    next(error);
}
};

exports.createUsers = async (req,res,next) => {
    try{
      // const{name,email} = req.body; // Extract name and email from the request body
        await pool.query("INSERT INTO users (name, email) VALUES (?, ?)", [req.body.name, req.body.email]);
        console.log(req.body.name, req.body.email);
        res.status(200).json({message: "User created successfully"});
    }
catch(error){
    next(error);
}
}
exports.updateUsers = async (req,res,next) => {
    try{
        await pool.query("UPDATE users SET name = ?, email = ? WHERE id = ?",[req.body.name, req.body.email, req.params.id]);
        console.log(req.body.name, req.body.email, req.params.id);
        res.status(200).json({message: "User updated successfully"});
    }
    catch(error){
        next(error);
    }
}
exports.deleteUsers = async (req,res,next) => {
    try{
        await pool.query("DELETE FROM users WHERE id = ?",[req.params.id]);
        console.log("User deleted successfully");
        res.status(200).json({message: "User deleted successfully"});
    }
    catch(error){
        next(error);
    }
}


