import React, { useEffect, useRef, useState } from 'react';
import './AnimatedText.css';

function AnimatedText() {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Текст видим, запускаем анимацию
        }
      },
      { threshold: 0.5 } // Элемент считается видимым, если 50% его площади видны
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={textRef}
      className={`animated-text ${isVisible ? 'visible' : ''}`}
    >
      Добро пожаловать на наш сайт!
    </div>
  );
}

export default AnimatedText;
