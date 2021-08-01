import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootswatch/dist/lumen/bootstrap.min.css";
import "./styles.scss";

console.clear();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
