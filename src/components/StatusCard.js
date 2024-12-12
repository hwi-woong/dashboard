import React from "react";
import { Lottie } from "lottie-react";
import "./StatusCard.css";

const StatusCard = ({ title, data1, data2, percentage, messages, animation }) => {
  return (
    <div className="status-card">
      <h3>{title}</h3>
      <div className="status-card-content">
        {/* 데이터 흐름 블록 */}
        <div className="status-flow">
          <div className="status-node">
            <span>{data1.label}</span>
            <strong>{data1.value}</strong>
          </div>
          <div className="status-connector"></div>
          <div className="status-node">
            <span>{data2.label}</span>
            <strong>{data2.value}</strong>
          </div>
        </div>

        {/* 트렌드 데이터 */}
        <div className="trend-container">
          <div className={`trend ${data1.trend > 0 ? "up" : "down"}`}>
            전일 동시간 대비<br />
            {data1.trend}건 {data1.trend > 0 ? "↑" : "↓"}
          </div>
          <div className={`trend ${data2.trend > 0 ? "up" : "down"}`}>
            전일 동시간 대비<br />
            {data2.trend}건 {data2.trend > 0 ? "↑" : "↓"}
          </div>
        </div>

        {/* 애니메이션 또는 퍼센트 데이터 */}
        {animation ? (
          <div className="status-animation">
            {/*<Lottie animationData={animation} loop={true}>*/}
          </div>
        ) : (
          <div className="status-percentage">
            <div className="percentage-box">{percentage}%</div>
          </div>
        )}

        {/* 메시지 리스트 */}
        {messages && (
          <div className="status-messages">
            <table>
              <thead>
                <tr>
                  <th>항목</th>
                  <th>시간</th>
                  <th>휴대폰</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg, index) => (
                  <tr key={index}>
                    <td>{msg.type}</td>
                    <td>{msg.time}</td>
                    <td>{msg.phone}</td>
                    <td className={msg.status === "성공" ? "success" : "fail"}>
                      {msg.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusCard;
