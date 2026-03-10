import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CompilerPage from './pages/CompilerPage/CompilerPage';
// import DarkModeToggle from "./components/DarkModeToggle";
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider
import { startHealthCron } from './utils/cronJobs';

function App() {
  useEffect(() => {
    startHealthCron();
  }, []);

  return (
    <ThemeProvider>
      <Router>
        {/* <DarkModeToggle /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/compiler/:language" element={<CompilerPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
