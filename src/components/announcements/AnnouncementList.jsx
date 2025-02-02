import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  List,
  ListItem,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Alert,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import BackButton from '../common/BackButton';

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: 'Free Medical Checkup Week',
      content: 'Get your free medical checkup from March 25-29, 2024. Book your slot now!',
      type: 'info',
      date: '2024-03-20'
    },
    {
      id: 2,
      title: 'COVID-19 Vaccination Drive',
      content: 'COVID-19 booster shots available next week. Schedule your appointment.',
      type: 'warning',
      date: '2024-03-18'
    }
  ]);

  const [open, setOpen] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState({
    title: '',
    content: '',
    type: 'info'
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setIsEditing(false);
    setCurrentAnnouncement({
      title: '',
      content: '',
      type: 'info'
    });
  };

  const handleEdit = (announcement) => {
    setCurrentAnnouncement(announcement);
    setIsEditing(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    if (isEditing) {
      setAnnouncements(announcements.map(ann => 
        ann.id === currentAnnouncement.id ? currentAnnouncement : ann
      ));
    } else {
      setAnnouncements([...announcements, {
        ...currentAnnouncement,
        id: Date.now(),
        date: new Date().toISOString().split('T')[0]
      }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setAnnouncements(announcements.filter(ann => ann.id !== id));
  };

  return (
    <Box>
      <BackButton />
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Announcements
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          New Announcement
        </Button>
      </Stack>

      <Paper sx={{ p: 3 }}>
        <List>
          {announcements.map((announcement) => (
            <ListItem
              key={announcement.id}
              sx={{
                mb: 2,
                display: 'block',
                bgcolor: 'background.paper',
                borderRadius: 1,
                boxShadow: 1,
                p: 2
              }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="h6">{announcement.title}</Typography>
                  <Typography color="text.secondary" sx={{ mb: 1 }}>
                    {announcement.date}
                  </Typography>
                  <Alert severity={announcement.type} sx={{ mb: 1 }}>
                    {announcement.content}
                  </Alert>
                </Box>
                <Stack direction="row" spacing={1}>
                  <IconButton onClick={() => handleEdit(announcement)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(announcement.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </ListItem>
          ))}
        </List>
      </Paper>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{isEditing ? 'Edit Announcement' : 'New Announcement'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            value={currentAnnouncement.title}
            onChange={(e) => setCurrentAnnouncement({
              ...currentAnnouncement,
              title: e.target.value
            })}
          />
          <TextField
            margin="dense"
            label="Content"
            fullWidth
            multiline
            rows={4}
            value={currentAnnouncement.content}
            onChange={(e) => setCurrentAnnouncement({
              ...currentAnnouncement,
              content: e.target.value
            })}
          />
          <TextField
            select
            margin="dense"
            label="Type"
            fullWidth
            value={currentAnnouncement.type}
            onChange={(e) => setCurrentAnnouncement({
              ...currentAnnouncement,
              type: e.target.value
            })}
          >
            <MenuItem value="info">Information</MenuItem>
            <MenuItem value="warning">Warning</MenuItem>
            <MenuItem value="success">Success</MenuItem>
            <MenuItem value="error">Error</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">
            {isEditing ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AnnouncementList; 