import { useState } from 'react';
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
} from '@mui/material';
import {
  CalendarToday as CalendarIcon,
  People as PeopleIcon,
  Assessment as AssessmentIcon,
  Announcement as AnnouncementIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import AnnouncementDisplay from '../announcements/AnnouncementDisplay';

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const [appointments] = useState([
    {
      id: 1,
      patientName: 'John Doe',
      date: '2024-03-20 09:00',
      reason: 'Annual Check-up'
    },
    // Add more appointments
  ]);

  const [announcements] = useState([
    {
      id: 1,
      title: 'Free Medical Checkup Week',
      content: 'Get your free medical checkup from March 25-29, 2024. Book your slot now!',
      type: 'info'
    },
    {
      id: 2,
      title: 'COVID-19 Vaccination Drive',
      content: 'COVID-19 booster shots available next week. Schedule your appointment.',
      type: 'warning'
    }
  ]);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#1976d2' }}>
        Employee Health Portal
      </Typography>

      <Grid container spacing={3}>
        {/* Announcements Section */}
        <Grid item xs={12}>
          <AnnouncementDisplay announcements={announcements} />
        </Grid>

        {/* Today's Appointments Section */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Today's Appointments
            </Typography>
            <List>
              {appointments.map((appointment) => (
                <ListItem key={appointment.id}>
                  <ListItemIcon>
                    <CalendarIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={appointment.patientName}
                    secondary={`${appointment.date} - ${appointment.reason}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Quick Actions Section */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <List>
              <ListItem button onClick={() => navigate('/employee/appointments')}>
                <ListItemIcon>
                  <CalendarIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Manage Appointments" />
              </ListItem>
              <ListItem button onClick={() => navigate('/employee/patients')}>
                <ListItemIcon>
                  <PeopleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="View Patients" />
              </ListItem>
              <ListItem button onClick={() => navigate('/employee/reports')}>
                <ListItemIcon>
                  <AssessmentIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Generate Reports" />
              </ListItem>
              <ListItem button onClick={() => navigate('/employee/announcements')}>
                <ListItemIcon>
                  <AnnouncementIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Manage Announcements" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmployeeDashboard; 