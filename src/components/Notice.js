import React from 'react';
import './Notice.css';

const Notice = () => {
  return (
    <div className="notice-section">
      <strong>※공지사항</strong>
      <ul>
        <li>현재 네트워크 장애로 인해 발송이 제한되고 있습니다.</li>
        <li>2024.12.31부로 서비스가 종료될 예정이오니 참고 부탁드립니다.</li>
      </ul>
      <button className="more-button">더 보기</button>
    </div>
  );
};

export default Notice;
