import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "70px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px", // ✅ reduced padding
    background: "rgba(0,0,0,0.9)",
    color: "#fff",
    zIndex: 9999,
    boxSizing: "border-box" // 🔥 IMPORTANT
  };

  const linkContainer = {
    display: "flex",
    gap: "20px", // ✅ reduced gap
    flexWrap: "nowrap"
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    fontSize: "15px",
    whiteSpace: "nowrap" // 🔥 prevents breaking
  };

  return (
    <nav style={navStyle}>
      
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>
        Your_Blogs
      </div>

      {/* Links */}
      <div style={linkContainer}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/createpost" style={linkStyle}>Create</Link>
        <Link to="/userpost" style={linkStyle}>Posts</Link>
      </div>

    </nav>
  );
};

export default Navbar;