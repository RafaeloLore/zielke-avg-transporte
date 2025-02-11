import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Jobs from './pages/Jobs';
import LKWFahrer from './pages/LKWFahrer';
import LKWKranfahrer from './pages/LKWKranfahrer';
import Dienstleistungen from './pages/Dienstleistungen';
import Datenschutz from './pages/Datenschutz';
import Impressum from './pages/Impressum';
import Uberuns from './pages/uberuns';
import Navbar from './components/Navbar'; // Импортируем Navbar
import Footer from './components/Footer'; // Импортируем футер
import ScrollToTopButton from "./components/ScrollToTopButton.jsx"; // Импортируем кнопку
import CookieConsent from "./components/CookieConsent"; // Импортируем

import './styles/index.css'; // Импортируем глобальные стили
import './app.css'; // Импортируем глобальные стили
import './styles/home.css'; // Импортируем глобальные стили
import './styles/Slider.css'; // Импортируем глобальные стили
import './styles/cars.css'; // Импортируем глобальные стили



function App() {
  return (

    <div>
      {/* Навигационная панель */}
      <Navbar />
    <div className='contetn'>
    <div>
      <CookieConsent /> {/* Показываем баннер с cookies */}
      {/* Другие компоненты */}
    </div>
    </div>

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/uberuns" element={<Uberuns />} />
        <Route path="/dienstleistungen" element={<Dienstleistungen />} />
        <Route path="/jobs/lkw-fahrer" element={<LKWFahrer />} />
        <Route path="/jobs/lkw-kranfahrer" element={<LKWKranfahrer />} />
        <Route path="/Datenschutz" element={<Datenschutz />} />
        <Route path="/Impressum" element={<Impressum />} />
      </Routes>
      <ScrollToTopButton /> {/* Кнопка "Наверх" */}
      <Footer /> {/* Футер теперь на всех страницах */}

      </div>

  );
}

export default App;
