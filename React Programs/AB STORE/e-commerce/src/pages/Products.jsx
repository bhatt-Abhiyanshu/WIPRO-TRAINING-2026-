const Products = ({ products, cart, setCart }) => {
  const addToCart = (product) => {
    const found = cart.find(item => item.id === product.id);
    if (found) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map(p => (
        <div key={p.id} className="bg-white shadow-lg rounded p-4">
          <img src={p.image} className="h-40 mx-auto" />
          <h3 className="text-xl font-bold mt-2">{p.name}</h3>
          <p className="text-gray-600">{p.description}</p>
          <p className="font-semibold mt-1">₹{p.price}</p>
          <button
            onClick={() => addToCart(p)}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 mt-3 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
