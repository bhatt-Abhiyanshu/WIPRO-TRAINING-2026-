import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <h3 className="text-center">Loading...</h3>;

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <img
          src={product.image}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <h2 className="mt-3">{product.name}</h2>
        <p>{product.description}</p>
        <h4>₹{product.price}</h4>
        <span className="badge bg-success">{product.category}</span>
      </div>
    </div>
  );
}
