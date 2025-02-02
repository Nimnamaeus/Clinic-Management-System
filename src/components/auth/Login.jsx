import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    userType: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock authentication - in a real app, this would be an API call
    if (credentials.username && credentials.password && credentials.userType) {
      // Store user type and authentication status
      localStorage.setItem('userType', credentials.userType);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userId', '123'); // Mock user ID
      
      // Navigate based on user type
      handleLogin(credentials.userType);
    }
  };

  const handleLogin = (userType) => {
    if (userType === 'student') {
      navigate('/student');
    } else if (userType === 'employee') {
      navigate('/employee');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          marginTop: 8,
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Clinic Management System
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="user-type-label">Login As</InputLabel>
            <Select
              labelId="user-type-label"
              id="user-type"
              value={credentials.userType}
              label="Login As"
              onChange={(e) =>
                setCredentials({ ...credentials, userType: e.target.value })
              }
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="employee">Employee</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login; 