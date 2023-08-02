// sass
import "./assets/scss/main.scss";

// css
import "./assets/css/style.css";
import "./assets/css/bootstrap-datetimepicker.css";
import "./assets/css/style.css";
import "./assets/css/themify-icons.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { store } from "@/lib/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
