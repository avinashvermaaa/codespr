import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Import the context

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      style={{
        position: "absolute",
        top: "25px",
        right: "10px",
        backgroundColor: darkMode ? "#333" : "#f0f0f0",
        color: darkMode ? "#f0f0f0" : "#333",
        border: darkMode ? "2px solid #aaa" : "2px solid #555",
        borderRadius: "20%", // Circular button
        width: "43px",
        height: "43px",
        fontSize: "28px", // Emoji size
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
      }}
      aria-label="Toggle Dark Mode"
    >

      {darkMode ? "🌙" : "🌞"}
    </button>
  );
};

export default DarkModeToggle;
