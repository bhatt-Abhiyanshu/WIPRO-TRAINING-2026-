const pool = require("../db/connection");
const { validationResult } = require("express-validator");

exports.getemployees = async (req, res, next) => {
    try {
        const [rows] = await pool.query("SELECT * FROM employees");
        res.status(200).json(rows);
    } catch (error) {
        next(error);
    }
};

exports.registeremployees = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, department } = req.body;

        const [existing] = await pool.query(
            "SELECT id FROM employees WHERE email = ?",
            [email]
        );

        if (existing.length > 0) {
            return res.status(409).json({
                error: "Email already exists"
            });
        }

        await pool.query(
            "INSERT INTO employees (name, email, department) VALUES (?, ?, ?)",
            [name, email, department]
        );

        res.status(201).json({
            message: "Employee registered successfully"
        });

    } catch (error) {
        next(error);
    }
};
