import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import { Provider } from "react-redux";
import storeConfig from "./redux/store/Store";
import reportWebVitals from "./reportWebVitals";
import App from "./components/Pages/App";

const store = storeConfig();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
