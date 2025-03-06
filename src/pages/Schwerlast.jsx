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

// Добавляем наблюдение за blueMenu
const { ref: blueMenuRef, inView: blueMenuInView } = useInView({
  threshold: 0.2,
  triggerOnce: true,
});  return (
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

   +'<b>Warum uns wählen?</b><br>'
   
   +'• Professionelle Planung und Durchführung von Schwerlasttransporten<br>'
   +'• Flexibilität und Pünktlichkeit – wir richten uns nach Ihrem Zeitplan<br>'
   +'• Sicherheit an erster Stelle – mit geschultem Personal und hochwertiger Ausrüstung<br>'
   +'<br>'

   +'<b>Individuelle Angebote und Beratung</b><br>'
   +'Kontaktieren Sie uns – wir erstellen Ihnen gerne ein individuelles Angebot, das auf Ihre Anforderungen zugeschnitten ist.<br>'
   +'<br>',
      images: ['./D-1.jpg'],
    },
    
    ].map((section) => (
      <AnimatedSection key={section.id} {...section} options={animationOptions} />
    ))}

    
    {/* Контактная информация */}
    <section className="grey">
    <div className="slogan">
      <h4>Schwerlastlogistik – stark, zuverlässig, effizient!</h4>
    </div>
    {/* Контактная информация */}
    <div ref={blueMenuRef} className={`blueMenu ${blueMenuInView ? 'visible' : ''}`}>
      
    <div className="blue">
      <h5>Unsere Schwerlast-Transportleistungen:
      </h5>
      <p className="bluetext">• Transport von Baumaschinen – sicher und effizient zur Baustelle      </p>
      <br />
      <p className="bluetext">• Betonteile und Fertigteile – stabil und zuverlässig geliefert
      </p>
      <br />
      <p className="bluetext">• Große Anlagenteile – professioneller Transport von schweren Komponenten
      </p>
      <br />
      <p className="bluetext">• Sperrige Bau- und Industriegüter – flexibel und sicher ans Ziel gebracht
      </p>
    </div>
  </div>
  </section>
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
