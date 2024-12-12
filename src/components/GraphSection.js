import React from 'react';
import { Line } from 'react-chartjs-2'; // Line 컴포넌트를 가져옵니다.
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Chart.js에서 필요한 구성 요소 등록
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GraphSection = ({ title, data }) => {
  return (
    <div className="graph-section">
      <h3>{title}</h3>
      {/* Line 컴포넌트에 데이터와 옵션 전달 */}
      <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default GraphSection;
