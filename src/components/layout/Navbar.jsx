import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle,
  ExitToApp,
  Settings,
  Person,
  LocalHospital,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ userType, showSidebar, onMenuClick }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <AppBar 
      position="fixed"
      sx={{ 
        backgroundColor: '#1976d2',
        zIndex: 1200,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: '64px !important',
          maxHeight: '64px',
          px: 2,
          pt: '8px',
        }}
      >
        {/* Left side */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          position: 'relative',
          top: '-25px'
        }}>
          {showSidebar && (
            <IconButton
              color="inherit"
              onClick={onMenuClick}
              edge="start"
              sx={{ 
                mr: 2,
                position: 'relative',
                top: '-1px',
              }}
            >
              <MenuIcon sx={{ fontSize: 24 }} />
            </IconButton>
          )}
          <LocalHospital sx={{ mr: 1, fontSize: 28 }} />
          <Typography 
            variant="h6" 
            component="div"
            sx={{ 
              fontSize: '1.2rem',
              fontWeight: 500,
              position: 'relative',
              top: '-1px',
            }}
          >
            {userType === 'student' ? 'Student Health Portal' : 'Employee Health Portal'}
          </Typography>
        </Box>

        {/* Right side */}
        <IconButton
          color="inherit"
          onClick={handleMenu}
          sx={{
            position: 'relative',
            top: '-2px'
          }}
        >
          <Avatar sx={{ 
            width: 38,
            height: 38,
            bgcolor: 'rgba(255, 255, 255, 0.1)',
          }}>
            <AccountCircle sx={{ fontSize: 24 }} />
          </Avatar>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            sx: {
              mt: 1,
              width: 200,
            }
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={() => {
            navigate(`/${userType}/profile`);
            handleClose();
          }}>
            <Person sx={{ mr: 1 }} />
            Profile
          </MenuItem>

          {userType === 'employee' && (
            <MenuItem onClick={() => {
              navigate('/settings');
              handleClose();
            }}>
              <Settings sx={{ mr: 1 }} />
              Settings
            </MenuItem>
          )}

          <Divider />
          
          <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
            <ExitToApp sx={{ mr: 1 }} />
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 