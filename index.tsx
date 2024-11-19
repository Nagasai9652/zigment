import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // TailwindCSS should already be configured
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // Ensures the root element is properly targeted
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
