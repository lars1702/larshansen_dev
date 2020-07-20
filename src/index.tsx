import ReactDOM from "react-dom"
import React, { StrictMode } from "react"
import GlobalStyle from "./GlobalStyles"
import App from "./App"

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById("root")
)
