import { createGlobalStyle } from 'styled-components';

/**
 * Estilos globales de la aplicación
 * Reset CSS y estilos base
 */
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.text};
    overflow-x: hidden;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: ${props => props.theme.transitions.fast};
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
    outline: none;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.light};
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.darkSecondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.accent};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #556cd6;
  }
`;

export default GlobalStyles;