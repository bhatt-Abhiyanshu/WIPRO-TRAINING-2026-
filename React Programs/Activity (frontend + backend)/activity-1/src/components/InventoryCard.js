import React, { useState } from "react";

function InventoryCard(props) {
  const { name, price, category } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc",padding: "5px", margin: "2px",width:"25%" }}>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <p>Category: {category}</p>

      <button onClick={() => setIsFavorite(!isFavorite)}>
        {isFavorite ? "★ Favorite" : "☆ Add to Favorite"}
      </button>
    </div>
  );
}

export default InventoryCard;
