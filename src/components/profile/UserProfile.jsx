import { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Avatar,
  IconButton,
  Divider,
} from '@mui/material';
import {
  PhotoCamera as PhotoCameraIcon,
  Edit as EditIcon,
} from '@mui/icons-material';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: '',
    fullName: '',
    email: '',
    contactNumber: '',
    role: '',
    lastLogin: '',
  });

  // TODO: Replace with actual API call
  useEffect(() => {
    setProfile({
      username: 'admin.user',
      fullName: 'Admin User',
      email: 'admin@clinic.com',
      contactNumber: '123-456-7890',
      role: 'Super Admin',
      lastLogin: '2024-03-20 09:00:00',
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement profile update
    console.log('Updated profile:', profile);
    setIsEditing(false);
  };

  const handleChangePassword = () => {
    // TODO: Implement password change
    console.log('Change password clicked');
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        My Profile
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar
            sx={{ width: 100, height: 100, mr: 2 }}
            alt={profile.fullName}
            src="/path-to-avatar.jpg"
          />
          <Box>
            <Typography variant="h6">{profile.fullName}</Typography>
            <Typography color="textSecondary">{profile.role}</Typography>
            <IconButton component="label">
              <input hidden accept="image/*" type="file" />
              <PhotoCameraIcon />
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={profile.username}
                disabled
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={profile.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Contact Number"
                name="contactNumber"
                value={profile.contactNumber}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
            {!isEditing ? (
              <Button
                startIcon={<EditIcon />}
                variant="contained"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </Button>
            ) : (
              <>
                <Button variant="outlined" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="contained">
                  Save Changes
                </Button>
              </>
            )}
            <Button variant="outlined" onClick={handleChangePassword}>
              Change Password
            </Button>
          </Box>
        </form>

        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle2" color="textSecondary">
            Last Login: {new Date(profile.lastLogin).toLocaleString()}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default UserProfile; 