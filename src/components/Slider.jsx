import React, { useState, useEffect } from 'react';
import '../styles/Slider.css'; // Стили для слайдера

function Slider({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return; // Если нет изображений, ничего не делаем

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Интервал смены слайдов: 3 секунды

    return () => clearInterval(interval); // Очищаем интервал при размонтировании
  }, [images]);

  if (!images.length) {
    return <div className="slider">Нет изображений для отображения</div>;
  }

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${image})`, // Используем фоновые изображения
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}

export default Slider;
