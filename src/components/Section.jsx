import React from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from './Slider';
import '../styles/Section.css';

function Section({ id, title, paragraph, images }) {
  // Хук для отслеживания видимости секции
  const { ref, inView } = useInView({
    threshold: 0.3, // Секция считается видимой, если видно 30%
    triggerOnce: true, // Срабатывает только один раз
  });

  return (
    <div
      id={id}
      ref={ref}
      className={`section ${inView ? 'visible' : 'hidden'}`} // Добавляем класс в зависимости от видимости
    >
      <div className="slider-container">
        <Slider images={images} />
      </div>
      <div className="text-container">
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default Section;
