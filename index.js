import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import { Provider } from "react-redux";
import store from "./src/utils/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    {/* <React.strictMode> */}
    <App />
    {/* </React.strictMode> */}
  </Provider>
);
