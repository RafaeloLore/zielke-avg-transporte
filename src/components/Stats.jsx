import React, { useEffect, useState } from "react";
import "../styles/Stats.css"; // Подключаем CSS


const Stats = () => {
  const stats = [
    { title: "Zufriedene Kunden", start: 2456, end: 2557, duration: 2000 },
    { title: "Abgeschlossene Bestellungen", start: 2200, end: 2768, duration: 3000 },
    { title: "Jahrelange Erfahrung", start: 7, end: 20 , duration: 2000 },
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
            <span className="stat-number">{values[index]}</span>
            <span className="stat-title">{stat.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
