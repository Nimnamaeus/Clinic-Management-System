import { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
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
  LocalHospital as HospitalIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    // Mock data
    setEmployees([
      {
        id: 1,
        name: 'Dr. John Smith',
        role: 'Doctor',
        department: 'General Medicine',
        contact: '123-456-7890',
        status: 'Active',
      },
      // Add more mock data
    ]);
  }, []);

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 4 }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Medical Staff
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/employees/new')}
          sx={{
            bgcolor: '#1976d2',
            '&:hover': { bgcolor: '#1565c0' },
            borderRadius: 2,
            px: 3,
          }}
        >
          Add Employee
        </Button>
      </Stack>

      <Paper sx={{ p: 3, borderRadius: 2, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <TextField
            placeholder="Search employees..."
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
            sx={{ maxWidth: 300 }}
          />
          <Button
            startIcon={<FilterIcon />}
            variant="outlined"
            size="small"
          >
            Filter
          </Button>
        </Stack>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Role</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Department</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Contact</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((employee) => (
                <TableRow
                  key={employee.id}
                  sx={{
                    '&:hover': { bgcolor: '#f5f5f5' },
                    transition: 'background-color 0.2s',
                  }}
                >
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <HospitalIcon color="primary" sx={{ fontSize: 20 }} />
                      <Typography>{employee.name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{employee.role}</TableCell>
                  <TableCell>
                    <Chip
                      label={employee.department}
                      size="small"
                      sx={{ bgcolor: '#e3f2fd', color: '#1976d2' }}
                    />
                  </TableCell>
                  <TableCell>{employee.contact}</TableCell>
                  <TableCell>
                    <Chip
                      label={employee.status}
                      size="small"
                      color={employee.status === 'Active' ? 'success' : 'default'}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      size="small"
                      onClick={() => navigate(`/employees/edit/${employee.id}`)}
                      sx={{ color: '#1976d2' }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{ color: '#d32f2f' }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default EmployeeList; 