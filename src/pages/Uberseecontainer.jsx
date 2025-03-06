import React from "react";
import { Link } from 'react-scroll';
import Slider from '../components/Slider';
import AnimatedText from '../components/AnimatedText.jsx';
import { useInView } from 'react-intersection-observer';
function Uberseecontainer() {
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
        id: 'CONTAINERTRANSPORTE',
        title: 'Überseecontainer',
        paragraph:
        '' 
        + '<br>' 
        +'<b>Überseecontainer – Sicher und pünktlich ans Ziel<br></b>' 
        +'Wir bieten zuverlässigen Transport von Überseecontainern direkt vom Hafen bis zu Ihrem Zielort und umgekehrt. Mit unserer langjährigen Erfahrung und modernen Containerchassis sorgen wir für eine sichere und pünktliche Lieferung Ihrer Container.<br>'
        +'<br>'
        +'<b>Flexibilität und Zuverlässigkeit</b><br>' 
        +'Wir übernehmen die Abholung der Überseecontainer direkt aus dem Hafen und transportieren sie sicher bis zum gewünschten Zielort. Ebenso sorgen wir für die pünktliche Lieferung Ihrer Container zum Hafen für den Weitertransport. Unser erfahrenes Team plant und organisiert den Transport präzise und effizient, um eine termingerechte Lieferung zu gewährleisten.<br>' 
        + '<br>' 
        +'<b>Individuelle Lösungen für Ihren Bedarf</b><br>' 
        +'Egal ob Einzeltransport oder regelmäßige Containerlogistik – wir bieten Ihnen flexible Lösungen, die genau auf Ihre Anforderungen zugeschnitten sind.<br>'
        + '<br>' 
        +'<b>Moderne Technik und vielseitiger Einsatz</b><br>' 
        +'Unsere modernen Fahrzeuge und geschulten Fahrer gewährleisten einen reibungslosen Ablauf und höchste Zuverlässigkeit.',
        images: ['./R-1.jpg', './R-2.jpg', './R-3.jpg'],
      },
    
    ].map((section) => (
      <AnimatedSection key={section.id} {...section} options={animationOptions} />
    ))}

    
    {/* Контактная информация */}
    <section className="grey">
    <div className="slogan">
      <h4> Sicher und pünktlich – Überseecontainer in besten Händen!</h4>
    </div>
    {/* Контактная информация */}
    <div ref={blueMenuRef} className={`blueMenu ${blueMenuInView ? 'visible' : ''}`}>
      
    <div className="blue">
      <h5>Wir transportieren:</h5>
      <p className="bluetext">• 20-Fuß-Container – ideal für kleinere Ladungen</p>
      <br />
      <p className="bluetext">• 30-Fuß-Container – flexibel und vielseitig einsetzbar</p>
      <br />
      <p className="bluetext">• 40-Fuß-Container – für große Güter und umfangreiche Fracht</p>
      <br />
      <p className="bluetext">• 45-Fuß-Container – maximale Kapazität für effizienten Transport</p>
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

export default Uberseecontainer;
