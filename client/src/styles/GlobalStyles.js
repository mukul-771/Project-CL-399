// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'arial', sans-serif;
    background-color: #f9f9f9;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  /* Add this to your global CSS file or styled-components global styles */
  

`;

export default GlobalStyle;
