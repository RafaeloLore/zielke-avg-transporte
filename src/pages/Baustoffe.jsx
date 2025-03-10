import React from "react";
import { Link } from 'react-scroll';
import Slider from '../components/Slider.jsx';
import AnimatedText from '../components/AnimatedText.jsx';
import { useInView } from 'react-intersection-observer';

function Baustoffe() {
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
        title: 'Baustoffe',
        paragraph:
        '' 
        + '<br>' 
        + '<b>Hochwertige Baustoffe für Ihr Projekt</b><br>'
        + '<br>' 

        + 'Wir bieten Ihnen eine breite Auswahl an hochwertigen Baustoffen, die optimal auf Ihre Bauprojekte und Gartenarbeiten abgestimmt sind. Egal ob Neubau, Renovierung oder Gartengestaltung – bei uns finden Sie die passenden Materialien. <br>'
       
        + '<br>' 

        +  '<b>Zuverlässige Lieferung direkt zur Baustelle</b><br>'
        +  'Mit unserem modernen Fuhrpark liefern wir Ihre Baustoffe termingerecht und flexibel direkt zu Ihrem Bauvorhaben oder Gartenprojekt – auch an schwer zugängliche Stellen.<br>'
        +  '<br>' 
        +  '<b>Persönliche Beratung und maßgeschneiderte Angebote</b><br>'
        +  'Kontaktieren Sie uns für eine individuelle Beratung. Wir unterstützen Sie bei der Auswahl der passenden Baustoffe und erstellen Ihnen ein maßgeschneidertes Angebot für Ihr Projekt.',
        images: ['./material.JPG'],
      },
    
    ].map((section) => (
      <AnimatedSection key={section.id} {...section} options={animationOptions} />
    ))}

       {/* Контактная информация */}
       <section className="grey">
    <div className="slogan">
      <h4> Von Sand bis Schotter – alles für Ihren Bau, schnell und zuverlässig!</h4>
    </div>
    {/* Контактная информация */}
    <div ref={blueMenuRef} className={`blueMenu ${blueMenuInView ? 'visible' : ''}`}>
      
    <div className="blue">
      <h5>Unsere Baustoffe im Überblick:</h5>
      <p className="bluetext">• Sand – Vielseitig einsetzbar für Bauarbeiten, Pflasterungen und Gartenprojekte.</p>
      <br />
      <p className="bluetext">• Estrichsand – Perfekt geeignet für Estricharbeiten und als Unterbau für Bodenbeläge.</p>
      <br />
      <p className="bluetext">• Kies – Für Betonherstellung, Drainagen und als dekoratives Element im Garten.</p>
      <br />
      <p className="bluetext">• Edelsplitt – Hochwertiger Splitt für Pflasterarbeiten, Wege und dekorative Flächen.</p>
      <br />
      <p className="bluetext">• Schotter – Robuster Unterbau für Wege, Einfahrten und Bauprojekte.</p>
      <br />
      <p className="bluetext">• Recycling – Umweltfreundliche Recycling-Baustoffe für nachhaltiges Bauen und Sanieren.</p>
      <br />
      <p className="bluetext">• Pflanzboden – Nährstoffreicher Boden für Garten- und Landschaftsbau, ideal für Beete und Rasenflächen.</p>
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

export default Baustoffe;
