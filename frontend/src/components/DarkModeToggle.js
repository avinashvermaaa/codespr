// src/components/DarkModeToggle.js
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Import the context

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        backgroundColor: "transparent",
        border: "none",
        fontSize: "24px",
        cursor: "pointer",
      }}
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? "🌙" : "🌞"}
    </button>
  );
};

export default DarkModeToggle;
