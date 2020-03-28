import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Characters from './components/Characters';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 32px 16px;
    background: #fafafa;
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
