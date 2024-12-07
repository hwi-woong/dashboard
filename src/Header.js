import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="dashboard-header">
    <div className="header-title">
      <i className="icon-dashboard" /> {/* 아이콘을 위한 공간 */}
      <span>Dashboard</span>

      </div>
      <div className="header-actions">
        <button className="header-button settings">Settings</button>
        <button className="header-button logout">Logout</button>
        <button className="header-button help">?</button>
      </div>
    </header>
  );
};

export default Header;
