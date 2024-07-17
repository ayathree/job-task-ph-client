import { Navigate } from "react-router-dom";


const Private = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  return isAuthenticated ? children : <Navigate to="/login" />;
};
export default Private;