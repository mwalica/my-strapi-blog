import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ModalState from "./context/modal/ModalState";
import AuthState from "./context/auth/AuthState";
import GlobalStyle from "./GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthState>
      <ModalState>
        <App />
      </ModalState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById("root")
);
