import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'; // Импортируем Navbar

import './index.css'; // Импортируем глобальные стили
import './app.css'; // Импортируем глобальные стили
import './styles/home.css'; // Импортируем глобальные стили
import './styles/slider.css'; // Импортируем глобальные стили
import './styles/cars.css'; // Импортируем глобальные стили



function App() {
  return (

    <div>
      {/* Навигационная панель */}
      <Navbar />
    <div className='contetn'>
    </div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>

  );
}

export default App;
