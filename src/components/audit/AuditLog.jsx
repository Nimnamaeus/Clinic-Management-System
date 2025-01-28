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
  TablePagination,
  Chip,
  TextField,
  MenuItem,
} from '@mui/material';

const AuditLog = () => {
  const [logs, setLogs] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filter, setFilter] = useState('all');

  // TODO: Replace with actual API call
  useEffect(() => {
    setLogs([
      {
        log_id: 1,
        admin: 'admin.user',
        action: 'CREATE',
        entity_type: 'Student',
        entity_id: 1,
        timestamp: '2024-03-20T10:30:00',
      },
      {
        log_id: 2,
        admin: 'admin.user',
        action: 'UPDATE',
        entity_type: 'Appointment',
        entity_id: 3,
        timestamp: '2024-03-20T11:15:00',
      },
      // Add more mock data
    ]);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getActionColor = (action) => {
    switch (action) {
      case 'CREATE':
        return 'success';
      case 'UPDATE':
        return 'info';
      case 'DELETE':
        return 'error';
      default:
        return 'default';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Audit Log
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Box sx={{ mb: 3 }}>
          <TextField
            select
            label="Filter by Type"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            sx={{ width: 200 }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="Student">Students</MenuItem>
            <MenuItem value="Employee">Employees</MenuItem>
            <MenuItem value="Appointment">Appointments</MenuItem>
          </TextField>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Timestamp</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell>Action</TableCell>
                <TableCell>Entity Type</TableCell>
                <TableCell>Entity ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {logs
                .filter(
                  (log) => filter === 'all' || log.entity_type === filter
                )
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((log) => (
                  <TableRow key={log.log_id}>
                    <TableCell>{formatDate(log.timestamp)}</TableCell>
                    <TableCell>{log.admin}</TableCell>
                    <TableCell>
                      <Chip
                        label={log.action}
                        color={getActionColor(log.action)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{log.entity_type}</TableCell>
                    <TableCell>{log.entity_id}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={logs.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default AuditLog; 