import React from "react";
import { Link } from 'react-scroll';
import Slider from '../components/Slider';
import AnimatedText from '../components/AnimatedText.jsx';
import { useInView } from 'react-intersection-observer';

function Schütgut() {
    const animationOptions = {
        threshold: 0.2, // Срабатывает, если видно 20% элемента
        triggerOnce: true, // Анимация запускается один раз
      };
  
  return (
    <div>
    {/* Секция с видео */}

     
      {/* Секция с меню 2 */}
      <div className="mainnav2">
        

        <div className="navbar2">
          <div className="navbar-menu2">
            <ul className="menu2-list">
              {[
                'CONTAINERTRANSPORTE',
                'CONTAINERSERVICE',
                'SCHÜTTGUTTRANSPORTE',
                'BAGGERBETRIEB',
                'TIEFLADERTRANSPORTE',
                'LKW MIT LADEKRAN',
              ].map((section) => (
                <li key={section} className="menu2-item">
                  <Link to={section} smooth={true} duration={500}>
                    {section}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


    {/* Секции с контентом */}
    {[
    
      {
        id: 'SCHÜTTGUTTRANSPORTE',
        title: 'SCHÜTTGUTTRANSPORTE',
        paragraph:
          'Unser Fuhrpark umfasst verschiedene Auflieger Typen. Wir haben thermoisolierte Kippmulden aber auch gewöhnliche Kippmulden aus Stahl. Dadurch können wir alle Arten von Schüttgütern transportieren. Egal ob es Bauschutt, Beton, Sand, Kies, Schotter, Asphalt oder sogar belastetes Material ist, wir sind für alles ausgerüstet und zertifiziert. Zudem sind viele unserer Fahrzeug mit Allradantrieb ausgestattet, wodurch wir praktisch auf jedem Untergrund unsere Fahrzeuge einsetzten können. Die engsten Be- und Entladestellen stellen für uns auch kein Problem dar, da unser Fuhrpark nicht nur Sattelzüge sondern auch Dreiachser beinhaltet.',
        images: ['./B-1.jpg', './B-2.jpg'],
      },
    
    ].map((section) => (
      <AnimatedSection key={section.id} {...section} options={animationOptions} />
    ))}

    {/* Контактная информация */}
   
  </div>
);
}

function AnimatedSection({ id, title, paragraph, images, options }) {
const { ref, inView } = useInView(options);

return (
  <div
    id={id}
    ref={ref}
    className={`sectioncarR1 ${inView ? 'visible' : 'hidden'}`}
  >
    <div className="CarR-1 slider">
      <Slider images={images} />
    </div>
    <div className="text-R1">
      <AnimatedText title={title} paragraph={paragraph} />
    </div>
  </div>
  );
}

export default Schütgut;
