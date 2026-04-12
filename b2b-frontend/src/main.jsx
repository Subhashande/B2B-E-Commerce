import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ✅ MUST IMPORT
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />   {/* ✅ THIS WAS FAILING */}
    </Provider>
  </React.StrictMode>
);