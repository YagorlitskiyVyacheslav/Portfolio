// globalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.palette.background};
    font-family: 'Stolzl', sans-serif;
    color: ${({ theme }) => theme.palette.text};
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  svg {
    transition: 300ms;
  }
`;
