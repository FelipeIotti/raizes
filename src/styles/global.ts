import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    scrollbar-width: none; 
    -ms-overflow-style: none;
    
  }

  *::-webkit-scrollbar {
    display: none; 
  }
  

  body{
    background: #EBE6DA;
    color: #F2ECE0;
  }

  body, input, textarea, button {
    width: 100%;
    height: 100%;
    font-family: Helvetica world, sans-serif;
    font-weight: 100;
    font-size: 1rem;
  }

  .custom-carousel .control-arrow {
  width: auto;
  height: auto;
}
`;
