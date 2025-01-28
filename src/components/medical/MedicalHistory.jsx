import { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Chip,
  Divider,
  Button,
  Stack,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import {
  LocalHospital as HospitalIcon,
  Medication as MedicationIcon,
  Assignment as AssignmentIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import { useParams } from 'react-router-dom';

const MedicalHistory = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const [patientInfo, setPatientInfo] = useState({
    name: 'John Doe',
    id_number: 'STU001',
    age: 20,
    blood_type: 'A+',
    allergies: ['Penicillin', 'Peanuts'],
  });

  const [medicalRecords] = useState([
    {
      id: 1,
      date: '2024-03-15',
      diagnosis: 'Common Cold',
      doctor: 'Dr. Smith',
      prescription: 'Paracetamol',
      notes: 'Rest and hydration recommended',
    },
    // Add more records
  ]);

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Medical History
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: '#1976d2',
            '&:hover': { bgcolor: '#1565c0' },
          }}
        >
          Add Record
        </Button>
      </Stack>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ 
            height: '100%',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            borderRadius: 2,
          }}>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                Patient Information
              </Typography>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Name"
                    secondary={patientInfo.name}
                    primaryTypographyProps={{ color: 'text.secondary' }}
                    secondaryTypographyProps={{ color: 'text.primary', variant: 'h6' }}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText 
                    primary="ID Number"
                    secondary={patientInfo.id_number}
                    primaryTypographyProps={{ color: 'text.secondary' }}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText 
                    primary="Blood Type"
                    secondary={
                      <Chip 
                        label={patientInfo.blood_type}
                        color="error"
                        size="small"
                        sx={{ borderRadius: 1 }}
                      />
                    }
                    primaryTypographyProps={{ color: 'text.secondary' }}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText 
                    primary="Allergies"
                    secondary={
                      <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                        {patientInfo.allergies.map((allergy) => (
                          <Chip 
                            key={allergy}
                            label={allergy}
                            size="small"
                            sx={{ bgcolor: '#ffebee', color: '#d32f2f' }}
                          />
                        ))}
                      </Stack>
                    }
                    primaryTypographyProps={{ color: 'text.secondary' }}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ 
            borderRadius: 2,
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}>
            <Timeline>
              {medicalRecords.map((record) => (
                <TimelineItem key={record.id}>
                  <TimelineOppositeContent color="text.secondary">
                    {record.date}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <HospitalIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card sx={{ mb: 2 }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {record.diagnosis}
                        </Typography>
                        <Typography color="text.secondary" gutterBottom>
                          Attending Doctor: {record.doctor}
                        </Typography>
                        <Divider sx={{ my: 1 }} />
                        <Stack spacing={2}>
                          <Box>
                            <Typography variant="subtitle2" color="primary">
                              Prescription
                            </Typography>
                            <Typography>{record.prescription}</Typography>
                          </Box>
                          <Box>
                            <Typography variant="subtitle2" color="primary">
                              Notes
                            </Typography>
                            <Typography>{record.notes}</Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MedicalHistory; 