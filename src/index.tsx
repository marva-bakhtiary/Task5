import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Pages/Home";
import "./index.less";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
