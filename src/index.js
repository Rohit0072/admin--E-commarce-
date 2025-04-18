import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
reportWebVitals();