import React from 'react';
import '../styles/JobDetails.css'; // Подключаем стили

function LKWKranfahrer() {
  return (
    <div className="job-details">
      <h1>Вакансия: Водитель крана (LKWKranfahrer)</h1>
      <p><strong>Местоположение:</strong> Германия, Берлин</p>
      <p><strong>Зарплата:</strong> От 2800€ в месяц</p>
      <p>Мы ищем опытных водителей кранов для работы на строительных объектах.</p>
      
      <h2>Требования:</h2>
      <ul>
        <li>Водительские права категории C/CE</li>
        <li>Опыт работы на кранах от 2 лет</li>
        <li>Знание немецкого или английского языка</li>
      </ul>

      <h2>Что мы предлагаем:</h2>
      <ul>
        <li>Стабильную работу в надежной компании</li>
        <li>Официальное трудоустройство</li>
        <li>Оплачиваемые командировки</li>
      </ul>

      <button onClick={() => window.location.href = "mailto:hr@yourcompany.com?subject=Отклик на вакансию LKWKranfahrer"}>
        Откликнуться
      </button>
    </div>
  );
}

export default LKWKranfahrer;
