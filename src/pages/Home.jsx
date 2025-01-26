import React from 'react';
import { Link } from 'react-scroll';
import Slider from '../components/Slider';


function Home() {
  return (
    <div>
      {/* Секция с видео */}
<section className="video-section">
        <video className="background-video" autoPlay loop muted>
          <source src="/Zielke AVG Transporte.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>


        
        {/* Секция с меню 2 */}
        <div className='mainnav2'>

        <div className="video-content">
          <h1>Добро пожаловать!</h1>
          <p>Это секция с видео на заднем фоне.</p>
        </div>

        <div className="navbar2">

        <div className="navbar-menu2">
        <ul className="menu2-list">
        <li className="menu2-item">
            <Link to="CONTAINERTRANSPORTE" smooth={true} duration={500}>
            CONTAINERTRANSPORTE
            </Link>
            </li>
            <li className="menu2-item">
            <Link to="SCHÜTTGUTTRANSPORTE" smooth={true} duration={500}>
            SCHÜTTGUTTRANSPORTE
            </Link>
            </li>
            <li className="menu2-item">
            <Link to="BAGGERBETRIEB" smooth={true} duration={500}>
            BAGGERBETRIEB
            </Link>
            </li>
            <li className="menu2-item">
            <Link to="TIEFLADERTRANSPORTE" smooth={true} duration={500}>
            TIEFLADERTRANSPORTE
            </Link>
            </li>
            <li className="menu2-item">
            <Link to="LKW MIT LADEKRAN" smooth={true} duration={500}>
            LKW MIT LADEKRAN
            </Link>
            </li>
        </ul>
      </div>
      </div>
      </div>
      </section>

     {/* Секция с CONTAINERTRANSPORTE */}
     
      <div id="CONTAINERTRANSPORTE" className="sectioncarR1 ">
 
  <div className="CarR-1, slider">
    
    <div className='slider'>
    <Slider
  images={[
    './R-1.jpg',
    './R-2.jpg',
    './R-3.jpg',
  ]}
/>

        </div>
        
      </div>
      <div className='text-R1'>
        <h2>CONTAINERTRANSPORTE
        </h2>
    <p>Wenn Sie auf der Suche nach einem kompetenten
       Transportunternehmen für Container sind, dann sind Sie bei uns genau richtig! Wir sind mit unseren Containerchassis und langjähriger Erfahrung in der Branche bestens für einen Transport von 20-, 30-, 40- und 45-Fuß-Containern aufgestellt.</p>
      </div>
</div>   

{/* Секция с CONTAINERTRANSPORTE */}

{/* Секция с SCHÜTTGUTTRANSPORTE */}
<div id="SCHÜTTGUTTRANSPORTE" className="sectioncarR1 ">
 
  <div className="CarR-1, slider">
    
    <div className='slider'>
    <Slider
  images={[
    './B-1.jpg',
    './B-2.jpg',
  ]}
/>

        </div>
        
      </div>
      <div className='text-R1'>
        <h2>SCHÜTTGUTTRANSPORTE

        </h2>
    <p>Unser Fuhrpark umfasst verschiedene Auflieger Typen. Wir haben thermoisolierte Kippmulden aber auch gewöhnliche Kippmulden aus Stahl. Dadurch können wir alle Arten von Schüttgütern transportieren. Egal ob es Bauschutt, Beton, Sand, Kies, Schotter, Asphalt oder sogar belastetes Material ist, wir sind für alles ausgerüstet und zertifiziert. Zudem sind viele unserer Fahrzeug mit Allradantrieb ausgestattet, wodurch wir praktisch auf jedem Untergrund unsere Fahrzeuge einsetzten können. Die engsten Be- und Entladestellen stellen für uns auch kein Problem dar, da unser Fuhrpark nicht nur Sattelzüge sondern auch Dreiachser beinhaltet.</p>
      </div>
</div>   


{/* Секция с SCHÜTTGUTTRANSPORTE */}

{/* Секция с BAGGERBETRIEB */}

<div id="BAGGERBETRIEB" className="section, bad">
  <h1>BAGGERBETRIEB Section</h1>
</div> 


{/* Секция с BAGGERBETRIEB */}

{/* Секция с CONTAINERTRANSPORTE */}

<div id="CONTAINERTRANSPORTE" className="section, bad">
  <h1>Home Section</h1>
</div> 


{/* Секция с CONTAINERTRANSPORTE */}

{/* Секция с TIEFLADERTRANSPORTE */}

<div id="TIEFLADERTRANSPORTE" className="section, bad">
  <h1>TIEFLADERTRANSPORTE Section</h1>
</div> 


{/* Секция с TIEFLADERTRANSPORTE */}

{/* Секция с LKW MIT LADEKRAN */}

<div id="LKW MIT LADEKRAN" className="section, bad">
  <h1>LKW MIT LADEKRAN Section</h1>
</div>  

{/* Секция с LKW MIT LADEKRAN */}

</div>
  );
}

export default Home;
