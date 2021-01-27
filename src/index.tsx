import ReactDOM from "react-dom";
import React, { StrictMode } from "react";
import GlobalStyles, { Theme } from "./GlobalStyles";
import App from "./App";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <Theme>
      <StateProvider>
        <App />
      </StateProvider>
    </Theme>
  </StrictMode>,
  document.getElementById("root")
);
