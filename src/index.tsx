import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './style/global';
import { Provider } from './context/generalContext';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
);
