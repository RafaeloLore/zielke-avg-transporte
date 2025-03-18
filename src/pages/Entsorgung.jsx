import React from "react";
import { Link } from 'react-scroll';
import Slider from '../components/Slider.jsx';
import AnimatedText from '../components/AnimatedText.jsx';
import { useInView } from 'react-intersection-observer';

function Entsorgung() {
   
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
        title: 'Entsorgung',
        paragraph:
        '' 
        + '<br>' 
        + '<b>Erdarbeiten mit Bagger </b>– Wir bieten Ihnen professionelle Entsorgungslösungen für verschiedenste Abfallarten sowie effiziente Erdarbeiten. Unser Fokus liegt auf umweltgerechter und gesetzeskonformer Abwicklung, um Ihnen eine sorgenfreie Entsorgung zu ermöglichen.<br>'
        + '<br>' 

        + '<b>Flexible Lösungen für Ihre Entsorgung</b> <br>'
        + 'Egal, ob bei Bauprojekten, Umbauten oder Gartenarbeiten – wir passen unsere Dienstleistungen flexibel an Ihre Bedürfnisse an und sorgen für eine reibungslose Entsorgung.<br>'
        + '<br>' 

        + '<b>Effiziente Abwicklung und Nachhaltigkeit</b> <br>'
        + 'Mit unserer modernen Ausrüstung und erfahrenem Team gewährleisten wir eine effiziente Abwicklung Ihrer Entsorgungsvorhaben. Dabei legen wir großen Wert auf umweltgerechtes Recycling und nachhaltige Verwertung der Abfälle.<br>'
        + '<br>' 

        + '<b>Sicherheit und Verantwortung</b> <br>'
        + 'Unsere Entsorgungsprozesse entsprechen den höchsten Sicherheits- und Umweltstandards. Wir sind zertifiziert und garantieren Ihnen eine verantwortungsvolle und sichere Entsorgung.<br>'
        + '<br>' 

        + '<b>Individuelle Beratung und Angebot</b> <br>'
        +  'Kontaktieren Sie uns für ein maßgeschneidertes Angebot. Wir beraten Sie gerne und finden die optimale Lösung für Ihre Entsorgungs- und Erdarbeiten.',
        images: ['./F-1.jpg' ],
      },
    
    ].map((section) => (
      <AnimatedSection key={section.id} {...section} options={animationOptions} />
    ))}

   
    {/* Контактная информация */}
    <section className="grey">
    <div className="slogan">
      <h4> Entsorgung leicht gemacht – schnell, sicher und umweltfreundlich!</h4>
    </div>
    {/* Контактная информация */}
    <div ref={blueMenuRef} className={`blueMenu ${blueMenuInView ? 'visible' : ''}`}>
      
    <div className="blue">
      <h5>Unsere Entsorgungsleistungen:</h5>
      <p className="bluetext">• Aushub – Sicherer Abtransport von Erdaushub und Bodenmaterialien. Egal ob bei Bauprojekten, Gartenarbeiten oder Geländeplanierungen – wir entsorgen Ihren Aushub fachgerecht und umweltfreundlich.
      </p>
      <br />
      <p className="bluetext">• Gefährliche Abfälle – Zertifizierte Entsorgung von gefährlichen Stoffen wie Asbest, belastetem Boden oder anderen Schadstoffen. Wir kümmern uns um eine sichere und gesetzeskonforme Entsorgung.
      </p>
      <br />
      <p className="bluetext">• Bauschutt – Effiziente und kostengünstige Entsorgung von Bauschutt und Bauabfällen, wie Beton, Ziegel, Fliesen oder Mischabfällen. Wir sorgen für eine umweltgerechte Verwertung und Entsorgung.
      </p>
      <br />
      <p className="bluetext">• Baggerleistungen – Professionelle Baggerarbeiten für Aushub und Geländevorbereitung. Mit unserem modernen Maschinenpark und erfahrenem Personal garantieren wir präzise und effiziente Arbeiten.
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

export default Entsorgung;
