import { createGlobalStyle } from "styled-components/macro";
import { ThemeProvider } from "styled-components";
import React from "react";

/** color theme **/

export enum theme {
  midnightGreen = "#1a535c",
  turquoise = "#4ecdc4",
  mintCream = "#f7fff7",
  salmonPink = "#ff6b6b",
  naplesYellow = "#ffe66d",
  navBarBG = "#FAF9F9",
  navBarText = "#555B6E",
}

interface IProps {
  children: JSX.Element;
}

export const Theme = (props: IProps): JSX.Element => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

/** Global style **/

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
`;

export default GlobalStyle;
