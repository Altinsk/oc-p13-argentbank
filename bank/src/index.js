/* DEPENDANCIES */
import React from "react";
import ReactDOM from "react-dom/client";

/* COMPONENTS */
import App from "./components/App/index";

/* CSS */
import "./index.css";

/* REDUX */
import { Provider } from "react-redux";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
