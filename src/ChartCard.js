import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale, LinearScale, Chart, BarElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, BarElement); // Register the elements and scales

const ChartCard = (props) => {
  return (
    <div className="chart-card">
      <h2>{props.title}</h2>
      <div>{props.data && <Bar data={props.data} />}</div>
      {props.children}
    </div>
  );
};

export default ChartCard;
