import React from "react";
import { Link } from 'react-scroll';
import Slider from '../components/Slider';
import AnimatedText from '../components/AnimatedText.jsx';
import { useInView } from 'react-intersection-observer';

function Absetzcontainer() {
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
        id: 'CONTAINERSERVICE',
        title: 'CONTAINERSERVICE',
        paragraph:
          'Wir können Ihnen Absetzcontainer von 5 m³ bis 10 m³ zur Verfügung stellen. Darüber hinaus liefern wir Schüttgüter wie Schotter, Mutterboden, Sand, Kies für Ihre Baustelle. In unseren Absetzcontainern können Sie problemlos Bauschut, Erdaushub, Altholz, Baustellenmischabfälle, Gipsabfälle, Gartenabfälle, Asphalt und vieles mehr entsorgen. Die Stellung der Container erfolgt durch modernste Fahrzeuge unseres telematikgesteuerten Fuhrparks.',
        images: ['./F-1.jpg', './F-2.jpg', './F-3.jpg'],
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

export default Absetzcontainer;
