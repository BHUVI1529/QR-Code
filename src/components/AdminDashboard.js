// components/AdminDashboard.js
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Get the role from localStorage
        const role = localStorage.getItem('role');
        console.log('Current role:', role); // Debug log
        
        if (role !== 'admin') {
            // If not an admin, navigate to user dashboard
            console.log('Redirecting to user dashboard'); // Debug log
            navigate('/admin-dashboard'); // Ensure this route exists in your App.js
        }
    }, [navigate]);

    return (
        <div className="AdminDashboard">
            <h1>Admin Dashboard</h1>
            <nav>
                <ul>
                    <li><Link to="/admin/manage-users">Manage Users</Link></li>
                    <li><Link to="/admin/view-attendance">View Attendance Records</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default AdminDashboard;
