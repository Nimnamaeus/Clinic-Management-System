import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './components/auth/Login';
import StudentDashboard from './components/dashboard/StudentDashboard';
import EmployeeDashboard from './components/dashboard/EmployeeDashboard';
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
import HealthRecords from './components/medical/HealthRecords';
import AnnouncementList from './components/announcements/AnnouncementList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Student Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/student" element={<Layout userType="student" />}>
            <Route index element={<StudentDashboard />} />
            <Route path="appointments" element={<AppointmentList userType="student" />} />
            <Route path="appointments/new" element={<AppointmentForm userType="student" />} />
            <Route path="medical-history" element={<MedicalHistory userType="student" />} />
            <Route path="health-records" element={<HealthRecords userType="student" />} />
            <Route path="profile" element={<UserProfile userType="student" />} />
          </Route>
        </Route>

        {/* Employee Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/employee" element={<Layout userType="employee" />}>
            <Route index element={<EmployeeDashboard />} />
            <Route path="appointments" element={<AppointmentList userType="employee" />} />
            <Route path="patients" element={<StudentList userType="employee" />} />
            <Route path="reports" element={<Reports />} />
            <Route path="profile" element={<UserProfile userType="employee" />} />
            <Route path="announcements" element={<AnnouncementList />} />
          </Route>

          {/* Admin/Employee Only Routes */}
          <Route element={<Layout userType="employee" />}>
            <Route path="/" element={<Navigate to="/employee" />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/new" element={<StudentForm />} />
            <Route path="/students/edit/:id" element={<StudentForm />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/employees/new" element={<EmployeeForm />} />
            <Route path="/employees/edit/:id" element={<EmployeeForm />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/medical-history/:id" element={<MedicalHistory />} />
            <Route path="/audit-log" element={<AuditLog />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;