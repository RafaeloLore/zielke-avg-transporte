import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css"; 

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="burger-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`burger-menu ${isOpen ? "open" : ""}`}>
        <li><a href="/" onClick={() => setIsOpen(false)}>HOME</a></li>
        <li><a href="/Dienstleistungen" onClick={() => setIsOpen(false)}>DIENSTLEISTUNGEN</a></li>
        <li><a href="/jobs" onClick={() => setIsOpen(false)}>JOBS</a></li>
        <li><a href="/contact" onClick={() => setIsOpen(false)}>KONTAKT</a></li>
        <li><a href="/uberuns" onClick={() => setIsOpen(false)}>UBER UNS</a></li>
      </ul>
    </>
  );
};

export default BurgerMenu;
