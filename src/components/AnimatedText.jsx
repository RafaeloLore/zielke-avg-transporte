import React, { useEffect, useRef, useState } from 'react';
import '../styles/AnimatedText.css';

function AnimatedText({ title, paragraph }) {
  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Запускаем анимацию, когда элемент становится видимым
        }
      },
      { threshold: 0.5 } // 50% видимости элемента
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="animated-container">
      <h1 className={`animated-title ${isVisible ? 'visible' : ''}`}>
        {title}
      </h1>
      <p className={`animated-paragraph ${isVisible ? 'visible' : ''}`}>
        {paragraph}
      </p>
    </div>
  );
}

export default AnimatedText;
