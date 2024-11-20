import React from "react";

function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px", backgroundColor: "#f8f9fa" }}>
      <h2>Dashboard</h2>
      <div>
        <input
          type="text"
          placeholder="Search..."
          style={{
            padding: "5px 10px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
        <span>Admin</span>
      </div>
    </div>
  );
}

export default Header;
