import React, { useState } from 'react';
import Dashboard from './Dashboard';
import SidebarMenu from './SidebarMenu';
import Header from './Header'; // Header 컴포넌트 임포트
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <Header onToggleMenu={toggleMenu} /> {/* Header 추가 */}
      <div className="app-content">
        {isMenuOpen && <SidebarMenu />}
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
