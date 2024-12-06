import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrReader } from 'react-qr-reader';
import axios from 'axios';

const QRCodeScanner = () => {
    const [error, setError] = useState(null);
    const [instituteName, setInstituteName] = useState('');
    const [instituteId, setInstituteId] = useState(null); // To store the instituteId
    const [showDialog, setShowDialog] = useState(false);  // State for showing dialog
    const navigate = useNavigate();

    const handleScan = (result) => {
        if (result) {
            console.log("Raw QR code data:", result.text); // Log the raw scanned data
            try {
                const data = JSON.parse(result.text);

             console.log("Parsed QR code data:", data); // Log parsed data

                const { location, institutename } = data;

                if ( location && instituteName ) {
                    setInstituteName(institutename);
                    fetchInstituteId(instituteName);
                    checkLocation(location);
                } else {
                    setError('Invalid QR code: Missing required information.');
                }
            } catch (err) {
                console.error("Error parsing QR code data:", err);
                setError('Invalid QR code format.');
            }
        }
    };

    const handleError = (error) => {
        console.error("QR Code scanning error:", error);
        setError('Unable to access camera or scan QR code');
    };

    // Fetch instituteId from backend based on institutename
    const fetchInstituteId = async (instituteName) => {
        
        try {
            const response = await axios.get('https://qrcode-application.onrender.com/api/institute/id',{
                params: {instituteName},
            });
            setInstituteId(response.data); // Set instituteId in state
        } catch (error) {
            if( error.response && error.response.status === 404){
                setError("Institute not found");
            }
          else{
            setError("Unable to fetch institute details.");
          }
            
        }
    };

    const checkLocation = async ( location) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                const [instLat, instLon] = location.split(',');

                const distance = calculateDistance(latitude, longitude, parseFloat(instLat), parseFloat(instLon));
                console.log(`Distance to institute: ${distance} meters`);
                if (distance > 50) {
                    alert('You must be within a 50-meter radius of the institute to mark attendance.');
                } else {
                    await determineAttendanceAction( ); // Proceed to determine and mark attendance
                }
            }, () => {
                setError('Unable to retrieve your location. Please allow location access.');
            });
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the Earth in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) **2 +
                  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLon / 2) ** 2;
          
    const distanceInKm = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // Distance in km
    const distanceInMeters = distanceInKm * 1000; // Convert to meters

        return distanceInMeters;
    };

    const determineAttendanceAction = async () => {
        try {

            const userId = localStorage.getItem("userId"); // Get userId from localStorage

        if (!userId) {
            setError("Invalid QR code data. User ID is missing.");
            return;
        }
            // Determine the next action based on userId
            const response = await axios.post('https://qrcode-application.onrender.com/api/attendance/determine', { userId });
            const { loginOption } = response.data;

            if (loginOption === "login") {
                await markAttendance(userId, instituteId, "login");
                showSuccessDialog(); // show success dialog after successful login

            } else if (loginOption === "logout") {
                navigate(`/remarks/${userId}/${instituteId}`);
            } else {
                setError("Unable to determine attendance action.");
            }
        } catch (error) {
            setError("Error determining attendance action. Please try again.");
        }
    };

    const markAttendance = async (userId, instituteId, loginOption, remark = null) => {
        try {
            const attendanceData = {
                user: { id: userId },
                loginOption,
                instituteId, // use the instituteId
                remark
            };
            await axios.post('https://qrcode-application.onrender.com/api/attendance/add', attendanceData);
            alert("Attendance marked successfully");
        } catch (error) {
            setError("Error marking attendance. Please try again.");
        }
    };

    // Show success dialog and navigate after 10 seconds
    const showSuccessDialog = () => {
        setShowDialog(true);
        setTimeout(() => {
            setShowDialog(false);
            navigate('/login'); // Navigate to login page after 10 seconds
        }, 10000); // 10 seconds
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-200 to-green-300 flex justify-center items-center py-8 px-4">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg mx-auto transition-all ease-in-out transform hover:scale-105">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center text-teal-700">QR Code Scanner</h2>

                {error && (
                    <p className="text-red-500 mb-6 text-center font-semibold">{error}</p>
                )}
                <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-xl">
                    <QrReader
                        onResult={handleScan}
                        onError={handleError}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-teal-600 rounded-xl pointer-events-none opacity-80"></div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-lg text-gray-700 font-semibold">Ensure you're within the institute's premises to scan the code.</p>
                    <p className="text-sm text-gray-500 mt-2">If you face any issues, please contact support.</p>
                </div>
            </div>
        </div>
    );
};

export default QRCodeScanner;
