import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import logo from "../../assets/logo.jpg";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold text-danger d-flex align-items-center" to="/">
         <img
      src={logo}
      alt="Pizzeria Logo"
      width="40"
      height="40"
      className="me-2 rounded-circle"
    />
         𝓹𝓲𝔃𝔃𝓮𝓻𝓲𝓪
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/menu">
              Menu
            </NavLink>
          </li>
        {user && user.role === "customer" && (
          <li className="nav-item">
            <NavLink className="nav-link" to="/orders">
              My orders
            </NavLink>
          </li>
        )}

        </ul>

        <ul className="navbar-nav align-items-center">
          {user && user.role === "customer" && (
          <li className="nav-item me-3">
          <NavLink className="nav-link" to="/chat">
            Contact Admin
          </NavLink>
          </li>
        )}

        {user && user.role === "admin" && (
          <li className="nav-item me-3">
            <NavLink className="nav-link" to="/admin-chat">
              Contact Users
            </NavLink>
          </li>
        )}
        {user && user.role === "customer" && (
          <li className="nav-item me-3">
            <NavLink className="nav-link" to="/cart">
              🛒Cart ({cartItems.length})
            </NavLink>
          </li>
        )}
          {user ? (
            <>
              {user.role === "admin" && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin">
                    Admin Dashboard
                  </NavLink>
                </li>
              )}

              <li className="nav-item ms-3 text-light">
                {user.name}
              </li>

              <li className="nav-item ms-3">
                <button
                  onClick={handleLogout}
                  className="btn btn-sm btn-danger"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item ms-2">
                <NavLink className="btn btn-danger btn-sm" to="/register">
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
