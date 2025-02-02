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
  Card,
  CardContent,
  Alert,
} from '@mui/material';
import {
  CalendarToday as CalendarIcon,
  LocalHospital as HospitalIcon,
  Assignment as AssignmentIcon,
  Announcement as AnnouncementIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import AnnouncementDisplay from '../announcements/AnnouncementDisplay';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [appointments] = useState([
    {
      id: 1,
      date: '2024-03-20 09:00',
      reason: 'Annual Check-up',
      doctor: 'Dr. Smith'
    },
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
        Student Health Portal
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AnnouncementDisplay announcements={announcements} />
        </Grid>

        {/* Appointments Section */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Your Upcoming Appointments
            </Typography>
            <List>
              {appointments.map((appointment) => (
                <ListItem key={appointment.id}>
                  <ListItemIcon>
                    <CalendarIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={appointment.reason}
                    secondary={`${appointment.date} with ${appointment.doctor}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* Health Summary Card */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Your Health Summary
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography color="textSecondary">Last Checkup</Typography>
                  <Typography variant="body1">March 1, 2024</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography color="textSecondary">Next Due Checkup</Typography>
                  <Typography variant="body1">September 1, 2024</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Actions Section */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <List>
              <ListItem button onClick={() => navigate('/student/appointments/new')}>
                <ListItemIcon>
                  <CalendarIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Schedule Appointment" 
                  secondary="Book a new appointment"
                />
              </ListItem>
              <ListItem button onClick={() => navigate('/student/medical-history')}>
                <ListItemIcon>
                  <HospitalIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="My Medical History" 
                  secondary="View your medical records"
                />
              </ListItem>
              <ListItem button onClick={() => navigate('/student/health-records')}>
                <ListItemIcon>
                  <AssignmentIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Health Records" 
                  secondary="View your health documents"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudentDashboard; 