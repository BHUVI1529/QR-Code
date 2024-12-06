// UserDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 via-yellow-100 to-orange-100">
            <div className="bg-white shadow-lg rounded-3xl p-8 max-w-md w-full text-center transform transition-all duration-500 hover:scale-105">
                <h2 className="text-3xl font-extrabold text-gray-700 mb-6">User Dashboard</h2>
                <div className="space-y-4">
                    <button
                        onClick={() => navigate('/apply-leave')} // Route for Apply Leave
                        className="w-full py-3 bg-green-500 text-white font-semibold rounded-xl shadow-md hover:bg-green-600 transition duration-300 transform hover:-translate-y-1"
                    >
                        Apply for Leave
                    </button>
                    <button
                        onClick={() => navigate('/qr-scanner')} // Route for QR Code Scanner
                        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 transition duration-300 transform hover:-translate-y-1"
                    >
                        Scan the QR Code
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;