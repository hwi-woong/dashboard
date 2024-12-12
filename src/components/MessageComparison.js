import React from 'react';
import './MessageComparison.css';

const MessageComparison = () => {
  const data = [
    { type: 'SMS', count: 631, change: '20건 ↓' },
    { type: 'RCS', count: 631, change: '20건 ↓' },
    { type: '알림톡', count: 631, change: '20건 ↑' },
  ];

  return (
    <div className="message-comparison">
      <h3>전일 대비 발송 건수</h3>
      <div className="comparison-cards">
        {data.map((item, index) => (
          <div className="comparison-card" key={index}>
            <h4>{item.type}</h4>
            <p className="count">{item.count}건</p>
            <p className="change">{item.change}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageComparison;
