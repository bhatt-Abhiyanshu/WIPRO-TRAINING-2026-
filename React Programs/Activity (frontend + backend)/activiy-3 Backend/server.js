const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let products = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
    category: "Electronics",
    image: "https://imgs.search.brave.com/d1KqZkAyoYa7yWbFspRPSSGyEu2Sklp9bJpsUzzrO3Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bXlnLmluL2ltYWdl/cy90aHVtYm5haWxz/LzI1MC8yNTAvZGV0/YWlsZWQvMTE4LzMx/NTA4NV8wX2EzaHQx/bC1yZW1vdmViZy1w/cmV2aWV3LnBuZy5w/bmc"
  },
  {
    id: 2,
    name: "Tshirt",
    price: 500,
    category: "Cloth",
    image: "https://imgs.search.brave.com/aOEGUDFeaMt6ISS9umxNr1Rar22EPLCXvd7cRqkeE8o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9nZXRz/ZXR3ZWFyLmluL2Nk/bi9zaG9wL2ZpbGVz/L3JuLWltYWdlX3Bp/Y2tlcl9saWJfdGVt/cF9hOGZiZjMxYi04/OGFlLTRiNzEtYmI0/OC02ZmUyNTVlYTVl/YTguanBnP3Y9MTc0/NjU5MjkyMCZ3aWR0/aD0xNDQ1"
  
  }
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

app.post("/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
