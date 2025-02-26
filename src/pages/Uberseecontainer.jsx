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
        id: 'CONTAINERTRANSPORTE',
        title: 'Überseecontainer',
        paragraph:
        '' 
        + '<br>' 
        +'<b>Wir bieten zuverlässigen Transport von Überseecontainern direkt vom Hafen bis zu Ihrem Zielort und umgekehrt.</b> Mit unserer langjährigen Erfahrung und modernen Containerchassis sorgen wir für eine sichere und pünktliche Lieferung Ihrer Container.<br>' 
        + '<br>' 
        +'<b>Wir transportieren:</b>'
        + '<br>' 
        +'• <b>20-Fuß-Container</b> – ideal für kleinere Ladungen<br>' 
        +'• <b>30-Fuß-Container</b> – flexibel und vielseitig einsetzbar<br>' 
        +'• <b>40-Fuß-Container</b> – für große Güter und umfangreiche Fracht<br>' 
        +'• <b>45-Fuß-Container</b> – maximale Kapazität für effizienten Transport<br>' 
        + '<br>' 
        +'<b>Flexibilität und Zuverlässigkeit</b><br>' 
        +'Wir übernehmen die Abholung der Überseecontainer direkt aus dem Hafen und transportieren sie sicher bis zum gewünschten Zielort. Ebenso sorgen wir für die pünktliche Lieferung Ihrer Container zum Hafen für den Weitertransport. Unser erfahrenes Team plant und organisiert den Transport präzise und effizient, um eine termingerechte Lieferung zu gewährleisten.<br>' 
        + '<br>' 
        +'<b>Moderne Technik und vielseitiger Einsatz</b><br>' 
        +'Mit unseren Containerchassis sind wir flexibel aufgestellt und können Überseecontainer unterschiedlichster Größen sicher und effizient transportieren.',
        images: ['./R-1.jpg', './R-2.jpg', './R-3.jpg'],
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

export default Uberseecontainer;
