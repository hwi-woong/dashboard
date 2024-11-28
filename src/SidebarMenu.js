import React, { useState } from 'react';
import './SidebarMenu.css';

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="user-info" onClick={toggleMenu}>
        <div className="user-avatar">👤</div>
        <div className="user-name">
          <h3>User Name</h3>
          <p>System Admin</p>
        </div>
      </div>
      <div className="dashboard">
        <span className="dashboard-text">Dashboard</span>
      </div>
      <ul className="menu-list">
        <li className={`menu-item ${!isOpen ? 'hidden' : ''}`}>SMS</li>
        <li className={`menu-item ${!isOpen ? 'hidden' : ''}`}>RCS</li>
        <li className={`menu-item ${!isOpen ? 'hidden' : ''}`}>
          <img src="icon.png" alt="알림톡" className="menu-icon" /> 알림톡
        </li>
        <li className={`menu-item ${!isOpen ? 'hidden' : ''}`}>MMS</li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
