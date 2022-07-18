import React from 'react';
import ReactDOM from 'react-dom/client';
import { OngApp } from './OngApp';
import './css/index.css';
import './css/bootstrap.min.css';
import { AllProvider } from './context/AllContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AllProvider>
      <OngApp />
    </AllProvider>
  </React.StrictMode>
)
