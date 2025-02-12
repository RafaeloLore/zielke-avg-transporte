import React from 'react';
import '../styles/JobDetails.css'; // Подключаем стили

function LKWFahrer() {
  return (
    <div className="background-container">
    <div className="job-details">
      <h1>Stellenangebot: LKW-Fahrer/in</h1>
      <p><strong>Standort:</strong> Deutschland, Frankfurt</p>
      <p><strong>Gehalt:</strong> Ab 2500€ pro Monat</p>
      <p>Wir suchen erfahrene LKW-Fahrer für den Gütertransport in ganz Europa.</p>
      
      <h2>Anforderungen:</h2>
      <ul>
        <li>Führerscheinklasse C/CE</li>
        <li>Erfahrung im LKW-Fahren ab 2 Jahren</li>
        <li>Deutsch- oder Englischkenntnisse</li>
      </ul>

      <h2>Was wir bieten:</h2>
      <ul>
        <li>Fester Arbeitsplatz in einem zuverlässigen Unternehmen</li>
        <li>Offizielle Beschäftigung</li>
        <li>Bezahlte Geschäftsreisen</li>
      </ul>

      <button onClick={() => window.location.href = "mailto:info@zielke-avg-transporte.de?subject=Отклик на вакансию LKWFahrer"}>
      Antwort
      </button>
      
    </div>
    </div>

    
  );
}

export default LKWFahrer;
