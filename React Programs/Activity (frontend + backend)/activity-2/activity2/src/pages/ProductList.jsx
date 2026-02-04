// src/pages/ProductList.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => {
        if (!res.ok) throw new Error("Unable to fetch products");
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center mt-10 text-gray-600">Loading products...</p>;

  if (error)
    return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Product List
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h3>
            <p className="text-gray-600">₹ {product.price}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
