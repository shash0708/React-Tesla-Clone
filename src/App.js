import React from 'react';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <Header />
        <Home />
      </StyleSheetManager>
    </div>
  );
}

export default App;
