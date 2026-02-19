import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ProtectedRoute from "./components/routing/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserChat from "./pages/chat/UserChat";
import AdminChat from "./pages/chat/AdminChat";
import AdminChatRoom from "./pages/chat/AdminChatRoom";
function App() {
  return (
    <>
      <Header />

      <div className="container-fluid min-vh-100 p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <UserChat />
              </ProtectedRoute>
            }
          />

        <Route
          path="/admin-chat"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminChat />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-chat/:userId"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminChatRoom />
            </ProtectedRoute>
          }
        />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
