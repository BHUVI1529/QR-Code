// src/components/Settings.js
import React from "react";

const Settings = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Settings</h1>
            <p className="text-gray-600 mb-6">Manage system settings:</p>
            <div className="p-4 bg-white shadow rounded-lg">
                <ul className="list-disc pl-5 space-y-2">
                    <li className="text-gray-700">Change admin password</li>
                    <li className="text-gray-700">Configure QR Code settings</li>
                    <li className="text-gray-700">Update system preferences</li>
                    {/* Add more settings options as needed */}
                </ul>
            </div>
        </div>
    );
};

export default Settings;
