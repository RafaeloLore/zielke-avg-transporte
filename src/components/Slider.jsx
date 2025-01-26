import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/Slider.css';

function Slider({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Используем хук useInView для отслеживания видимости слайдера
  const { ref, inView } = useInView({
    threshold: 0.5, // 50% элемента должны быть видимы
    triggerOnce: true, // Анимация запускается только один раз
  });

  useEffect(() => {
    if (!inView) return; // Если слайдер не в зоне видимости, не переключаем слайды

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Интервал в 3 секунды

    return () => clearInterval(interval); // Очищаем интервал при размонтировании
  }, [images, inView]);

  if (!images.length) {
    return <div className="slider">Нет изображений для отображения</div>;
  }

  return (
    <div ref={ref} className={`slider ${inView ? 'visible' : ''}`}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}

export default Slider;
