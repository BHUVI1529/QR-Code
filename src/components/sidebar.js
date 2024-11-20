import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom for navigation
import { FaTachometerAlt, FaUserGraduate, FaQrcode, FaCalendarAlt, FaCog, FaSignOutAlt } from "react-icons/fa";

function Sidebar() {
  return (
    <div style={{ width: "250px", backgroundColor: "blue", color: "#fff", height: "100vh", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>AttendanceQR</h2>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        <li style={{ margin: "15px 0" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>
        <li style={{ margin: "15px 0" }}>
          <Link to="/students" style={{ textDecoration: "none", color: "#fff" }}>
            <FaUserGraduate /> Students
          </Link>
        </li>
        <li style={{ margin: "15px 0" }}>
          <Link to="/qrcodes" style={{ textDecoration: "none", color: "#fff" }}>
            <FaQrcode /> QR Codes
          </Link>
        </li>
        <li style={{ margin: "15px 0" }}>
          <Link to="/schedule" style={{ textDecoration: "none", color: "#fff" }}>
            <FaCalendarAlt /> Schedule
          </Link>
        </li>
        <li style={{ margin: "15px 0" }}>
          <Link to="/settings" style={{ textDecoration: "none", color: "#fff" }}>
            <FaCog /> Settings
          </Link>
        </li>
        <li style={{ margin: "15px 0", color: "#ff5e5e" }}>
          <Link to="/logout" style={{ textDecoration: "none", color: "#ff5e5e" }}>
            <FaSignOutAlt /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
