const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const products = [
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
  },
  {
    id: 3,
    name: "Shoes",
    price: 16999,
    category: "Sports",
    image: "https://imgs.search.brave.com/eB-_33ZAhyCmmz8rUhw2axlB2BNtG0YO3bhlxXJcnNM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vn/RGRZQzJVXzZ0QV8w/WDJUZ3RMNmVRbWY4/eUhqbzB2dUpaUFZw/MXF2eWhMc3JOaXdh/bjg1Vk1aWElxYXdh/QXhpUTlSLUp1QjlW/VC1VUmdkU0NNc0Jz/VkFsOVU3VkZmUU85/Z0pfelZUUVhMeGRs/VFZLejBlb1JvTU0t/NmlsZHliakVJcmFF/MzdtMXZWNDFfb3Rq/eU55NzNaRWR0aXg4/UVQ0bDdOenBvRWQy/N2JaTTU1cW50LWpN/V0k5MmgvdzgwMC1o/NDEwLWMvYWRpZGFz/LXgtbWVzc2ktMjAy/Mi13b3JsZC1jdXAt/c2lnbmF0dXJlLWJv/b3RzLTExLmpwZw"
  }
];

// GET /products
app.get("/products", (req, res) => {
  res.json(products);
});

// GET /products/:id
app.get("/products/:id", (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
