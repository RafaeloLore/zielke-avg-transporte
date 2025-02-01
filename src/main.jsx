import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Исправленный импорт
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './styles/index.css'; // Если используете стили

// Создаём корневой узел React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
