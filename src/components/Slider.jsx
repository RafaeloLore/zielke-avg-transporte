import React, { useEffect, useState } from 'react';
import '../styles/Slider.css'; // Подключаем стили

function Slider() {
  const images = [
    './R-1.jpg',
    './R-2.jpg',
    './R-3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Смена изображения каждые 3 секунды

    return () => clearInterval(interval); // Очищаем интервал при размонтировании
  }, [images.length]);

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
