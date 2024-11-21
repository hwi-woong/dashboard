import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Dashboard.css';
import ChartCard from './ChartCard';
import InfoCard from './InfoCard';
import FooterCard from './FooterCard';

// Chart.js 구성 요소 등록 (생략)

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date('2023-11-13'));
  const [endDate, setEndDate] = useState(new Date('2023-11-19'));

  const allData = [
    { date: '2023-11-13', value: 100 },
    { date: '2023-11-14', value: 120 },
    { date: '2023-11-15', value: 90 },
    { date: '2023-11-16', value: 130 },
    { date: '2023-11-17', value: 110 },
    { date: '2023-11-18', value: 150 },
    { date: '2023-11-19', value: 130 },
  ];

  const filteredData = allData.filter(data => {
    const dataDate = new Date(data.date);
    return dataDate >= startDate && dataDate <= endDate;
  });

  const lineData = {
    labels: filteredData.map(data => data.date),
    datasets: [
      {
        label: 'Daily Data',
        data: filteredData.map(data => data.value),
        fill: true,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 2,
      },
    ],
  };

  const monthlyData = [
    { date: '2023-11-01', value: 90 },
    { date: '2023-11-02', value: 100 },
    { date: '2023-11-03', value: 110 },
    { date: '2023-11-04', value: 95 },
    { date: '2023-11-05', value: 105 },
    { date: '2023-11-06', value: 120 },
    { date: '2023-11-07', value: 130 },
    { date: '2023-11-08', value: 125 },
    { date: '2023-11-09', value: 115 },
    { date: '2023-11-10', value: 110 },
  ];

  const monthlyLineData = {
    labels: monthlyData.map(data => data.date),
    datasets: [
      {
        label: 'Monthly Data',
        data: monthlyData.map(data => data.value),
        fill: true,
        backgroundColor: 'rgba(200, 200, 200, 0.2)',
        borderColor: 'rgba(200, 200, 0, 1)',
        borderWidth: 2,
      },
    ],
  };

  const barData = {
    labels: ['11:13', '11:59'],
    datasets: [
      {
        label: 'Weekly Data',
        data: [70, 60],
        backgroundColor: 'rgba(200, 200, 200, 0.6)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

  const hourlyVisitorsLabels = ['00:00', '01:00', '02:00', '03:00', '04:00'];
  const hourlyVisitorsData = [50, 60, 55, 70, 65];

  return (
    <div className="dashboard">
      <h1>Messaging Dashboard</h1>
      <div className="dashboard-grid">
        <ChartCard title="Daily" data={barData} />
        <ChartCard title="By Period" data={lineData}>
          <div className="date-selector">
            <span>From: </span>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            <span> To: </span>
            <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
          </div>
        </ChartCard>
        <ChartCard title="Monthly" data={monthlyLineData} />
        <InfoCard title="Response time (ms)" value="29.38" />
        <InfoCard title="Hourly Call Count" value="890K" />
        <ChartCard title="Hourly Visitors" data={{ labels: hourlyVisitorsLabels, datasets: [{ label: 'Hourly Visitors', data: hourlyVisitorsData }] }} />
      </div>
      <footer className="dashboard-footer">
        <FooterCard title="Active service" value="314" />
        <FooterCard title="Response time (ms)" value="29.38" />
        <FooterCard title="Active DB Connection" value={<progress value="83" max="100"></progress>} />
        <FooterCard title="Monthly Messages" value="42000" />
      </footer>
    </div>
  );
};

export default Dashboard;
