import React from 'react';
import './BrokerCard.css';

const BrokerCard = ({ name, speed, average, trend }) => {
  return (
    <div className="broker-card">
      <h4>{name}</h4>
      <p>속도(ms): {speed} {trend}</p>
      <p>Average: {average}</p>
    </div>
  );
};

export default BrokerCard;
