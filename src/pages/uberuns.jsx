import React from 'react';
import '../styles/uberuns.css'; // Подключаем стили
import { Link } from 'react-scroll';
import Slider1 from '../components/Slider2.jsx';
import AnimatedText from '../components/AnimatedText.jsx';
import { useInView } from 'react-intersection-observer';
function uberuns() {
  const animationOptions = {
    threshold: 0.2, // Срабатывает, если видно 20% элемента
    triggerOnce: true, // Анимация запускается один раз
  };

  return (
    <section className='item3'>
      <div className='item4'>
      {/* Секция с видео */}
      

      {/* Секции с контентом */}
      {[
        {
          id: 'UnsereFirmengründung',
          title: 'Unsere Firmengründung',
          paragraph:
            'ist auf das Jahr 2005 zurückzuführen. Anfangs waren wir im internationalen Transportbereich tätig und haben Transporte innerhalb der Europäischen Union durchgeführt.',
          images: ['./H-3.jpg'],
        },
        {
          id: 'Nachlangjähriger',
          title: 'Nach langjähriger',
          paragraph:
            'Erfahrung im Fernverkehr, entschlossen wir uns schließlich in die Container-Transportbranche zu wechseln. Nach dem wir uns erfolgreich in der Container-Transportbranche im Rhein-Main-Gebiet etabliert hatten, konzentrierten wir uns ab 2013 auf den Transport von Schüttgütern.',
          images: ['./H-2.jpg'],
        },
        {
          id: 'Nachwievorführen',
          title: 'Nach wie vor führen',
          paragraph:
            'Nach wie vor führen wir erfolgreich mit unserem engagierten Team Container und Schüttguttransporte durch. Wir haben auch in Zukunft vor unser Unternehmen stätig zu erweitern. Wenn Sie ein Teil unseres Wachstums werden wollen, dann zögern Sie nicht uns zu kontaktieren.',
          images: ['./H-1.jpg'],
        },
        
      ].map((section) => (
        <AnimatedSection key={section.id} {...section} options={animationOptions} />
      ))}

      {/* Контактная информация */}
      </div>
    </section>
  );
}

function AnimatedSection({ id, title, paragraph, images, options }) {
  const { ref, inView } = useInView(options);

  return (
    <div
      id={id}
      ref={ref}
      className={`sectioncarC1 ${inView ? 'visible' : 'hidden'}`}
    >
      <div className="CarC-1 slider1">
        <Slider1 images={images} />
      </div>
      <div className="text-C1">
        <AnimatedText title={title} paragraph={paragraph} />
      </div>
    </div>
    
  );
}

export default uberuns;
