import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Jobs.css'; // Подключаем стили

function Jobs() {
    const navigate = useNavigate(); // Хук для перехода

  const handleApplyClick = (jobId) => {
    navigate(`/apply/${jobId}`); // Переход на страницу отклика
  };
  return (
    <div className="background-container">

    <div className="jobs-page , content">
      <header className="jobs-header">
        <h1>Stellenangebote</h1>
        <p>Werden Sie Teil unseres Teams und wachsen Sie mit uns!</p>
      </header>

      <section className="job-list">
        <div className="job-card">
          <h2>LKW-Kranfahrer</h2>
          <p><strong>Standort:</strong> Deutschland, Frankfurt</p>
          <p><strong>Gehalt:</strong> Ab 2500€ pro Monat</p>
          <p>Wir suchen erfahrene LKW-Fahrer für den Gütertransport in ganz Europa.</p>
          <button className="apply-btn" onClick={() => navigate('/jobs/lkw-kranfahrer')}>
          Mehr lesen
          </button>
        </div>

        

        <div className="job-card">
          <h2>LKW-Fahrer</h2>
          <p><strong>Standort:</strong> Deutschland, Frankfurt</p>
          <p><strong>Gehalt:</strong> Ab 2500€ pro Monat</p>
          <p>Wartung und Reparatur von Gütertransporten.</p>
          <button className="apply-btn" onClick={() => navigate('/jobs/lkw-fahrer')}>
          Mehr lesen
          </button>
        </div>
      </section>
    </div>
    </div>

  );
}

export default Jobs;
