import React from 'react';
import './BrokerCard.css';

const BrokerCard = ({ name, speed, average, trend }) => {
  return (
    <div className="broker-card">
      <h3>{name} (실시간)</h3>
      <div className="status">
        <div className="distribution">
          <span>분배</span>
        </div>
        <div className={`connection ${trend === '↑' ? 'up' : 'down'}`}>
          <span>●</span>
        </div>
        <div className="transmission">
          <span>발송</span>
        </div>
      </div>
      <div className={`speed ${trend === '↑' ? 'up' : 'down'}`}>
        <p>속도(ms): <strong>{speed}</strong></p>
        <p>Average: {average}</p>
        <span className="trend">{trend}</span>
      </div>
    </div>
  );
};

export default BrokerCard;
