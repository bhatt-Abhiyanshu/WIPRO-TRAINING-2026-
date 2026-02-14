import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const [fav, setFav] = useState(false);

  return (
    <div className="card shadow h-100">
      <img
        src={product.image}
        className="card-img-top"
        style={{ height: "180px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h5>{product.name}</h5>
        <p>₹{product.price}</p>
        <span className="badge bg-info">{product.category}</span>

        <div className="mt-3 d-flex gap-2">
          <button
            className={`btn ${fav ? "btn-danger" : "btn-outline-danger"}`}
            onClick={() => setFav(!fav)}
          >
            ♥
          </button>

          <Link className="btn btn-success" to={`/products/${product._id}`}>
            View
          </Link>

          <Link className="btn btn-warning" to={`/edit/${product._id}`}>
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}
