import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompilerPage from "./pages/CompilerPage";
import DarkModeToggle from "./components/DarkModeToggle";
import { ThemeProvider } from "./context/ThemeContext"; // Import ThemeProvider

function App() {
  return (
    <ThemeProvider>
      <Router>
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/compiler/:language" element={<CompilerPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
