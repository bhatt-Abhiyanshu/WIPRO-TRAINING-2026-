import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

function ProductList() {
  const { products } = useContext(ProductContext);

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">All Products</h1>

      <Link
        to="/add-product"
        className="text-center block mb-6 text-gray-700 stroke-orange-950 rounded-2xl p-2 bg-amber-400"
      >
        + Add Product
      </Link>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="bg-gray-100 p-4 rounded-xl shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h3 className="font-semibold">{product.name}</h3>
            <p>₹ {product.price}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
