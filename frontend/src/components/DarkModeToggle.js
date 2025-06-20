import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Import the context

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      style={{
        position: "fixed",  // change to fixed for better visibility (absolute)
        top: "0px",
        right: "25px",
        background: "linear-gradient(45deg, #FF9933, #138808)",
        // background: "linear-gradient(45deg, #007bff, red)",  

        // color: darkMode ? "#f0f0f0" : "#333",
        // backgroundColor: darkMode ? "#333" : "#f0f0f0",
        // border: darkMode ? "0px solid #FF9933" : "0px solid #FF9933",
        borderRadius: "20%", // Circular button
        width: "43px",
        height: "43px",
        fontSize: "28px", // Emoji size
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        zIndex: 100, // Ensure it appears above other elements
      }}
      aria-label="Toggle Dark Mode"
    >

      {darkMode ? "🌙" : "🌞"}
    </button>
  );
};

export default DarkModeToggle;
