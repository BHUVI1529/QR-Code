// src/components/Schedule.js
import React from "react";
//const navigate = useNavigate();

const Schedule = () => {
    
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Schedule</h1>
            <p className="text-gray-600 mb-6">View or edit the attendance schedule:</p>
            <div className="p-4 bg-white shadow rounded-lg">
                <ul className="list-disc pl-5 space-y-2">
                    <li className="text-gray-700">9:00 AM - Morning Check-in</li>
                    <li className="text-gray-700">12:00 PM - Lunch Break</li>
                    <li className="text-gray-700">5:00 PM - End of Day</li>
                    {/* Later: Replace static data with backend API */}
                </ul>
            </div>
        </div>
    );
};

export default Schedule;
