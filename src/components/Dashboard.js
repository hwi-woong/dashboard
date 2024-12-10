import React from 'react';
import StatusCard from './StatusCard';
import BrokerCard from './BrokerCard';
import MessageList from './MessageList';
import GraphSection from './GraphSection';
import './Dashboard.css';

const Dashboard = () => {
  const statusData = [
    {
      title: '접수 현황',
      data1: { label: '접수', value: '100건' },
      data2: { label: '분배', value: '99건' },
      trend1: 9,
      trend2: -8,
    },
    {
      title: '접수 데이터 반출 현황',
      data1: { label: '', value: '98%' },
      data2: { label: '', value: '' },
      trend1: 0,
      trend2: 0,
    },
  ];

  const brokers = [
    { name: 'A중계사', speed: 63.1, average: 60.8, trend: '↑' },
    { name: 'B중계사', speed: 50.1, average: 60.8, trend: '↓' },
  ];

  const messages = [
    { type: '알림톡', time: '11:00', phone: '01012341234', success: true },
    { type: 'RCS', time: '11:00', phone: '01012341234', success: false },
  ];

  const graphData = {
    labels: ['10:00', '11:00', '12:00', '13:00', '14:00'],
    datasets: [
      {
        label: '접수',
        data: [1200, 1100, 1000, 950, 900],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // 필요시 배경색 추가
        fill: true,
      },
      {
        label: '발송',
        data: [1100, 1000, 950, 900, 850],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)', // 필요시 배경색 추가
        fill: true,
      },
    ],
  };
  
  return (
    <div className="dashboard">
      <div className="dashboard-top">
        {statusData.map((status, index) => (
          <StatusCard key={index} {...status} />
        ))}
      </div>
      <div className="dashboard-middle">
        {brokers.map((broker, index) => (
          <BrokerCard key={index} {...broker} />
        ))}
        <MessageList title="최근 접수 메시지" messages={messages} />
      </div>
      <div className="dashboard-bottom">
        <GraphSection title="전체 메시지 발송 현황" data={graphData} />
      </div>
    </div>
  );
};

export default Dashboard;
