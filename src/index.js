import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './AuthContext';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);

reportWebVitals();