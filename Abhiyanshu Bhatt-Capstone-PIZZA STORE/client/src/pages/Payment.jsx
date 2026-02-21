import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import API from "../utils/axiosConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Payment = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [mode, setMode] = useState("UPI");
  const [deliveryMode, setDeliveryMode] = useState("Delivery");

  const handlePayment = async () => {
    try {
      if (cartItems.length === 0) {
        toast.error("Cart is empty");
        return;
      }

      const orderRes = await API.post("/orders", {
        items: cartItems.map(item => ({
          menuItem: item._id,
          quantity: item.qty,
          price: item.price
        })),
        totalAmount: totalPrice,
        deliveryMode:deliveryMode
      });

      const orderId = orderRes.data.id;

      await API.post("/payments", {
        orderId,
        mode
      });

      toast.success("Payment successful!");
      clearCart();
      navigate("/orders");
    } catch (err) {
      console.error(err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Payment failed");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-danger mb-4">Payment</h2>

      <div className="card p-4 shadow">
        <h4>Total Amount: ₹{totalPrice}</h4>

        {/* // Delivery Mode  */}
        <div className="mt-3">
          <h6>Select Delivery Mode</h6>
          <select
            className="form-control"
            value={deliveryMode}
            onChange={(e) => setDeliveryMode(e.target.value)}
          >
            <option value="Delivery">Delivery</option>
            <option value="Pickup">Pickup</option>
          </select>
        </div>

        {/* // Payment Mode  */}
        <div className="mt-4">
          <h6>Select Payment Method</h6>

          <label className="me-3">
            <input
              type="radio"
              value="UPI"
              checked={mode === "UPI"}
              onChange={(e) => setMode(e.target.value)}
            /> UPI
          </label>

          <label className="me-3">
            <input
              type="radio"
              value="Card"
              checked={mode === "Card"}
              onChange={(e) => setMode(e.target.value)}
            /> Card
          </label>

          <label>
            <input
              type="radio"
              value="COD"
              checked={mode === "COD"}
              onChange={(e) => setMode(e.target.value)}
            /> Cash on Delivery
          </label>
        </div>

        <button className="btn btn-success mt-4" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
