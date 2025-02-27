import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isTransportOpen, setIsTransportOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="nav">
      <nav>
      <div className="navbar-logo">
           <a href="/">
            <img src="./logo.png" alt="Логотип" className="logo" />
          </a>
    </div>
      <a href="javascript:void(0);" className="mobile-menu-trigger">Open mobile menu</a>
        <ul className="menu menu-bar">
            <li>
                <a href="javascript:void(0);" className="menu-link menu-bar-link" aria-haspopup="true">Leistungen</a>
                <ul className="mega-menu mega-menu--multiLevel">
                    <li>
                        <a href="javascript:void(0);" className="menu-link mega-menu-link" aria-haspopup="true">Transport</a>
                        <ul className="menu menu-list">
                            <li>
                                <a href="/Schütgutt" className="menu-link menu-list-link">Schütgutt</a>
                            </li>
                            <li>
                                <a href="/Absetzcontainer" className="menu-link menu-list-link">Absetzcontainer</a>
                            </li>
                            <li>
                                <a href="/Schwerlast" className="menu-link menu-list-link">Schwerlast</a>
                            </li>
                            <li>
                                <a href="/Kran" className="menu-link menu-list-link">Kran</a>
                            </li>
                            <li>
                            <a href="/Uberseecontainer" className="menu-link menu-list-link">Überseecontainer</a>

                            </li>
                            
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:void(0);" className="menu-link mega-menu-link" aria-haspopup="true">Erdbau</a>
                        <ul className="menu menu-list">
                            <li>
                                <a href="/Bagger" className="menu-link menu-list-link">Bagger</a>
                            </li>
                            
                        </ul>
                    </li>
                    <li>
                        <a href="/Baustoffe" className="menu-link mega-menu-link">Baustoff</a>
                    </li>
                    <li>
                        <a href="/Entsorgung" className="menu-link mega-menu-link">Entsorgung</a>
                    </li>
                    
                    <li className="mobile-menu-back-item">
                      
                        <a href="javascript:void(0);" className="menu-link mobile-menu-back-link">Back</a>
                        
                    </li>
                    
                </ul>
                
            </li>
            

            <li>
                <a href="/jobs" className="menu-link menu-bar-link">Karriere</a>
            </li> <li>
                <a href="/contact" className="menu-link menu-bar-link">Kontakt</a>
            </li>
            <li>
                <a href="/uberuns" className="menu-link menu-bar-link">Über uns</a>
            </li>
              

            <li className="mobile-menu-header">
                <a href="/home" className="">
                    <span>Home</span>
                </a>
            </li>
        </ul>

      </nav>
 </div>
    // <nav>
    //   <div className="wrapper">
    //     <div className="navbar-logo">
    //       <a href="/">
    //         <img src="./logo.png" alt="Логотип" className="logo" />
    //       </a>
    //     </div>

    //     {/* Кнопка для мобильного меню */}
    //     <input type="checkbox" id="menu-btn" />
    //     <input type="checkbox" id="close-btn" />

    //     <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
    //       <label htmlFor="close-btn" className="btn close-btn">
    //         <i className="fas fa-times"></i>
    //       </label>

    //       {/* Mega Menu */}
    //       <li 
    //         className="dropdown"
    //         onMouseEnter={() => setIsMegaMenuOpen(true)}
    //         onMouseLeave={() => setIsMegaMenuOpen(false)}
    //       >
    //         <a href="#" className="desktop-item">Leistungen</a>
    //         <input type="checkbox" id="showMega" />
    //         <label htmlFor="showMega" className="mobile-item">Leistungen</label>

    //         <div className={`mega-box ${isMegaMenuOpen ? "open" : ""}`}>
    //           <div className="content">
                
    //             {/* Transport (Кликабельное подменю, открывающееся СПРАВА) */}
    //             <div 
    //               className="row submenu-item"
    //               onMouseEnter={() => setIsTransportOpen(true)}
    //               onMouseLeave={() => setIsTransportOpen(false)}
    //             >
    //               <header className="clickable">Transport</header>

    //               {/* Подменю Transport ВНУТРИ Mega Menu, но справа */}
    //               <div className={`sub-menu-right ${isTransportOpen ? "open" : ""}`}>
    //                 <ul className="mega-links">
    //                   <li><a href="/Schütgut">Schütgut</a></li>
    //                   <li><a href="/Absetzcontainer">Absetzcontainer</a></li>
    //                   <li><a href="/Schwerlast">Schwerlast</a></li>
    //                   <li><a href="/Kran">Kran</a></li>
    //                   <li><a href="/Uberseecontainer">Überseecontainer</a></li>
    //                 </ul>
    //               </div>
    //             </div>

    //             {/* Остальные услуги остаются слева */}
                
    //             <div className="row">
    //               <ul className="mega-links">
    //                 <li><a href="/Erdbau">Erdbau</a></li>
    //                 <li><a href="/Baustoff">Baustoff</a></li>
    //                 <li><a href="/Entsorgung">Entsorgung</a></li>
    //               </ul>
    //             </div>

    //           </div>
    //         </div>
    //       </li>

    //       <li><a href="/jobs">Karriere</a></li>
    //       <li><a href="/contact">Kontakt</a></li>
    //       <li><a href="/uberuns">Über AVG</a></li>
    //     </ul>

    //     <label htmlFor="menu-btn" className="btn menu-btn">
    //       <i className="fas fa-bars"></i>
    //     </label>
    //   </div>
    // </nav>
  );
}

export default Navbar;