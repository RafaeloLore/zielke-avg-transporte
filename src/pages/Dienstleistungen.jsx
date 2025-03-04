import React from 'react';
import { Link } from 'react-scroll';
import Slider from '../components/Slider';
import AnimatedText from '../components/AnimatedText.jsx';
import { useInView } from 'react-intersection-observer';



function Dienstleistungen() {
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
              id: 'CONTAINERTRANSPORTE',
              title: 'CONTAINERTRANSPORTE',
              paragraph:
                'Wenn Sie auf der Suche nach einem kompetenten Transportunternehmen für Container sind, dann sind Sie bei uns genau richtig! Wir sind mit unseren Containerchassis und langjähriger Erfahrung in der Branche bestens für einen Transport von 20-, 30-, 40- und 45-Fuß-Containern aufgestellt.',
              images: ['./R-1.jpg', './R-2.jpg', './R-3.jpg'],
            },
            {
              id: 'CONTAINERSERVICE',
              title: 'CONTAINERSERVICE',
              paragraph:
                'Wir können Ihnen Absetzcontainer von 5 m³ bis 10 m³ zur Verfügung stellen. Darüber hinaus liefern wir Schüttgüter wie Schotter, Mutterboden, Sand, Kies für Ihre Baustelle. In unseren Absetzcontainern können Sie problemlos Bauschut, Erdaushub, Altholz, Baustellenmischabfälle, Gipsabfälle, Gartenabfälle, Asphalt und vieles mehr entsorgen. Die Stellung der Container erfolgt durch modernste Fahrzeuge unseres telematikgesteuerten Fuhrparks.',
              images: ['./F-1.jpg', './F-2.jpg', './F-3.jpg'],
            },
            {
              id: 'SCHÜTTGUTTRANSPORTE',
              title: 'SCHÜTTGUTTRANSPORTE',
              paragraph:
                'Unser Fuhrpark umfasst verschiedene Auflieger Typen. Wir haben thermoisolierte Kippmulden aber auch gewöhnliche Kippmulden aus Stahl. Dadurch können wir alle Arten von Schüttgütern transportieren. Egal ob es Bauschutt, Beton, Sand, Kies, Schotter, Asphalt oder sogar belastetes Material ist, wir sind für alles ausgerüstet und zertifiziert. Zudem sind viele unserer Fahrzeug mit Allradantrieb ausgestattet, wodurch wir praktisch auf jedem Untergrund unsere Fahrzeuge einsetzten können. Die engsten Be- und Entladestellen stellen für uns auch kein Problem dar, da unser Fuhrpark nicht nur Sattelzüge sondern auch Dreiachser beinhaltet.',
              images: ['./B-1.jpg', './B-2.jpg'],
            },
            {
              id: 'BAGGERBETRIEB',
              title: 'BAGGERBETRIEB',
              paragraph:
                'Ab sofort führen wir alle Arbeiten aus, die im Zusammenhang mit dem Hausbau, Umbau und Anbauten als Erdarbeiten anfallen. Auch der Abbruch bestehender Gebäude wird gerne übernommen.',
              images: ['./C-1.png', './C-2.jpg', './C-3.jpg'],
            },
            {
              id: 'TIEFLADERTRANSPORTE',
              title: 'TIEFLADERTRANSPORTE',
              paragraph:
                'Haben sie sperrige Transportgüter, wie Baumaschinen, Betonteile oder Kranteile zu transportieren? Dann eignet sich unser Tieflader perfekt für Sie. Gerne können Sie auch unseren Tieflader für den Eigenbedarf mieten. Kontaktieren Sie uns doch bei Bedarf und wir unterbreiten Ihnen ein individuelles Angebot.',
              images: ['./D-1.jpg'],
            },
            {
              id: 'LKW MIT LADEKRAN',
              title: 'LKW MIT LADEKRAN',
              paragraph:
                'Zu unserer Leistung gehört auch die Gestellung von LKW mit Ladekran, die bei einer Be- und Entladung keinen zusätzlichen Telekran benötigen.',
              images: ['./E-1.jpg', './E-2.jpg', './E-3.jpg'],
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

export default Dienstleistungen;
