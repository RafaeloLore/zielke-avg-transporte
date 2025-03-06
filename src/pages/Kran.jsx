import React from "react";
import { Link } from 'react-scroll';
import Slider from '../components/Slider';
import AnimatedText from '../components/AnimatedText.jsx';
import { useInView } from 'react-intersection-observer';
function Kran() {
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
      id: 'LKW MIT LADEKRAN',
      title: 'KRAN',
      paragraph:
    ''
    + '<br>' 

    +'<b>Wir bieten LKW mit Ladekran, die eine effiziente Be- und Entladung ermöglichen – ganz ohne zusätzlichen Telekran.</b> Damit sind wir <b>flexibel</b> und <b>unabhängig</b> bei der <b>Anlieferung</b> und <b>Abholung</b> von schweren und sperrigen Gütern<br>'
    + '<br>' 

    +'<b>Unsere LKW mit Ladekran eignen sich ideal für den Transport und das Verladen von:</b>'
    + '<br>' 

    +'• Baustellenmaterialien – wie Paletten, Gerüste und Bauelemente'
    + '<br>' 

    +'• Maschinen und Geräte – sicher und effizient an den gewünschten Ort<br>'
    + '<br>' 

    +'<b>Effizient und Kostensparend</b>'
    + '<br>' 

    +'Dank des integrierten Krans sparen Sie sich die Organisation und Kosten für einen zusätzlichen Telekran. Unsere flexiblen Einsatzmöglichkeiten und unabhängige Arbeitsweise machen uns zum idealen Partner für schwere Lasten und spezielle Transportanforderungen.<br>'
    + '<br>' 

    +'<b>Individuelle Beratung und Angebot</b>'
    + '<br>' 


    +'Kontaktieren Sie uns, um ein individuelles Angebot zu erhalten. Wir beraten Sie gerne und finden die optimale Lösung für Ihre Anforderungen.'
    + '<br>'  ,

    
      images: ['./E-1.jpg', './E-2.jpg', './E-3.jpg'],
    },
    
    ].map((section) => (
      <AnimatedSection key={section.id} {...section} options={animationOptions} />
    ))}

    {/* Контактная информация */}
    <section className="grey">
    <div className="slogan">
      <h4>Flexibel, stark, zuverlässig – mit unserem LKW mit Ladekran!</h4>
    </div>
    {/* Контактная информация */}
    <div ref={blueMenuRef} className={`blueMenu ${blueMenuInView ? 'visible' : ''}`}>
      
    <div className="blue">
      <h5>Vorteile unserer LKW mit Ladekran:</h5>
      <p className="bluetext">• Flexibles Be- und Entladen direkt vor Ort – auch an schwer zugänglichen Stellen</p>
      <br />
      <p className="bluetext">• Kein zusätzlicher Telekran erforderlich – Zeit und Kosten sparen</p>
      <br />
      <p className="bluetext">• Vielseitig einsetzbar für Baustellen, Lieferungen, Montagearbeiten und vieles mehr</p>
      <br />
      <p className="bluetext">• Sicher und präzise dank moderner Krantechnik und erfahrener Bedienung</p>
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

export default Kran;
