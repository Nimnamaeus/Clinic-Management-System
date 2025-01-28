import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Card,
  CardContent,
  LinearProgress,
  Stack,
} from '@mui/material';
import {
  People as PeopleIcon,
  CalendarToday as CalendarIcon,
  LocalHospital as HospitalIcon,
  Notifications as NotificationIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const StatCard = ({ title, value, icon, color }) => (
  <Paper sx={{ p: 3 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Box sx={{ 
        backgroundColor: `${color}.light`,
        borderRadius: '50%',
        p: 1,
        mr: 2
      }}>
        {icon}
      </Box>
      <Typography variant="h6" component="div">
        {title}
      </Typography>
    </Box>
    <Typography variant="h4" component="div">
      {value}
    </Typography>
  </Paper>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats] = useState({
    totalAppointments: 156,
    totalStudents: 2450,
    totalEmployees: 85,
    appointmentGrowth: 12.5,
  });

  const [recentAppointments] = useState([
    {
      id: 1,
      name: 'Jane Smith',
      date: '2024-03-20 09:00',
      reason: 'Annual Check-up',
    },
    {
      id: 2,
      name: 'Bob Johnson',
      date: '2024-03-20 10:30',
      reason: 'Fever',
    },
    {
      id: 3,
      name: 'Alice Brown',
      date: '2024-03-20 11:15',
      reason: 'Follow-up',
    },
  ]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#1976d2' }}>
        Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            bgcolor: '#bbdefb', 
            height: '100%',
            transition: 'transform 0.2s',
            '&:hover': { transform: 'translateY(-4px)' }
          }}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography color="text.secondary" gutterBottom>
                    Total Appointments
                  </Typography>
                  <Typography variant="h4" component="div">
                    {stats.totalAppointments}
                  </Typography>
                </Box>
                <CalendarIcon sx={{ fontSize: 40, color: '#1976d2' }} />
              </Stack>
              <LinearProgress 
                variant="determinate" 
                value={75} 
                sx={{ mt: 2, height: 6, borderRadius: 3 }} 
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            bgcolor: '#c8e6c9',
            height: '100%',
            transition: 'transform 0.2s',
            '&:hover': { transform: 'translateY(-4px)' }
          }}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography color="text.secondary" gutterBottom>
                    Total Students
                  </Typography>
                  <Typography variant="h4" component="div">
                    {stats.totalStudents}
                  </Typography>
                </Box>
                <PeopleIcon sx={{ fontSize: 40, color: '#2e7d32' }} />
              </Stack>
              <LinearProgress 
                variant="determinate" 
                value={85} 
                sx={{ mt: 2, height: 6, borderRadius: 3, bgcolor: '#a5d6a7',
                '& .MuiLinearProgress-bar': { bgcolor: '#2e7d32' } }} 
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            bgcolor: '#fff9c4',
            height: '100%',
            transition: 'transform 0.2s',
            '&:hover': { transform: 'translateY(-4px)' }
          }}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography color="text.secondary" gutterBottom>
                    Total Employees
                  </Typography>
                  <Typography variant="h4" component="div">
                    {stats.totalEmployees}
                  </Typography>
                </Box>
                <HospitalIcon sx={{ fontSize: 40, color: '#f57f17' }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            bgcolor: '#ffebee',
            height: '100%',
            transition: 'transform 0.2s',
            '&:hover': { transform: 'translateY(-4px)' }
          }}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography color="text.secondary" gutterBottom>
                    Appointment Growth
                  </Typography>
                  <Typography variant="h4" component="div">
                    {stats.appointmentGrowth}%
                  </Typography>
                </Box>
                <TrendingUpIcon sx={{ fontSize: 40, color: '#d32f2f' }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ 
            p: 3, 
            borderRadius: 2,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            height: '100%'
          }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
              Recent Appointments
            </Typography>
            <List>
              {recentAppointments.map((appointment, index) => (
                <Box key={appointment.id}>
                  <ListItem sx={{ 
                    borderRadius: 1,
                    '&:hover': { bgcolor: '#f5f5f5' }
                  }}>
                    <ListItemIcon>
                      <CalendarIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                          {appointment.name}
                        </Typography>
                      }
                      secondary={
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Typography variant="body2" color="primary">
                            {appointment.date}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {appointment.reason}
                          </Typography>
                        </Stack>
                      }
                    />
                  </ListItem>
                  {index < recentAppointments.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <List>
              <ListItem button onClick={() => window.location.href = '/appointments/new'}>
                <ListItemIcon>
                  <CalendarIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Schedule New Appointment"
                  secondary="Create a new appointment for student or employee"
                />
              </ListItem>
              <Divider />
              <ListItem button onClick={() => window.location.href = '/students/new'}>
                <ListItemIcon>
                  <PeopleIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Add New Student"
                  secondary="Register a new student in the system"
                />
              </ListItem>
              <Divider />
              <ListItem button onClick={() => window.location.href = '/employees/new'}>
                <ListItemIcon>
                  <HospitalIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Add New Employee"
                  secondary="Register a new employee in the system"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard; 