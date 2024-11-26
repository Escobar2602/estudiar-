import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Importa BrowserRouter
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* Envuélvelo con BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
