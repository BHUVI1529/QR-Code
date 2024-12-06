import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const RemarkPage = () => {
    const { userId, instituteName } = useParams();
    const [remark, setRemark] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            await axios.post('https://qrcode-application.onrender.com/api/attendance/add', {
                user: { id: userId },
                loginOption: "logout",
                instituteName,
                remark
            });
            alert("Logout attendance marked successfully!");
            navigate('/');
        } catch (error) {
            alert("Error submitting remark. Please try again.");
        }
    };

    return (
        <div>
            <h2>Provide Remark</h2>
            <textarea value={remark} onChange={(e) => setRemark(e.target.value)} placeholder="Enter remark"></textarea>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default RemarkPage;
