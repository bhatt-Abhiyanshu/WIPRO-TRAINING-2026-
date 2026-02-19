import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((i) => i._id === item.id);
      if (exists) {
        return prevItems.map((i) =>
          i._id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, _id: item.id, qty: 1 }];
      }
    });
    toast.success("Item added to cart");
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== id)
    );
  };

  const updateQty = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item._id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const clearCart = () => setCartItems([]);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
