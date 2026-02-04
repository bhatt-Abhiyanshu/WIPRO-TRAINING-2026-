import { Link } from "react-router-dom";

const Header = ({ cartCount, isAdmin }) => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">🛒 AB Store</h1>

      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart <span className="bg-white text-black px-2 rounded">{cartCount}</span>
        </Link>
        <Link to={isAdmin ? "/admin/dashboard" : "/admin"}>Admin</Link>
      </nav>
    </header>
  );
};

export default Header;
