import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Jobs.css'; // Подключаем стили

function Jobs() {
    const navigate = useNavigate(); // Хук для перехода

  const handleApplyClick = (jobId) => {
    navigate(`/apply/${jobId}`); // Переход на страницу отклика
  };
  return (
    <div className="jobs-page">
      <header className="jobs-header">
        <h1>Вакансии</h1>
        <p>Присоединяйтесь к нашей команде и развивайтесь вместе с нами!</p>
      </header>

      <section className="job-list">
        <div className="job-card">
          <h2>LKW-Kranfahrer</h2>
          <p><strong>Местоположение:</strong> Германия, Франкфурт</p>
          <p><strong>Зарплата:</strong> От 2500€ в месяц</p>
          <p>Мы ищем опытных водителей грузовиков для перевозки грузов по Европе.</p>
          <button className="apply-btn" onClick={() => navigate('/jobs/lkw-kranfahrer')}>
            Подробнее
          </button>
        </div>

        

        <div className="job-card">
          <h2>LKW-Fahrer</h2>
          <p><strong>Местоположение:</strong> Германия, Мюнхен</p>
          <p><strong>Зарплата:</strong> От 2800€ в месяц</p>
          <p>Обслуживание и ремонт грузового транспорта.</p>
          <button className="apply-btn" onClick={() => navigate('/jobs/lkw-fahrer')}>
            Подробнее
          </button>
        </div>
      </section>
    </div>
  );
}

export default Jobs;
