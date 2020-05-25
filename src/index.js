import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ModalState from "./context/modal/ModalState";
import GlobalStyle from "./GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ModalState>
      <App />
    </ModalState>
  </React.StrictMode>,
  document.getElementById("root")
);
