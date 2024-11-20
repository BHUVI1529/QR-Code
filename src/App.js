import './App.css';
import React from 'react';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import QRCodeScanner from './components/QRCodeScanner';
import Attendance from './components/Attendance';
import Success from './components/Success';
import ViewAttendance from './components/ViewAttendance';
import ManageUsers from './components/ManageUsers';
import Sidebar from './components/sidebar';
import AttendanceTable from './components/AttendanceTable';
//import StaticsCards from './components/StatisticsCards';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Students from './components/Students';
import QRCodes from './components/Qrcodes';
import Schedule from './components/Schedule';
import Settings from './components/Settings';
import Forgotpassword from './components/Forgotpassword';





function App() {
    return (
        <Router>
          
            
            <Routes>
                {/* Set Home as the default route */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/qr-scanner" element={<QRCodeScanner />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/success" element={<Success />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/admin/manage-users" element={<ManageUsers />} />
                <Route path="/admin/view-attendance" element={<ViewAttendance />} />
                
                <Route path="/sidebar" element={<Sidebar />} />
                
                <Route path="/header" element={<Header />} />
                <Route path="/AttendanceTable" element={<AttendanceTable/>} />
                <Route path="/students" element={<Students />} />
                <Route path="/qrcodes" element={<QRCodes />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/forgotpassword" element={<Forgotpassword />} />


            </Routes>
        </Router>
    );
}

export default App;