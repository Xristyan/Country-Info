import React from "react";
import ReactDOM from "react-dom/client";
import ErrorProvider from "./components/store/ErrorProvider";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorProvider>
    <App />
  </ErrorProvider>
);
