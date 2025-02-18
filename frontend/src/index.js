import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure this is correctly imported
import "./styles.css"; // Ensure styles are imported (if any)

const root = ReactDOM.createRoot(document.getElementById("root")); // This should match the "root" div in index.html

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
