import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  /* :focus {
    outline: 0;
    box-shadow: 000 2px #ff007f;
  } */

  body{
    background: #F2ECE0;
    color: #F2ECE0;
  }

  body, input, textarea, button {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
