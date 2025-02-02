import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Tabs,
  Tab,
  Grid,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Stack,
  Card,
  CardContent,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
} from '@mui/icons-material';
import BackButton from '../common/BackButton';

const Settings = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const [settings, setSettings] = useState({
    clinicName: 'University Clinic',
    email: 'clinic@university.edu',
    phone: '123-456-7890',
    address: '123 University Ave',
    notifications: true,
    autoBackup: true,
  });

  const [departments, setDepartments] = useState([
    { id: 1, name: 'Medical Department' },
    { id: 2, name: 'Administration' },
  ]);

  const [diagnoses, setDiagnoses] = useState([
    { id: 1, name: 'Common Cold' },
    { id: 2, name: 'Flu' },
  ]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSettingChange = (e) => {
    const { name, value, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value !== undefined ? value : checked,
    }));
  };

  const handleSaveSettings = () => {
    // TODO: Implement settings save
    console.log('Saving settings:', settings);
  };

  const handleAddDepartment = () => {
    setDepartments(prev => [...prev, { id: prev.length + 1, name: 'New Department' }]);
  };

  const handleAddDiagnosis = () => {
    setDiagnoses(prev => [...prev, { id: prev.length + 1, name: 'New Diagnosis' }]);
  };

  return (
    <Box>
      <BackButton />
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: '#1976d2' }}>
        Settings
      </Typography>

      <Paper sx={{ 
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange}
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            bgcolor: '#f8f9fa',
            '& .MuiTab-root': {
              minHeight: 64,
              fontSize: '1rem',
            },
            '& .Mui-selected': {
              color: '#1976d2',
              fontWeight: 'bold',
            },
          }}
        >
          <Tab label="General" />
          <Tab label="Departments" />
          <Tab label="Diagnosis Codes" />
        </Tabs>

        <Box sx={{ p: 3 }}>
          {activeTab === 0 && (
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="primary">
                      System Settings
                    </Typography>
                    <Stack spacing={3}>
                      <TextField
                        label="Clinic Name"
                        fullWidth
                        variant="outlined"
                      />
                      <TextField
                        label="Contact Email"
                        fullWidth
                        variant="outlined"
                      />
                      <FormControlLabel
                        control={<Switch color="primary" />}
                        label="Email Notifications"
                      />
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="primary">
                      Backup & Security
                    </Typography>
                    <Stack spacing={3}>
                      <FormControlLabel
                        control={<Switch color="primary" />}
                        label="Two-Factor Authentication"
                      />
                      <FormControlLabel
                        control={<Switch color="primary" />}
                        label="Automatic Backup"
                      />
                      <Button 
                        variant="outlined" 
                        color="primary"
                        startIcon={<SaveIcon />}
                      >
                        Backup Now
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}

          {activeTab === 1 && (
            <>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h6" color="primary">Departments</Typography>
                <Button 
                  startIcon={<AddIcon />} 
                  variant="contained"
                  onClick={() => {
                    setDialogType('department');
                    setOpenDialog(true);
                  }}
                >
                  Add Department
                </Button>
              </Stack>
              <List>
                {departments.map((dept) => (
                  <ListItem
                    key={dept.id}
                    sx={{
                      borderRadius: 1,
                      mb: 1,
                      '&:hover': { bgcolor: '#f5f5f5' },
                    }}
                  >
                    <ListItemText primary={dept.name} />
                    <ListItemSecondaryAction>
                      <Tooltip title="Edit">
                        <IconButton size="small" sx={{ color: 'primary.main' }}>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton size="small" sx={{ color: 'error.main' }}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </>
          )}

          {/* Similar styling for Diagnosis tab */}
        </Box>
      </Paper>

      {/* Add/Edit Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>
          {dialogType === 'department' ? 'Add Department' : 'Add Diagnosis Code'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Settings; 