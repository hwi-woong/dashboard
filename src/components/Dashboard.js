import React from 'react';
import Notice from './Notice';
import StatusCard from './StatusCard';
import BrokerCard from './BrokerCard';
import TotalMessageStatus from './TotalMessageStatus';
import MessageSuccessRate from './MessageSuccessRate';
import './Dashboard.css'; // 스타일을 추가합니다.

const Dashboard = () => {
  // 데이터 및 상태 정의
  const totalMessageData = {
    labels: ['접수', '분배', '발송'],
    datasets: [
      {
        label: '전체 메시지 발송 현황',
        data: [80, 70, 90],
        backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
      },
    ],
  };

  const successRateData = {
    labels: ['11:00', '12:00', '13:00', '14:00', '15:00'],
    datasets: [
      {
        label: 'RCS',
        data: [80, 75, 85, 90, 88],
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
      {
        label: 'SMS',
        data: [60, 65, 70, 75, 80],
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
      },
      {
        label: '알림톡',
        data: [50, 55, 60, 65, 70],
        borderColor: 'rgba(255, 206, 86, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="dashboard">
      <Notice />
      <div className="dashboard-grid">
        <StatusCard title="접수 현황" percentage={50} icon="https://via.placeholder.com/100" />
        <StatusCard title="접수 데이터 반출 현황" percentage={80} icon="https://via.placeholder.com/100" />
        <BrokerCard name="A 중계사" speed={63.1} average={60.8} trend="↑" />
        <BrokerCard name="B 중계사" speed={50.1} average={60.8} trend="↓" />
        <BrokerCard name="C 중계사" speed={53.1} average={60.8} trend="↓" />
        <TotalMessageStatus data={totalMessageData} />
        <MessageSuccessRate data={successRateData} />
      </div>
    </div>
  );
};

export default Dashboard;
