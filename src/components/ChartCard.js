import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'; // 추가

// Chart.js 구성 요소 등록
Chart.register(...registerables); // 추가

const ChartCard = ({ title, data, children }) => {
  return (
    <div className="chart-card">
      <h2>{title}</h2>
      {title === "Daily" || title === "Monthly" ? (
        <Bar data={data} />
      ) : (
        <Line data={data} />
      )}
      {children}
    </div>
  );
};

export default ChartCard;
