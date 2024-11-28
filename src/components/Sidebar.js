import React, { useState } from "react";
import "./Sidebar.css"; // 사이드바용 스타일

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "<<" : ">>"}
      </button>
      <div className="menu">
        <div className="user-info">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="avatar"
          />
          <span>User Name</span>
          <small>System Admin</small>
        </div>
        <ul>
          <li className="menu-item active">Dashboard</li>
          <li className="menu-item">SMS</li>
          <li className="menu-item">RCS</li>
          <li className="menu-item">알림톡</li>
          <li className="menu-item">MMS</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
