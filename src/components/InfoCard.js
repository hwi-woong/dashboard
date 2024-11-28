import React from 'react';
import './InfoCard.css';

const InfoCard = ({ title, value }) => {
  return (
    <div className="info-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default InfoCard;
