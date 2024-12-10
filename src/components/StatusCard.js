import React from 'react';
import './StatusCard.css';

const StatusCard = ({ title, data1, data2, icon, trend1, trend2 }) => {
  return (
    <div className="status-card">
      <h3>{title}</h3>
      <div className="status-card-content">
        <div>
          <p>{data1.label}</p>
          <span className={`trend ${trend1 > 0 ? 'up' : 'down'}`}>{data1.value} {trend1 > 0 ? '↑' : '↓'}</span>
        </div>
        <div>
          <p>{data2.label}</p>
          <span className={`trend ${trend2 > 0 ? 'up' : 'down'}`}>{data2.value} {trend2 > 0 ? '↑' : '↓'}</span>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
