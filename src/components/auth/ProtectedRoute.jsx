import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // TODO: Implement actual authentication check
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute; 