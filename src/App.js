import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import StudentList from './components/students/StudentList';
import StudentForm from './components/students/StudentForm';
import EmployeeList from './components/employees/EmployeeList';
import EmployeeForm from './components/employees/EmployeeForm';
import AppointmentList from './components/appointments/AppointmentList';
import AppointmentForm from './components/appointments/AppointmentForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Reports from './components/reports/Reports';
import Settings from './components/settings/Settings';
import UserProfile from './components/profile/UserProfile';
import MedicalHistory from './components/medical/MedicalHistory';
import AuditLog from './components/audit/AuditLog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/new" element={<StudentForm />} />
            <Route path="/students/edit/:id" element={<StudentForm />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/employees/new" element={<EmployeeForm />} />
            <Route path="/employees/edit/:id" element={<EmployeeForm />} />
            <Route path="/appointments" element={<AppointmentList />} />
            <Route path="/appointments/new" element={<AppointmentForm />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/medical-history/:id" element={<MedicalHistory />} />
            <Route path="/audit-log" element={<AuditLog />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;