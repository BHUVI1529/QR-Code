import React from "react";
import Sidebar from "./sidebar";
import Header from "./Header";
import AttendanceTable from "./AttendanceTable";

function Dashboard() {
   
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <Header />
        <div style={{ padding: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
            <div style={{ backgroundColor: "#f1f1f1", padding: "20px", borderRadius: "10px", flex: "1", marginRight: "10px" }}>
              <h4>Total Students</h4>
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>1,234</p>
            </div>
            <div style={{ backgroundColor: "#f1f1f1", padding: "20px", borderRadius: "10px", flex: "1", marginRight: "10px" }}>
              <h4>Average Attendance</h4>
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>92%</p>
            </div>
            <div style={{ backgroundColor: "#f1f1f1", padding: "20px", borderRadius: "10px", flex: "1", marginRight: "10px" }}>
              <h4>Present Today</h4>
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>1,123</p>
            </div>
            <div style={{ backgroundColor: "#f1f1f1", padding: "20px", borderRadius: "10px", flex: "1" }}>
              <h4>Active QR Codes</h4>
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>25</p>
            </div>
          </div>
          <AttendanceTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
