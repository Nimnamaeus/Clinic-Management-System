import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
  Autocomplete,
} from '@mui/material';
import {
  Save as SaveIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';

const AppointmentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patient_name: '',
    date: '',
    time: '',
    reason: '',
    doctor: '',
    notes: '',
  });

  const doctors = [
    { id: 1, name: 'Dr. John Smith' },
    { id: 2, name: 'Dr. Sarah Johnson' },
    { id: 3, name: 'Dr. Michael Brown' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission
    navigate('/appointments');
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#1976d2' }}>
        {id ? 'Edit Appointment' : 'Schedule New Appointment'}
      </Typography>

      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{ p: 4, borderRadius: 2 }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Patient Name"
              value={formData.patient_name}
              onChange={(e) => setFormData({ ...formData, patient_name: e.target.value })}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              options={doctors}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField {...params} label="Select Doctor" required />
              )}
              onChange={(_, newValue) => setFormData({ ...formData, doctor: newValue?.id || '' })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="date"
              label="Date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="time"
              label="Time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Reason for Visit"
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Additional Notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              multiline
              rows={3}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button
                variant="outlined"
                startIcon={<CancelIcon />}
                onClick={() => navigate('/appointments')}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                startIcon={<SaveIcon />}
                sx={{
                  bgcolor: '#1976d2',
                  '&:hover': { bgcolor: '#1565c0' },
                }}
              >
                Save
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AppointmentForm; 