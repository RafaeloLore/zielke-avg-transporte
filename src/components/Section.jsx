import React from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from './Slider';
import '../styles/Section.css';

function Section({ id, title, paragraph, images, reverse = false }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      id={id}
      ref={ref}
      className={`section ${inView ? 'visible' : 'hidden'} ${reverse ? 'reverse' : ''}`}
    >
      <div className="slider-container">
        <Slider images={images} />
      </div>
      <div className="text-container">
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: paragraph }} />
      </div>
    </div>
  );
}

export default Section;
