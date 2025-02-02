import { Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      startIcon={<ArrowBack />}
      onClick={() => navigate(-1)}
      sx={{
        mb: 3,
        color: '#1976d2',
        '&:hover': {
          bgcolor: 'rgba(25, 118, 210, 0.04)',
        },
      }}
    >
      Go Back
    </Button>
  );
};

export default BackButton; 