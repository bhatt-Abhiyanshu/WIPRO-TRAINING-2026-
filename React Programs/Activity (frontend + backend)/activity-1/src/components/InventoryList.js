import React from "react";
import InventoryCard from "./InventoryCard";

function InventoryList() {
  const products = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Tshirt", price: 500, category: "Cloth" },
    { id: 3, name: "Shoes", price: 6999, category: "Sports" }
  ];

  return (
    <div>
      <h2>Inventory</h2>
      {products.map((product) => (
        <InventoryCard
          key={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
}

export default InventoryList;
