import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './GraphSection.css';

// Chart.js의 구성 요소를 등록
Chart.register(...registerables);

const GraphSection = ({ title, data }) => {
  return (
    <div className="graph-section">
      <h3>{title}</h3>
      <Line data={data} options={{ responsive: true }} />
    </div>
  );
};


export default GraphSection;
