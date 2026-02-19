import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQty, totalPrice } =
    useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <h2 className="text-danger mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="card mb-3 p-3 d-flex flex-row justify-content-between align-items-center"
            >
              <div>
                <h5>{item.name}</h5>
                <p>₹{item.price} × {item.qty}</p>
              </div>

              <div className="d-flex align-items-center">
                <button
                  className="btn btn-sm btn-secondary me-2"
                  onClick={() => updateQty(item._id, -1)}
                >
                  -
                </button>

                <span className="me-2">{item.qty}</span>

                <button
                  className="btn btn-sm btn-secondary me-3"
                  onClick={() => updateQty(item._id, 1)}
                >
                  +
                </button>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h4>Total: ₹{totalPrice}</h4>

          <button
            className="btn btn-success mt-3"
            onClick={() => navigate("/payment")}
          >
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
