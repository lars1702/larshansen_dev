import ReactDOM from "react-dom"
import React, { StrictMode } from "react"
import GlobalStyles, { Theme } from "./GlobalStyles"
import App from "./App"
import { StateProvider } from "./StateProvider"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <Theme>
      <StateProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StateProvider>
    </Theme>
  </StrictMode>,
  document.getElementById("root"),
)
