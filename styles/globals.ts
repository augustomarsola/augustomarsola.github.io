import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #EBEBEB;
    --secondary: #232526;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    background: var(--secondary);
  }

  html,
  body {
    font-family: "Montserrat", sans-serif;
    color: var(--primary);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  .tippy-box {
    background-color: var(--primary);
    color: var(--secondary);
  }

  .tippy-arrow {
    color: var(--primary);
  }
`;
