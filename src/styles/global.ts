import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* Oculta a barra de rolagem vertical, mas mantém a funcionalidade */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    
  }

  *::-webkit-scrollbar {
    display: none; /* Remove a barra de rolagem no Chrome, Safari, Edge */
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
`;
