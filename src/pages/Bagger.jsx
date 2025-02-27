import React from "react";
import { Link } from 'react-scroll';
import Slider from '../components/Slider.jsx';
import AnimatedText from '../components/AnimatedText.jsx';
import { useInView } from 'react-intersection-observer';

function Bagger() {
    const animationOptions = {
        threshold: 0.2, // Срабатывает, если видно 20% элемента
        triggerOnce: true, // Анимация запускается один раз
      };
   const { ref: blueMenuRef, inView: blueMenuInView } = useInView({
      threshold: 0.2,
      triggerOnce: true,
    }); 
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
        title: 'Bagger',
        paragraph:
        '' 
        + '<br>' 
        + 'Erdarbeiten mit Bagger – Zuverlässig und Präzise Wir bieten Ihnen umfassende Erdarbeiten mit Bagger für Hausbau, Umbau und Anbauten. Mit unseren modernen Baggern führen wir alle anfallenden Arbeiten zuverlässig und präzise aus – von der Baugrubenaushub bis zur Geländemodellierung.<br>'
        + '<br>' 

        + '<b>Vielseitige Einsatzmöglichkeiten</b> <br>'
        + 'Unsere Bagger sind flexibel einsetzbar und eignen sich für verschiedenste Erdarbeiten. Egal, ob es um den Aushub von Baugruben, die Modellierung von Gelände oder das Verfüllen von Fundamenten geht – wir finden für jedes Projekt die passende Lösung.<br>'

        + '<br>' 

        +  '<b>Erdarbeiten für Neubau und Umbau<br></b> Wir unterstützen Sie bei Neubauten, Anbauten und Umbauten mit professionellen Erdarbeiten. Egal, ob es um das Aushub von Baugruben, das Planieren von Bauflächen oder das Verfüllen von Fundamenten geht – unsere Bagger sind vielseitig einsetzbar und sorgen für präzise Ergebnisse<br>'
        +  '<br>' 
        +  '<b>Moderne Bagger und erfahrenes Team</b><br>'
        +  'Unser erfahrenes Team und moderne Bagger gewährleisten eine schnelle und präzise Ausführung aller Arbeiten. Mit unserer Fachkompetenz und Zuverlässigkeit setzen wir Ihre Projekte termingerecht und kosteneffizient um.'
        +  '<b>Individuelle Beratung und Angebot</b><br>'
        +  'Kontaktieren Sie uns für eine persönliche Beratung und ein individuelles Angebot – wir stehen Ihnen gerne zur Verfügung, um die optimale Lösung für Ihre Erdarbeiten zu finden.',
        images: ['./C-1.png', './C-2.jpg', './C-3.jpg'],
        
      },
    
    ].map((section) => (
      <AnimatedSection key={section.id} {...section} options={animationOptions} />
    ))}
{/* Контактная информация */}
<div ref={blueMenuRef} className={`blueMenu ${blueMenuInView ? 'visible' : ''}`}>
    <div className="blue">
      <h5>Unsere Leistungen im Baggerbetrieb:
      </h5>
      <p className="bluetext">• Aushubarbeiten mit Bagger für Fundamente, Keller und Leitungsgräben</p>
      <br />
      <p className="bluetext">• Planierarbeiten zur Vorbereitung von Bauflächen und Gärten</p>
      <br />
      <p className="bluetext">• Abtransport und Entsorgung von Erdaushub und Bauschutt</p>
      <br />
      <p className="bluetext">• Verfüllarbeiten zur Stabilisierung von Bauwerken</p>
    </div>
  </div>
  </div>
);
}

function AnimatedSection({ id, title, paragraph, images, options, }) {
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

export default Bagger;
