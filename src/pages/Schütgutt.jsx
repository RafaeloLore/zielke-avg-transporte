import React from "react";
import { Link } from 'react-scroll';
import Slider from '../components/Slider.jsx';
import AnimatedText from '../components/AnimatedText.jsx';
import { useInView } from 'react-intersection-observer';
function Schütgutt() {
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
        id: 'SCHÜTTGUTTRANSPORTE',
        title: 'SCHÜTTGUTT',
        paragraph:
        '' 
        + '<br>' 
        + 'Unser moderner Fuhrpark ermöglicht den Transport aller Arten von Schüttgütern – sicher, flexibel und zuverlässig.<br>'
        + '<br>' 

        + '<b>Vielseitige Transportmöglichkeiten Wir verfügen über verschiedene Auflieger-Typen, darunter:</b> <br>'
        + '• Thermoisolierte Kippmulden – ideal für den Transport von Asphalt und temperaturempfindlichen Materialien <br>'
        + '• Stabile Kippmulden aus Stahl – robust und vielseitig für alle Arten von Schüttgut<br>'
        + '<br>' 

       + '<b>Flexibilität und Leistungsstärke</b><br>'
        + 'Dank Allradantrieb bei vielen unserer Fahrzeuge können wir auch auf schwierigem Untergrund zuverlässig liefern und entladen. Selbst engste Be- und Entladestellen stellen für uns kein Problem dar. Unser Fuhrpark umfasst sowohl Sattelzüge als auch Dreiachser, um Ihnen flexible Transportlösungen zu bieten.<br>'
        + '<br>' 


        +  '<b>Zertifizierte Qualität und Sicherheit<br></b> Wir sind zertifiziert und ausgerüstet, um auch belastetes Material sicher und vorschriftsgemäß zu transportieren. Ihre Sicherheit und Zufriedenheit stehen bei uns an erster Stelle.<br>'
        + '<br>' 

        +  '<b>Individuelle Beratung und Angebot Kontaktieren Sie uns für ein individuelles Angebot – wir finden die optimale Lösung für Ihren Schüttguttransport.</b>',
        images: ['./B-1.jpg', './B-2.jpg'],
      },
    
    ].map((section) => (
      <AnimatedSection key={section.id} {...section} options={animationOptions} />
    ))}

    {/* Контактная информация */}
    <section className="grey">
    <div className="slogan">
      <h4> Für jede Ladung die richtige Lösung!</h4>
    </div>
    {/* Контактная информация */}
    <div ref={blueMenuRef} className={`blueMenu ${blueMenuInView ? 'visible' : ''}`}>
      
    <div className="blue">
      <h5>Unsere Leistungen im Schüttgutt</h5>
      <p className="bluetext">• Bauschutt und Beton – sicher entsorgt und fachgerecht recycelt</p>
      <br />
      <p className="bluetext">• Sand, Kies und Schotter – für Bauprojekte und Landschaftsgestaltung</p>
      <br />
      <p className="bluetext">• Asphalt – heiß, flexibel und termingerecht geliefert</p>
      <br />
      <p className="bluetext">• Gefährliche Abfälle – fachgerecht und gemäß den gesetzlichen Vorschriften</p>
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

export default Schütgutt;
