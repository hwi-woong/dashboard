import React from 'react';
import './Header.css';

const Header = ({ onToggleMenu }) => {
  return (
    <header className="app-header">
      <button onClick={onToggleMenu}>
        {onToggleMenu ? 'Hide Menu' : 'Show Menu'}
      </button>
      <h1>Messaging Dashboard</h1>
      <div className="user-info">
        <button className="settings-button">Settings</button>
        <button className="logout-button">Logout</button>
        <div className="notification-icon">🔔</div>
        <div className="help-icon">❓</div>
      </div>
    </header>
  );
};

export default Header;
