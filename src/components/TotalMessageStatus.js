import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'; // 수정된 부분
import './TotalMessageStatus.css';
// Chart.js의 모든 구성 요소를 등록
Chart.register(...registerables);

const MessageSuccessRate = ({ data }) => {
  return (
    <div className="message-success-rate">
      <h3>기간별 메시지 발송 성공률</h3>
      <Line data={data} />
    </div>
  );
};

export default MessageSuccessRate;
