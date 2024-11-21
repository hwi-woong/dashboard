import React from 'react';
import { Line } from 'react-chartjs-2';

const ResponseTimeCard = ({ responseTime, dailyChange, data }) => {
  const lineData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Response Time',
        data: data.values,
        fill: true,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="dashboard-card">
      <h2>Response time (ms)</h2>
      <p>{responseTime}</p>
      <span style={{ color: dailyChange > 0 ? 'green' : 'red' }}>
        daily: {dailyChange > 0 ? `+${dailyChange}%` : `${dailyChange}%`}
      </span>
      <Line data={lineData} options={{ scales: { y: { beginAtZero: true } } }} />
    </div>
  );
};

export default ResponseTimeCard;
