import React from "react";
//import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Header from "./Header";
import "./App.css"; // 전체 스타일

function App() {
  return (
    <div className="App">
      
      <Header /> 
      <main className="main-content">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
