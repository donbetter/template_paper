import React, { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { ReaderPage } from './components/ReaderPage';
import { DashboardPage } from './components/DashboardPage';
import { ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.LANDING);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Default to dark for that nice hero aesthetic

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderView = () => {
    switch (view) {
      case ViewState.LANDING:
        return (
          <LandingPage 
            onNavigate={setView} 
            isDarkMode={isDarkMode} 
            toggleTheme={toggleTheme} 
          />
        );
      case ViewState.READER:
        return (
          <ReaderPage 
            onBack={() => setView(ViewState.LANDING)} 
            isDarkMode={isDarkMode} 
          />
        );
      case ViewState.DASHBOARD:
        return (
          <DashboardPage 
            onBack={() => setView(ViewState.LANDING)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {renderView()}
    </>
  );
};

export default App;
