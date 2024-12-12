import React from 'react';
import StatusCard from './StatusCard';
import BrokerCard from './BrokerCard';
import MessageList from './MessageList';
import OverallMessageStatus from './OverallMessageStatus';
import SummaryCards from './SummaryCards';
import MessageGraph from './MessageGraph';
import animationData from './animation.json';
import './Dashboard.css';

const Dashboard = () => {
  const statusData = [
    {
      title: '접수 현황',
      data1: { label: '접수', value: '100건', trend: 9 },
      data2: { label: '분배', value: '99건', trend: -8 },
    },
    {
      title: '접수 데이터 반출 현황',
      data1: { label: '', value: '98%' },
      data2: { label: '', value: '' },
      trend1: 0,
      trend2: 0,
      animation: animationData,
    },
  ];

  const summaryData = [
    { type: 'SMS', value: 631, trend: -20 },
    { type: 'RCS', value: 631, trend: -20 },
    { type: '알림톡', value: 631, trend: 20 },
  ];

  const brokers = [
    { name: 'A중계사', speed: 63.1, average: 60.8, trend: '↑' },
    { name: 'B중계사', speed: 50.1, average: 60.8, trend: '↓' },
  ];

  const messages = [
    { type: '알림톡', time: '11:00', phone: '01012341234', success: true },
    { type: 'RCS', time: '11:00', phone: '01012341234', success: false },
    { type: 'SMS', time: '11:00', phone: '01012341234', status: '성공' },
  ];

  const graphLabels = ['10:00', '11:00', '12:00', '13:00', '14:00'];
  const graphData = {
    received: [1200, 1100, 1000, 950, 900],
    sent: [1100, 1000, 950, 900, 850],
  };

  return (
    <div className="dashboard">
      {/* Top Section */}
      <div className="dashboard-top">
        {statusData.map((status, index) => (
          <StatusCard key={index} {...status} />
        ))}

        {/* App Component Integration */}
        <StatusCard
          title="접수 현황 (실시간)"
          data1={{ label: '접수', value: '100건', trend: 9 }}
          data2={{ label: '분배', value: '99건', trend: -8 }}
          percentage={98}
          animation={animationData}
          messages={messages}
        />
      </div>

      {/* Middle Section */}
      <div className="dashboard-middle">
        <OverallMessageStatus />
        <SummaryCards data={summaryData} />
        {brokers.map((broker, index) => (
          <BrokerCard key={index} {...broker} />
        ))}
        <MessageList title="최근 접수 메시지" messages={messages} />
      </div>

      {/* Bottom Section */}
      <div className="dashboard-bottom">
        <MessageGraph
          title="SMS 기간별 접수, 발송 메시지"
          data={graphData}
          labels={graphLabels}
        />
        <MessageGraph
          title="RCS 기간별 접수, 발송 메시지"
          data={graphData}
          labels={graphLabels}
        />
        <MessageGraph
          title="알림톡 기간별 접수, 발송 메시지"
          data={graphData}
          labels={graphLabels}
        />
      </div>
    </div>
  );
};

export default Dashboard;