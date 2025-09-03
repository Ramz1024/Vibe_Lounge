import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function SideBar({ isOpen, onClose }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h3>Menu</h3>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      {/* 🎭 Mood Rooms Section */}
      <div className="sidebar-section">
        <h4>🎭 MOOD ROOMS</h4>
        <ul>
          <li><Link to="/happy" onClick={onClose}> 😊 Happy Room</Link></li>
          <li><Link to="/angry" onClick={onClose}> 😠 Angry Room</Link></li>
          <li><Link to="/sleeping" onClick={onClose}> 💤 Sleeping Room</Link></li>
          <li><Link to="/chill" onClick={onClose}> 😎 Chill Room</Link></li>
          <li><Link to="/sad" onClick={onClose}> 🥺 Sad Room</Link></li>
          <li><Link to="/studying" onClick={onClose}> 📚 Studying Room</Link></li>
          <li><Link to="/party" onClick={onClose}> 🎉 Party Room</Link></li>
          <li><Link to="/melancholy" onClick={onClose}> 🎭 Melancholy Room</Link></li>
        </ul>
      </div>

      <div className="sidebar-divider" />

      {/* Tools & Utility Section */}
      <div className="sidebar-section">
        <ul>
          <li><Link to="/journal" onClick={onClose}>📖 My Journal</Link></li>
          <li><Link to="/playlists" onClick={onClose}>🎶 Playlists</Link></li>
          <li><Link to="/customize-vibes" onClick={onClose}>✨ Customize Vibes</Link></li>
          <li><Link to="/feedback" onClick={onClose}>💬 Feedback</Link></li>
          <li><Link to="/settings" onClick={onClose}>⚙️ Settings</Link></li>
        </ul>
      </div>
    </div>
  );
}
