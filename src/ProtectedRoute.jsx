import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // For now, we'll just return the children without any protection
  // You can add authentication logic here later
  return children;
};

export default ProtectedRoute;
