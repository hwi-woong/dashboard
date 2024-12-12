import React from 'react';
import './OverallMessageStatus.css';

const OverallMessageStatus = () => {
  return (
    <div className="overall-message-status">
      <h3>전체 메시지 발송 현황</h3>
      <div className="status-flow">
        <div className="status-item">
          <div className="circle green">접수</div>
        </div>
        <div className="status-arrow">
          <span className="line green"></span>
        </div>
        <div className="status-item">
          <div className="circle green">분배</div>
        </div>
        <div className="status-arrow">
          <span className="line orange"></span>
        </div>
        <div className="status-item">
          <div className="circle orange">발송</div>
        </div>
      </div>
    </div>
  );
};

export default OverallMessageStatus;
