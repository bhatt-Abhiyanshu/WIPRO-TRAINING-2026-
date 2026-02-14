const pool = require("../db/connection");
const { validationResult } = require("express-validator");

exports.placeOrder = async (req, res, next) => {
    const connection = await pool.getConnection();
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { custname, items } = req.body;

        await connection.beginTransaction();

        let totalAmount = 0;

        for (const item of items) {
            const [products] = await connection.query(
                "SELECT * FROM products WHERE id = ? FOR UPDATE",
                [item.product_id]
            );

            if (products.length === 0) {
                throw new Error(`Product ID ${item.product_id} not found`);
            }

            const product = products[0];

            if (product.stock < item.quantity) {
                throw new Error(`Insufficient stock for product ${product.name}`);
            }

            totalAmount += product.price * item.quantity;

            await connection.query(
                "UPDATE products SET stock = stock - ? WHERE id = ?",
                [item.quantity, item.product_id]
            );
        }

        const [orderResult] = await connection.query(
            "INSERT INTO orders (custname, totalamount) VALUES (?, ?)",
            [custname, totalAmount]
        );

        const orderId = orderResult.insertId;

        for (const item of items) {
            await connection.query(
                "INSERT INTO order_items (order_id, product_id, quantity) VALUES (?, ?, ?)",
                [orderId, item.product_id, item.quantity]
            );
        }

        await connection.commit();

        res.status(201).json({
            message: "Order placed successfully",
            orderId,
            totalAmount
        });

    } catch (error) {
        await connection.rollback();
        res.status(400).json({ error: error.message });
    } finally {
        connection.release();
    }
};
