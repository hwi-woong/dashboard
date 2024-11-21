import React from 'react';

const FooterCard = (props) => {
  return (
    <div className="footer-card">
      <h2>{props.title}</h2>
      <p>{props.value}</p>
    </div>
  );
};

export default FooterCard;
