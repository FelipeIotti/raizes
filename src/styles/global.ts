import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body{
    background: #F2ECE0;
    color: #F2ECE0;
  }

  body, input, textarea, button {
    width: 100%;
    height: 100%;
    font-family: Helvetica, sans-serif;
    font-weight: 100;
    font-size: 1rem;
  }
`;
