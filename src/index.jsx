import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import global styles
import "normalize.css";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
