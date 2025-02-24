import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  

  return (
    <nav>
      <div className="wrapper">
        <div className="navbar-logo">
          <a href="/">
            <img src="./logo.png" alt="Логотип" className="logo" />
          </a>
        </div>

        {/* Кнопка для мобильного меню */}
        <input type="checkbox" id="menu-btn" />
        <input type="checkbox" id="close-btn" />

        <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <label htmlFor="close-btn" className="btn close-btn">
            <i className="fas fa-times"></i>
          </label>


          {/* Mega Menu */}
          <li 
            className="dropdown"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <a href="#" className="desktop-item">Leistungen</a>
            <input type="checkbox" id="showMega" />
            <label htmlFor="showMega" className="mobile-item">Leistungen</label>

            <div className={`mega-box ${isMegaMenuOpen ? "open" : ""}`}>
              <div className="content">
                

                {/* Transport с вложенным меню */}
                <div className="row submenu-item"
                  onMouseEnter={() => setIsSubmenuOpen(true)}
                  onMouseLeave={() => setIsSubmenuOpen(false)}
                >
                  <header>Transport</header>
                  <ul className="mega-links">
                    <li><a href="/Schütgut">Schütgut</a></li>
                    <li><a href="/transport/sea">Absetzcontainer </a></li>
                    <li><a href="/transport/air">Schwerlast</a></li>
                    <li><a href="/transport/air">Kran</a></li>
                    <li><a href="/transport/air">Uberseecontainer</a></li>
                  </ul>

                  {/* Вложенное меню справа */}
                  
                </div>

                <div className="row">
                  <ul className="mega-links">
                    <li><a href="/contact">Erdbau</a></li>
                    <li><a href="/contact">Baustoff</a></li>
                    <li><a href="/contact">Entsorgung</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li><a href="/jobs">Karriere</a></li>
          <li><a href="/contact">KONTAKT</a></li>
          <li><a href="/contact">Über AVG</a></li>
        </ul>

        <label htmlFor="menu-btn" className="btn menu-btn">
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
