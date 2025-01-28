import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  Stack,
  Chip,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  MoreVert as MoreVertIcon,
  MedicalServices as MedicalIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // TODO: Replace with actual API call
  useEffect(() => {
    setStudents([
      {
        student_id: 1,
        full_name: 'John Doe',
        id_number: 'STU001',
        program_name: 'Computer Science',
        year_level_name: '3rd Year',
        contact_number: '1234567890',
      },
      // Add more mock data as needed
    ]);
  }, []);

  const handleActionClick = (event, student) => {
    setAnchorEl(event.currentTarget);
    setSelectedStudent(student);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedStudent(null);
  };

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 4 }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Students
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/students/new')}
          sx={{
            bgcolor: '#1976d2',
            '&:hover': { bgcolor: '#1565c0' },
            borderRadius: 2,
            px: 3,
          }}
        >
          Add Student
        </Button>
      </Stack>

      <Paper sx={{ p: 3, borderRadius: 2, mb: 3 }}>
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <TextField
            placeholder="Search students..."
            variant="outlined"
            size="small"
            sx={{ width: 300 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
          <Button
            startIcon={<FilterIcon />}
            variant="outlined"
            sx={{ borderRadius: 2 }}
          >
            Filter
          </Button>
        </Stack>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>ID Number</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Full Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Program</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Year Level</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Contact Number</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow 
                  key={student.student_id}
                  sx={{ 
                    '&:hover': { bgcolor: '#f5f5f5' },
                    transition: 'background-color 0.2s'
                  }}
                >
                  <TableCell>{student.id_number}</TableCell>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography>{student.full_name}</Typography>
                      {student.medical_condition && (
                        <Tooltip title="Has medical condition">
                          <MedicalIcon color="error" fontSize="small" />
                        </Tooltip>
                      )}
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={student.program_name}
                      size="small"
                      sx={{ bgcolor: '#e3f2fd', color: '#1976d2' }}
                    />
                  </TableCell>
                  <TableCell>{student.year_level_name}</TableCell>
                  <TableCell>{student.contact_number}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      size="small"
                      onClick={(e) => handleActionClick(e, student)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: { width: 200, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }
        }}
      >
        <MenuItem onClick={() => {
          navigate(`/students/edit/${selectedStudent?.student_id}`);
          handleClose();
        }}>
          <EditIcon sx={{ mr: 2, color: '#1976d2' }} />
          Edit
        </MenuItem>
        <MenuItem onClick={() => {
          navigate(`/medical-history/${selectedStudent?.student_id}`);
          handleClose();
        }}>
          <MedicalIcon sx={{ mr: 2, color: '#2e7d32' }} />
          Medical History
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ color: '#d32f2f' }}>
          <DeleteIcon sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default StudentList; 