import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const userType = localStorage.getItem('userType');
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Prevent students from accessing any employee routes or admin areas
  if (userType === 'student') {
    // List of restricted paths for students
    const restrictedPaths = [
      '/employee',
      '/employees',
      '/students',
      '/reports',
      '/audit-log',
      '/settings'
    ];

    // Check if current path starts with any restricted path
    const isRestrictedPath = restrictedPaths.some(path => 
      location.pathname.startsWith(path)
    );

    // If trying to access root path, redirect to student dashboard
    if (location.pathname === '/') {
      return <Navigate to="/student" />;
    }

    // If trying to access any restricted path, redirect to student dashboard
    if (isRestrictedPath) {
      return <Navigate to="/student" />;
    }
  }

  // Prevent employees from accessing student-specific routes
  if (userType === 'employee' && location.pathname.startsWith('/student')) {
    return <Navigate to="/employee" />;
  }

  return <Outlet />;
};

export default ProtectedRoute; 