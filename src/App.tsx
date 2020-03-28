import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Characters from './components/Characters';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #4a5b9a;
    font-family: Arial;
  }
`;

function App() {
  return (
    <>
      <Characters />
      <GlobalStyle />
    </>
  );
}

export default App;
