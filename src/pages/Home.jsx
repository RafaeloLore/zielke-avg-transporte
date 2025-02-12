import React from 'react';
import { Link } from 'react-scroll';
import Slider from '../components/Slider';
import Stats from "../components/Stats"; // Импортируем секцию статистики

import AnimatedText from '../components/AnimatedText.jsx';
import { useInView } from 'react-intersection-observer';

function Home() {
  const animationOptions = {
    threshold: 0.2, // Срабатывает, если видно 20% элемента
    triggerOnce: true, // Анимация запускается один раз
  };

  return (
    <div>
      {/* Секция с видео */}
      <section className="video-section">
        <video className="background-video" autoPlay loop muted>
          <source src="/Zielke AVG Transporte.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        
        {/* Секция с меню 2 */}
        <div className="mainnav2">
          <div className="video-content">
          <div className='stats_section'>
    


    {/* Статистика */}
    <Stats   />
   


  </div>
           
          </div>
          <div className="navbar2">
            <div className="navbar-menu2">
              <ul className="menu2-list">
                {[
                  
                  'Unsere Dienstleistungen',
                  'Unsere Mission',
                  'Jobs',
                  'Material',
                  'Kontakte',
                  
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
      </section>

      {/* Секции с контентом */}
      
      
      {[
        
        
        {
          id: 'Unsere Dienstleistungen',
          title: 'Unsere Dienstleistungen',
          paragraph:
            'Wir bieten eine Vielzahl von Transportdienstleistungen, darunter: Containertransporte Bagerbetrib Frachttransporte Transport von Baumaschinen und vieles mehr!',
          images: [ './4.jpg'],
        },
        {
          id: 'Unsere Mission',
          title: 'Unsere Mission',
          paragraph:
            'Wir streben nach höchster Qualität und arbeiten täglich daran, dieses Ziel zu erreichen.Unsere Werte- Qualität und Zuverlässigkeit – Wir garantieren hohe Standards in allem, was wir tun.- Teamarbeit und Respekt – Gemeinsam erreichen wir mehr.- Innovation und Entwicklung – Wir fördern Kreativität und persönliches Wachstum.',
          images: [ './2.jpg', ],
        },
        {
          id: 'Jobs',
          title: 'Jobs',
          paragraph:
            'Werden Sie Teil unseres Teams!Starten Sie Ihre Karriere in einem Unternehmen, das Talent schätzt und Wachstum fördert.Das bieten wir IhnenAttraktives Gehalt und BoniWeiterbildungs- und AufstiegsmöglichkeitenEin motiviertes Team und angenehmes ArbeitsklimaBewerbungSo einfach bewerben Sie sich bei uns:Klicken Sie auf "Bewerben" und senden Sie uns Ihr Profil.',
          images: [ './5.jpg'],
        },
        {
          id: 'Material',
          title: 'Material',
          paragraph:
            'Wenn Sie nicht die passende Dienstleistung finden, die Sie benötigen, schreiben Sie uns einfach oder rufen Sie uns an. Wir informieren Sie gerne individuell und finden die beste Lösung für Sie.',
            
         
          
            images: ['./material.JPG',],
        },
        {
          id: 'Kontakte',
          title: 'Kontakte',
          paragraph:
            'Wenn Sie nicht die passende Dienstleistung finden, die Sie benötigen, schreiben Sie uns einfach oder rufen Sie uns an. Wir informieren Sie gerne individuell und finden die beste Lösung für Sie.',
            
         
          
            images: ['./6.jpg',],
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

export default Home;
