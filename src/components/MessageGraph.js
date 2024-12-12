import React from 'react';
import { Line } from 'react-chartjs-2';
import './MessageGraph.css';
import {
  Chart as ChartJS,
  CategoryScale, // For "category" scale (used in labels)
  LinearScale,   // For numerical scales
  PointElement,  // For points on the graph
  LineElement,   // For lines on the graph
  Title,         // For the chart title
  Tooltip,       // For tooltips
  Legend         // For the legend
} from 'chart.js';

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MessageGraph = ({ title, data, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: '접수',
        data: data.received,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: '발송',
        data: data.sent,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="message-graph">
      <h4>{title}</h4>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default MessageGraph;
