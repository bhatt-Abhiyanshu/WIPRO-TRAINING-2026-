import React, { useEffect, useState } from "react";
import API from "../utils/axiosConfig";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await API.get("/orders");
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-danger mb-4">My Orders</h2>

      {orders.map((order) => (
        <div key={order._id} className="card mb-3 p-3 shadow">
          <h5>Order ID: {order._id}</h5>
          <p>Total: ₹{order.totalAmount}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
