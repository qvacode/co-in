import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routes } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Routes>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Routes>
);
