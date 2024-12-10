import React from 'react';
import './BrokerCard.css';

const BrokerCard = ({ name, speed, average, trend }) => {
  return (
    <div className="broker-card">
      <h3>{name}</h3>
      <p>속도(ms): <span>{speed}</span></p>
      <p>Average: <span>{average}</span></p>
      <span className={`trend ${trend === '↑' ? 'up' : 'down'}`}>{trend}</span>
    </div>
  );
};

export default BrokerCard;
