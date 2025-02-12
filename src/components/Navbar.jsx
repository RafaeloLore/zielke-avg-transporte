import React, { useState } from 'react';
import '../styles/Navbar.css';
import BurgerMenu from "./BurgerMenu"; 

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1280);

  // Функция для отслеживания изменения ширины экрана
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1280);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mainnav">
      <div className="navbar">
        {/* Логотип */}
        <div className="navbar-logo">
          <a href="/">
            <img src="./logo.png" alt="Логотип" className="logo" />
          </a>
        </div>

        {/* Если экран маленький — показываем бургер */}
        {isMobile ? (
          <BurgerMenu />
        ) : (
          <div className="navbar-menu">
            <ul className="menu-list">
              <li className="menu-item"><a href="/Dienstleistungen">DIENSTLEISTUNGEN</a></li>
              <li className="menu-item"><a href="/jobs">JOBS</a></li>
              <li className="menu-item"><a href="/contact">KONTAKT</a></li>
              <li className="menu-item"><a href="/uberuns">UBER UNS</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
