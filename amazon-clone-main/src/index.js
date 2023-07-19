import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./stateprovider";
import reducer, { initialState } from "./reducer";
ReactDOM.render(
  <React.Fragment>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.Fragment>,
  document.getElementById("root")
);
