// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background: ${({ theme }) => (theme === 'dark' ? '#333' : '#fff')};
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#333')};
  }
`;

export default GlobalStyle;
