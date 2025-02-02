import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  CalendarToday as CalendarIcon,
  Person as PersonIcon,
  Assignment as AssignmentIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ userType, open, onClose }) => {
  const navigate = useNavigate();

  const employeeMenuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/employee' },
    { text: 'Appointments', icon: <CalendarIcon />, path: '/employee/appointments' },
    { text: 'Patients', icon: <PersonIcon />, path: '/employee/patients' },
    { text: 'Reports', icon: <AssignmentIcon />, path: '/employee/reports' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="temporary"
      sx={{
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          top: '64px',
          height: 'calc(100% - 64px)',
          borderTop: 'none',
          zIndex: 1100,
        },
        '& .MuiBackdrop-root': {
          top: '64px',
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {employeeMenuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => handleNavigation(item.path)}
              sx={{
                '&:hover': {
                  bgcolor: '#f5f5f5',
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar; 