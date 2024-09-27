// src/index.js
import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-tailwind/react'; // Import the ThemeProvider
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider> {/* Wrap the App with the ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
