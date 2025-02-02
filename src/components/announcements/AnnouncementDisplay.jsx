import { Box, Alert, Typography } from '@mui/material';

const AnnouncementDisplay = ({ announcements }) => {
  return (
    <Box>
      {announcements.map((announcement) => (
        <Alert 
          key={announcement.id} 
          severity={announcement.type}
          sx={{ mb: 2 }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            {announcement.title}
          </Typography>
          {announcement.content}
        </Alert>
      ))}
    </Box>
  );
};

export default AnnouncementDisplay; 