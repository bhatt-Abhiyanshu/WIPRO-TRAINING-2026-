import { Link } from "react-router-dom";

const Navbar = ({ cart, isAdmin }) => {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between">
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({count})</Link>
      </div>
      <Link to={isAdmin ? "/admin/dashboard" : "/admin"}>Admin</Link>
    </nav>
  );
};

export default Navbar;
