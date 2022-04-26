import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./components/Pages/Home";
import "./index.less";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

reportWebVitals();
