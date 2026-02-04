import { Navigate } from "react-router-dom";

const AdminRoute = ({ isAdmin, children }) => {
  return isAdmin ? children : <Navigate to="/admin" />;
};

export default AdminRoute;
