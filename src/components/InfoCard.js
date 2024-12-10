import React from 'react';
import './InfoCard.css';

const InfoCard = ({ title, icon, value, description, trend }) => {
  return (
    <div className="info-card">
      <div className="info-card-header">
        <img src={icon} alt={`${title} icon`} className="info-card-icon" />
        <h3 className="info-card-title">{title}</h3>
      </div>
      <p className="info-card-value">{value}</p>
      {description && <p className="info-card-description">{description}</p>}
      {trend && (
        <div className={`info-card-trend ${trend === '↑' ? 'up' : 'down'}`}>
          {trend === '↑' ? '📈 상승' : '📉 하락'}
        </div>
      )}
    </div>
  );
};

export default InfoCard;
