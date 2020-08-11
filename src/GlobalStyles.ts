import { createGlobalStyle } from "styled-components/macro"

export const colors = {
  midnightGreen: "1a535c",
  turquoise: "4ecdc4",
  mintCream: "f7fff7",
  salmonPink: "ff6b6b",
  naplesYellow: "ffe66d",
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
  }
  
  body {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f7fff7;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyle