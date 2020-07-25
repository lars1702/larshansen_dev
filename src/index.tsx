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

//if (module.hot) {
//  module.hot.accept()
//}

/*
above code works because of @types/webpack-env package
alternative code without @types/webpack-env package:
if ((module as any).hot) (module as any).hot.accept()
Use in case of conflict with types on other libraries
*/
