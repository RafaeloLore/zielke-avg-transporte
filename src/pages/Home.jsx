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
              <Stats />
            </div>
          </div>
          <div className="navbar2">
            <div className="navbar-menu2">
              <ul className="menu2-list">
                {[
                  'Unsere Mission',
                  'Karriere',
                  'Baustoff',
                  'Kontakt',
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
          id: 'Unsere Mission',
          title: 'Unsere Mission',
          paragraph:
        '<br>'
          + '<b>Höchste Qualität und Zuverlässigkeit stehen bei uns an erster Stelle.</b> Wir arbeiten täglich mit Leidenschaft daran, Ihnen den bestmöglichen Service zu bieten und Ihre Erwartungen zu übertreffen.<br><br>'
            + '<b>Unsere Werte</b><br>'
            + '• Qualität und Zuverlässigkeit – Wir garantieren hohe Standards in allem, was wir tun, und stehen zu unseren Versprechen.<br>'
            + '• Teamarbeit und Respekt – Gemeinsam erreichen wir mehr. Wir schätzen Vielfalt und gegenseitigen Respekt und fördern eine positive Arbeitsatmosphäre.<br>'
            + '• Innovation und Entwicklung – Wir fördern Kreativität und persönliches Wachstum und setzen auf kontinuierliche Weiterentwicklung, um stets die besten Lösungen zu bieten.<br>'
            + '<br>'
            + '<b>Ihre Zufriedenheit ist unser Antrieb.</b> Mit Leidenschaft und Engagement arbeiten wir daran, nachhaltige Werte zu schaffen und langfristige Partnerschaften aufzubauen.',
          images: ['./Mission.jpg'],
          reverse: true,
          buttonLink: '/Uberuns',
          buttonText: 'Über uns',
        },
        {
          id: 'Karriere',
          title: 'Karriere',
          paragraph:
            '<br>'
            + '<b>Werden Sie Teil unseres Teams!</b> Starten Sie Ihre Karriere in einem Unternehmen, das Talent schätzt und Wachstum fördert.<br><br>'
            + '<b>Das bieten wir Ihnen</b><br>'
            + '• Attraktives Gehalt und Boni<br>'
            + '• Weiterbildungs- und Aufstiegsmöglichkeiten<br>'
            + '• Ein motiviertes Team und angenehmes Arbeitsklima<br><br>'
            + '<b>Bewerbung</b><br>'
            + 'So einfach bewerben Sie sich bei uns: Klicken Sie auf "Bewerben" und senden Sie uns Ihr Profil.',
          images: ['./5.jpg'],
          reverse: false,
          buttonLink: '/jobs',  // Оставляем только одну ссылку
          buttonText: 'Bewerben', // Оставляем один текст кнопки
        },
        
        {
          id: 'Baustoff',
          title: 'Baustoff',
          paragraph:
          '' 
          + '<br>' 
            + '• Sand<br>'
            + '• Estrichsand<br>'
            + '• Kies<br>'
            + '• Edelsplitt<br>'
            + '• Schotter<br>'
            + '• Recycling<br>'
            + '• Pflanzboden<br>'
            + '<br>'
            + 'Wenn Sie nicht die passende Baustoff finden, die Sie benötigen, schreiben Sie uns einfach oder rufen Sie uns an.<b> Wir informieren Sie gerne individuell und finden die beste Lösung für Sie.</b>',
      
         
            images: ['./material.JPG'],
          reverse: true,
          buttonLink: '/contact',
          buttonText: 'Kontakt',
        },
        {
          id: 'Kontakt',
          title: '',
          paragraph:
          '<br>'
            +'<b>Haben Sie Fragen? Wir sind für Sie da!</b><br>'
            +'Kontaktieren Sie uns und lassen Sie sich von unseren Experten beraten. Wir helfen Ihnen gerne, die beste Lösung für Ihr Anliegen zu finden.',
          images: ['./6.jpg'],
          reverse: false,
          buttonLink: '/contact',
          buttonText: 'Kontakt',
        },
      ].map((section) => (
        <AnimatedSection key={section.id} {...section} options={animationOptions} />
      ))}
    </div>
  );
}

function AnimatedSection({
  id,
  title,
  paragraph,
  images,
  reverse,
  options,
  buttonLink,
  buttonText
}) {
  const { ref, inView } = useInView(options);

  return (
    <div
      id={id}
      ref={ref}
      className={`sectioncarR1 ${inView ? 'visible' : 'hidden'} ${reverse ? 'reverse' : ''}`}
    >
      {/* Меняем порядок блоков в зависимости от reverse */}
      {reverse ? (
        <>
          <div className="text-R1">
            <AnimatedText title={title} paragraph={paragraph} />
            <div className='btncentr'>

            {buttonLink && buttonText && (
              <a href={buttonLink} className="button-link">
                {buttonText}
              </a>
            )}
                        </div>

          </div>
          <div className="CarR-1 slider">
            <Slider images={images} />
          </div>
        </>
      ) : (
        <>
          <div className="CarR-1 slider">
            <Slider images={images} />
          </div>
          <div className="text-R1">
            <AnimatedText title={title} paragraph={paragraph} />
            <div className='btncentr'>
            {buttonLink && buttonText && (
              <a href={buttonLink} className="button-link">
                {buttonText}
              </a>
              
            )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}



export default Home;
