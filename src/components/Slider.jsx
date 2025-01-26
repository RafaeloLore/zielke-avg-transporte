import React, { useEffect, useState } from 'react';
import '../styles/Slider.css'; // Подключаем стили


function Slider({ images = [] }) { // Задаём значение по умолчанию
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return; // Если массив пустой, не запускаем слайдер

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images.length) {
    return <div className="slider">Нет изображений для отображения</div>;
  }

  return (
    <div className="slider">
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