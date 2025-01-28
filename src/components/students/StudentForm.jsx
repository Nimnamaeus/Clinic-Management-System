import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Paper,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const StudentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: '',
    id_number: '',
    birthdate: '',
    gender_id: '',
    blood_type_id: '',
    religion_id: '',
    contact_number: '',
    address: '',
    program_id: '',
    year_level_id: '',
    guardian_name: '',
    guardian_contact: '',
  });

  const [programs, setPrograms] = useState([]);
  const [yearLevels, setYearLevels] = useState([]);
  const [genders, setGenders] = useState([]);
  const [bloodTypes, setBloodTypes] = useState([]);
  const [religions, setReligions] = useState([]);

  // TODO: Replace with actual API calls
  useEffect(() => {
    // Load dropdown options
    setPrograms([
      { program_id: 1, program_name: 'Computer Science' },
      { program_id: 2, program_name: 'Information Technology' },
    ]);
    setYearLevels([
      { year_level_id: 1, year_level_name: '1st Year' },
      { year_level_id: 2, year_level_name: '2nd Year' },
      { year_level_id: 3, year_level_name: '3rd Year' },
      { year_level_id: 4, year_level_name: '4th Year' },
    ]);
    setGenders([
      { gender_id: 1, gender_name: 'Male' },
      { gender_id: 2, gender_name: 'Female' },
      { gender_id: 3, gender_name: 'Other' },
    ]);
    setBloodTypes([
      { blood_type_id: 1, blood_type_name: 'A', rh_factor: '+' },
      { blood_type_id: 2, blood_type_name: 'B', rh_factor: '+' },
    ]);
    setReligions([
      { religion_id: 1, religion_name: 'Christianity' },
      { religion_id: 2, religion_name: 'Islam' },
    ]);

    // Load student data if editing
    if (id) {
      // TODO: Replace with actual API call
      setFormData({
        full_name: 'John Doe',
        id_number: 'STU001',
        // ... load other fields
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement save functionality
    console.log('Form data:', formData);
    navigate('/students');
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        {id ? 'Edit Student' : 'Add New Student'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Full Name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="ID Number"
              name="id_number"
              value={formData.id_number}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              type="date"
              label="Birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              required
              fullWidth
              label="Gender"
              name="gender_id"
              value={formData.gender_id}
              onChange={handleChange}
            >
              {genders.map((gender) => (
                <MenuItem key={gender.gender_id} value={gender.gender_id}>
                  {gender.gender_name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              required
              fullWidth
              label="Program"
              name="program_id"
              value={formData.program_id || ''}
              onChange={handleChange}
            >
              {programs.map((program) => (
                <MenuItem key={program.program_id} value={program.program_id}>
                  {program.program_name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              required
              fullWidth
              label="Year Level"
              name="year_level_id"
              value={formData.year_level_id || ''}
              onChange={handleChange}
            >
              {yearLevels.map((yearLevel) => (
                <MenuItem key={yearLevel.year_level_id} value={yearLevel.year_level_id}>
                  {yearLevel.year_level_name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              required
              fullWidth
              label="Blood Type"
              name="blood_type_id"
              value={formData.blood_type_id || ''}
              onChange={handleChange}
            >
              {bloodTypes.map((bloodType) => (
                <MenuItem key={bloodType.blood_type_id} value={bloodType.blood_type_id}>
                  {bloodType.blood_type_name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              required
              fullWidth
              label="Religion"
              name="religion_id"
              value={formData.religion_id || ''}
              onChange={handleChange}
            >
              {religions.map((religion) => (
                <MenuItem key={religion.religion_id} value={religion.religion_id}>
                  {religion.religion_name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Button variant="outlined" onClick={() => navigate('/students')}>
                Cancel
              </Button>
              <Button type="submit" variant="contained">
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default StudentForm; 