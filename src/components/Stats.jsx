import React, { useEffect, useState } from "react";
import "../styles/Stats.css"; // Подключаем CSS

const Stats = () => {
  const stats = [
    { title: "Bisher transportierte Frachtmenge", start: 3444000, end: 3744000, duration: 2000, unit: "Tonn" },
    { title: "Recyclingquote von Schrott und Baustoffen", start: 46, end: 97, duration: 1000, isPercentage: true },
    { title: "Jahrelange Erfahrung", start: 7, end: 20, duration: 3000 },
  ];

  const [values, setValues] = useState(stats.map((stat) => stat.start));

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      let start = stat.start;
      const increment = (stat.end - stat.start) / (stat.duration / 50);

      const interval = setInterval(() => {
        start += increment;
        if (start >= stat.end) {
          clearInterval(interval);
          start = stat.end;
        }
        setValues((prev) => {
          const newValues = [...prev];
          newValues[index] = Math.round(start);
          return newValues;
        });
      }, 50);

      return interval;
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  return (
    <div className="stats-container">
      <div className="stats-box">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-number">
              {values[index].toLocaleString()} {/* Форматируем число с разделением тысяч */}
              {stat.isPercentage ? "%" : stat.unit ? ` ${stat.unit}` : ""}
            </span>
            <span className="stat-title">{stat.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
