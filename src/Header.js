import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="notice-section">
        <strong>※공지사항</strong>
        <ul>
          <li>현재 UMS 서비스 장애가 발생하고 있습니다. 신속히 처리하겠습니다.</li>
          <li>SMS 발송 건수가 하루 최대를 초과했습니다.</li>
        </ul>
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
