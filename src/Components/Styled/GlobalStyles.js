import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
}

body{
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: white;
 }

 .darkMode{
  background-color: black;
 }

 .darkMode h1{
  color: white;
 }


`;
export default GlobalStyles;
