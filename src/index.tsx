import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style/global';
import App from './App';
import mirageServer from './services/server';

mirageServer();

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
