const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id} className="flex justify-between border-b py-2">
          <span>{item.name} (x{item.qty})</span>
          <span>₹{item.price * item.qty}</span>
          <button
            onClick={() => removeItem(item.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <h3 className="text-xl mt-4">Total Amount: ₹{total}</h3>
    </div>
  );
};

export default Cart;
