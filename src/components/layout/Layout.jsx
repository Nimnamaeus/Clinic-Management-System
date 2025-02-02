import { useState } from 'react';
import { Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ userType }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Show sidebar for employee routes only
  const showSidebar = location.pathname.startsWith('/employee');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Navbar 
        userType={userType} 
        showSidebar={showSidebar} 
        onMenuClick={toggleSidebar}
      />
      {showSidebar && (
        <Sidebar 
          userType={userType} 
          open={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
        />
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: '100%',
          mt: '64px',
          ml: sidebarOpen ? '240px' : 0,
          transition: 'margin 0.2s ease-in-out',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout; 