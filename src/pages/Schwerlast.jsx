import React from 'react';
import { Link } from 'react-scroll';
import Slider from '../components/Slider';
import AnimatedText from '../components/AnimatedText.jsx';
import { useInView } from 'react-intersection-observer';

function Schwerlast() {
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
      id: 'TIEFLADERTRANSPORTE',
      title: 'SCHWERLAST',
      paragraph:
    ''
    +'<br>'
   +'<b>Haben Sie schwere und sperrige Transportgüter wie Baumaschinen, Betonteile oder Kranteile zu transportieren?</b> Dann ist unser Tieflader die ideale Lösung für Sie.<br>'
   +'<br>'

   +'<b>Unsere Schwerlast-Transportleistungen:</b><br>'
   
   +'• Transport von Baumaschinen – sicher und effizient zur Baustelle<br>'
   +'• Betonteile und Fertigteile – stabil und zuverlässig geliefert<br>'
   +'• Kranteile und Großkomponenten – professioneller Schwerlasttransport<br>'
   +'<br>'

   +'<b>Tieflader mieten für Ihren Bedarf</b><br>'
   +'Sie können unseren Tieflader auch für den Eigenbedarf mieten, um Ihre Transporte flexibel und selbstständig durchzuführen.<br>'
   +'<br>'

   +'<b>Individuelle Angebote und Beratung</b><br>'
   +'Kontaktieren Sie uns bei Bedarf – wir erstellen Ihnen gerne ein individuelles Angebot, das auf Ihre Anforderungen zugeschnitten ist.<br>',
      images: ['./D-1.jpg'],
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

export default Schwerlast;
