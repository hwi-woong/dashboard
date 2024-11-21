import React from 'react';

const InfoCard = (props) => {
  return (
    <div className="info-card">
      <h2>{props.title}</h2>
      <p>{props.value}</p>
    </div>
  );
};

export default InfoCard;
