import React from 'react';
import './StatusCard.css';
const StatusCard = ({ title, percentage, icon }) => {
  return (
    <div className="status-card">
      <h3>{title}</h3>
      <img src={icon} alt="아이콘" />
      <p>{percentage}%</p>
    </div>
  );
};

export default StatusCard;
