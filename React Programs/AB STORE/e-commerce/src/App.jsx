import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import initialProducts from "./data/initialProducts";

function App() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || initialProducts
  );

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [isAdmin, setIsAdmin] = useState(false); // Must login every time

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [products, cart]);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <BrowserRouter>
      <Header cartCount={cartCount} isAdmin={isAdmin} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products products={products} cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/admin" element={<AdminLogin setIsAdmin={setIsAdmin} />} />

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute isAdmin={isAdmin}>
              <AdminDashboard products={products} setProducts={setProducts} />
            </AdminRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
