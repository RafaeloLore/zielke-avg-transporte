import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AnimatedText.css';

function AnimatedText({ title, paragraph, buttonLink, buttonText }) {
  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
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
      <p className={`animated-paragraph ${isVisible ? 'visible' : ''}`} dangerouslySetInnerHTML={{ __html: paragraph }} />
      
      {/* Показываем кнопку только если переданы `buttonLink` и `buttonText` */}
      {buttonLink && buttonText && (
        <button onClick={() => navigate(buttonLink)} className="nav-button">
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default AnimatedText;
