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
        id: 'SCHÜTTGUTTRANSPORTE',
        title: 'SCHÜTTGUTTRANSPORTE',
        paragraph:
        '' 
        + 'Unser moderner Fuhrpark ermöglicht den Transport aller Arten von Schüttgütern – sicher, flexibel und zuverlässig.<br>'
        + 'Vielseitige Transportmöglichkeiten <br>'
        + '• Thermoisolierte Kippmulden – ideal für den Transport von Asphalt und temperaturempfindlichen Materialien <br>'
        + '• Stabile Kippmulden aus Stahl – robust und vielseitig für alle Arten von Schüttgut<br>'
        + 'Wir transportieren:<br>'
        + '• Bauschutt und Beton – sicher entsorgt und fachgerecht recycelt<br>'
        + '• Sand, Kies und Schotter – für Bauprojekte und Landschaftsgestaltung<br>'
        + '• Asphalt – heiß oder kalt, flexibel und termingerecht geliefert<br>'
        + '• Belastetes Material – fachgerecht und gemäß den gesetzlichen Vorschriften<br>'
        +  'Flexibilität und Leistungsstärke Dank Allradantrieb bei vielen unserer Fahrzeuge können wir auch auf schwierigem Untergrund zuverlässig liefern und entladen. Selbst engste Be- und Entladestellen stellen für uns kein Problem dar. Unser Fuhrpark umfasst sowohl Sattelzüge als auch Dreiachser, um Ihnen flexible Transportlösungen zu bieten.'
        +  'Zertifizierte Qualität und Sicherheit Wir sind zertifiziert und ausgerüstet, um auch belastetes Material sicher und vorschriftsgemäß zu transportieren. Ihre Sicherheit und Zufriedenheit stehen bei uns an erster Stelle.'
        +  'Individuelle Beratung und Angebot Kontaktieren Sie uns für ein individuelles Angebot – wir finden die optimale Lösung für Ihren Schüttguttransport.',
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

export default Schütgutt;
