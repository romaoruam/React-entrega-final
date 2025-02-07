import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container-fluid p-0"> {/* 🔥 Aseguramos que ocupe el ancho total */}
      <App />
    </div>
  </StrictMode>
);
