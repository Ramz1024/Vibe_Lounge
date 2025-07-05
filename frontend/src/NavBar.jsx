import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ onMenuClick }) {
  return (
    <header className="vibe-navbar">
      <div className="navbar-container">
        <div className="left-nav">
          <button className="hamburger" onClick={onMenuClick}>☰</button>
          <div className="vibe-logo">VibeLounge</div>
        </div>
        <nav className="vibe-nav">
          <Link to="#">About Us</Link>
          <Link to="#">Our Vision</Link>
          <Link to="#">Donate</Link>
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </nav>
      </div>
    </header>
  );
}
