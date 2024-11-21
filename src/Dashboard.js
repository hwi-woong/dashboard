import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  PointElement,
} from 'chart.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Dashboard.css';

// Chart.js 구성 요소 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, Filler, PointElement);

const Dashboard = () => {
  // 상태 변수로 날짜 범위 관리 (시작일과 종료일)
  const [startDate, setStartDate] = useState(new Date('2023-11-13'));
  const [endDate, setEndDate] = useState(new Date('2023-11-19'));

  // 예시 데이터 배열
  const allData = [
    { date: '2023-11-13', value: 100 },
    { date: '2023-11-14', value: 120 },
    { date: '2023-11-15', value: 90 },
    { date: '2023-11-16', value: 130 },
    { date: '2023-11-17', value: 110 },
    { date: '2023-11-18', value: 150 },
    { date: '2023-11-19', value: 130 },
  ];

  // 선택된 날짜 범위에 맞는 데이터 필터링
  const filteredData = allData.filter(data => {
    const dataDate = new Date(data.date);
    return dataDate >= startDate && dataDate <= endDate;
  });

  // 일별 데이터를 위한 꺾은선 그래프 데이터
  const lineData = {
    labels: filteredData.map(data => data.date), // 날짜 레이블
    datasets: [
      {
        label: 'Daily Data', // 그래프 레이블
        data: filteredData.map(data => data.value), // 데이터 값
        fill: true,
        backgroundColor: 'rgba(255, 206, 86, 0.2)', // 배경 색상
        borderColor: 'rgba(255, 206, 86, 1)', // 테두리 색상
        borderWidth: 2, // 테두리 두께
      },
    ],
  };

  // 월별 데이터 (예시 데이터)
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

  // 월별 데이터 값 추출
  const monthlyFilteredData = monthlyData.map(data => data.value);

  // 월별 데이터를 위한 꺾은선 그래프 데이터
  const monthlyLineData = {
    labels: monthlyData.map(data => data.date), // 날짜 레이블
    datasets: [
      {
        label: 'Monthly Data', // 그래프 레이블
        data: monthlyFilteredData, // 데이터 값
        fill: true,
        backgroundColor: 'rgba(200, 200, 200, 0.2)', // 배경 색상
        borderColor: 'rgba(200, 200, 0, 1)', // 테두리 색상
        borderWidth: 2, // 테두리 두께
      },
    ],
  };

  // 주간 데이터를 위한 막대 그래프 데이터
  const barData = {
    labels: ['11:13', '11:59'], // 시간 레이블
    datasets: [
      {
        label: 'Weekly Data', // 그래프 레이블
        data: [70, 60], // 데이터 값
        backgroundColor: 'rgba(200, 200, 200, 0.6)', // 배경 색상
        borderColor: 'rgba(0, 0, 0, 1)', // 테두리 색상
        borderWidth: 1, // 테두리 두께
      },
    ],
  };

  // 막대 그래프 옵션
  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10, // y축 눈금 간격
        },
      },
    },
    animation: {
      duration: 1000, // 애니메이션 지속 시간
      easing: 'easeInOutQuart', // 애니메이션 효과
    },
  };

  // 꺾은선 그래프 옵션
  const lineOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20, // y축 눈금 간격
        },
      },
    },
    animation: {
      duration: 1000, // 애니메이션 지속 시간
      easing: 'easeInOutQuart', // 애니메이션 효과
    },
  };
  const hourlyVisitorsLabels = ['00:00', '01:00', '02:00', '03:00', '04:00']; 
        const hourlyVisitorsData = [50, 60, 55, 70, 65]; // 방문자 데이터 예시

  return (
    <div className="dashboard">
      {/* 대시보드 제목 */}
      <h1>Messaging Dashboard</h1>

      <div className="dashboard-grid">
        {/* Daily 데이터 카드 */}
        <div className="dashboard-card">
          <h2>Daily</h2>
          <p>4000</p>
          <span>Weekly: -5%</span>
          <Bar data={barData} options={barOptions} />
        </div>

        {/* 날짜 범위별 데이터 카드 */}
        <div className="dashboard-card">
          <h2>By Period</h2>
          <p>{filteredData.length} Entries</p>
          <span>Daily: +10%</span>
          <Line data={lineData} options={lineOptions} />
          <div className="date-selector">
            <span>From: </span>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <span> To: </span>
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
          </div>
        </div>

        {/* 월별 데이터 카드 */}
        <div className="dashboard-card">
          <h2>Monthly</h2>
          <p>100</p>
          <span>Daily: -3%</span>
          <Line data={monthlyLineData} options={lineOptions} />
        </div>

        {/* 응답 시간 카드 */}
        <div className="dashboard-card">
          <h2>Response time (ms)</h2>
          <p>29.38</p>
        </div>

        {/* 시간별 호출 횟수 카드 */}
        <div className="dashboard-card">
          <h2>Hourly Call Count</h2>
          <p>890K</p>
        </div>
   

        {/* 시간별 방문자 카드 */}
        <div className="dashboard-card">
          <h2>Hourly Visitors</h2>
          <p>100</p>
          <span>Hourly: +20%</span>
          <Line 
            data={{
              labels: hourlyVisitorsLabels,
              datasets: [
                {
                  label: 'Hourly Visitors',
                  data: hourlyVisitorsData,
                  fill: true,
                  backgroundColor: 'rgba(0, 200, 100, 0.2)',
                  borderColor: 'rgba(0, 200, 100, 1)',
                  borderWidth: 2,
                },
              ],
            }} 
            options={lineOptions} 
            />
        </div>
      </div>

      {/* 대시보드 하단 섹션 */}
      <footer className="dashboard-footer">
        <div className="footer-grid">
          {/* 활성 서비스 카드 */}
          <div className="footer-card">
            <h3>Active service</h3>
            <p>314</p>
          </div>
          {/* 응답 시간 카드 */}
          <div className="footer-card">
            <h3>Response time (ms)</h3>
            <p>29.38</p>
          </div>
        </div>

        {/* DB 연결 상태 카드 */}
        <div className="footer-card">
          <h3>Active DB Connection</h3>
          <progress value="83" max="100"></progress>
          <span>83%</span>
        </div>

        {/* 월별 메시지 카드 */}
        <div className="footer-card">
          <h3>Monthly Messages</h3>
          <p>42000</p>
          <span>Last 30 Days: +5%</span>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
