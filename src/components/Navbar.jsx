import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='mainnav'>
    <div className="navbar">
      {/* Логотип */}
      <div className="navbar-logo">
      <a href="/">
        <img src="./logo.png" alt="Логотип" className="logo"  />
        </a>
      </div>
      {/* Меню */}
      <div className="navbar-menu">
        <ul className="menu-list">
          <li className="menu-item">
            <a href="/">HOME</a>
          </li>
          <li className="menu-item">
            <a href="/Dienstleistungen">DIENSTLEISTUNGEN</a>
          </li><li className="menu-item">
            <a href="/jobs">JOBS</a>
          </li>
          <li className="menu-item">
            <a href="/contact">KONTAKT</a>
          </li>
          <li className="menu-item">
            <a href="/uberuns">UBER UNS</a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
