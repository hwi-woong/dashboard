import React from 'react';
import './MessageList.css';

const MessageList = ({ title, messages }) => {
  return (
    <div className="message-list">
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>발송 유형</th>
            <th>접수 시간</th>
            <th>휴대폰</th>
            <th>성공 여부</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, index) => (
            <tr key={index}>
              <td>{message.type}</td>
              <td>{message.time}</td>
              <td>{message.phone}</td>
              <td className={message.success ? 'success' : 'failure'}>{message.success ? '성공' : '실패'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MessageList;
