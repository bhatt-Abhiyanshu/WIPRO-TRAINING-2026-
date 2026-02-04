import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <Link to="/" className="underline">← Back</Link>

      <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-xl shadow mt-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p>₹ {product.price}</p>
        <p className="text-gray-500">{product.category}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
