import React, { useEffect, useState, useContext } from "react";
import API from "../utils/axiosConfig";
import { CartContext } from "../context/CartContext";

const Menu = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("All");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchMenu = async () => {
      const { data } = await API.get("/menu");
      setItems(data);
    };
    fetchMenu();
  }, []);


  const filtered =
    category === "All"
      ? items
      : items.filter(
          (item) =>
            item.categoryName?.toLowerCase() === category.toLowerCase()
        );

  return (
    <div className="container my-5">
      <h2 className="text-center text-danger mb-4">Our Menu</h2>

      <div className="text-center mb-4">
        {[
          "All",
          "Pizza",
          "Beverages",
          "Sides",
          "Combo",
          "new launches",
          "bestsellers",
        ].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`btn me-2 mb-2 ${
              category === cat
                ? "btn-danger"
                : "btn-outline-danger"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row">
        {filtered.map((item) => (
          <div key={item._id} className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <img
                src={item.imageUrl}
                className="card-img-top"
                alt={item.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center d-flex flex-column">
                <h5>{item.name}</h5>
                <p className="fw-bold">₹{item.price}</p>

                <button
                  onClick={() => addToCart(item)}
                  className="btn btn-danger mt-auto"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
