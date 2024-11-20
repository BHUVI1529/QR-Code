// src/components/Students.js
import React from "react";

const Students = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Students</h1>
            <p className="text-gray-600 mb-6">Here is the list of students for attendance:</p>
            <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">Prasad</li>
                <li className="text-gray-700">Sindhu</li>
                <li className="text-gray-700">Bhuvana</li>
                {/* Later: Replace static data with backend API */}
            </ul>
        </div>
    );
};

export default Students;
