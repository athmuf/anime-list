import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { DarkModeProvider } from "./context/index.jsx";
import App from "./App.jsx";
import "./style/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <App />
        <ToastContainer position="top-center"></ToastContainer>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
