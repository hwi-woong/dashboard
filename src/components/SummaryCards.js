import React from 'react';
import './SummaryCards.css';

const SummaryCards = ({ data }) => {
  return (
    <div className="summary-cards">
      {data.map((item, index) => (
        <div key={index} className="summary-card">
          <h4>{item.type}</h4>
          <p className="value">{item.value} 건</p>
          <p className="trend">{item.trend} {item.trend > 0 ? '↑' : '↓'}</p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
