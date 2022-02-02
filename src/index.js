import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PhoneContextProvider from "./components/Context/PhoneContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <PhoneContextProvider>
      <App />
    </PhoneContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
