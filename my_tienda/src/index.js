import React from 'react';
import { createRoot } from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Resto del código...
reportWebVitals();