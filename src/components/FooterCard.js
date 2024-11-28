import React from 'react';
import './FooterCard.css';

const FooterCard = ({ title, responseTime }) => {
  return (
    <div className="footer-card">
      <h4>{title}</h4>
      <div className="success-rates">
        <div className="channel">
          <span className="label sms">SMS</span>
          <span className="percentage">70%</span>
        </div>
        <div className="channel">
          <span className="label rcs">RCS</span>
          <span className="percentage">50%</span>
        </div>
        <div className="channel">
          <span className="label alert">알림톡</span>
          <span className="percentage">50%</span>
        </div>
        <div className="channel">
          <span className="label mms">MMS</span>
          <span className="percentage">50%</span>
        </div>
      </div>
      <div className="response-time">
        <span>Response time (ms)</span>
        <span className="value">{responseTime}</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${responseTime / 100 * 100}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
