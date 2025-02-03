import React from 'react';
import '../styles/JobDetails.css'; // Подключаем стили

function LKWKranfahrer() {
  return (
    <div className="background-container">

    <div className="job-details">
      <h1>Stellenangebot: LKWKranfahrer</h1>
      <p><strong>Standort:</strong> Deutschland, Berlin</p>
      <p><strong>Gehalt:</strong> Ab 2800€ pro Monat</p>
      <p>Wir suchen erfahrene Kranführer für den Einsatz auf Baustellen.</p>
      
      <h2>Anforderungen:</h2>
      <ul>
        <li>Führerscheinklasse C/CE</li>
        <li>Erfahrung in der Arbeit mit Kränen ab 2 Jahren</li>
        <li>Deutsch- oder Englischkenntnisse</li>
      </ul>

      <h2>Was wir bieten:</h2>
      <ul>
        <li>Fester Arbeitsplatz in einem zuverlässigen Unternehmen</li>
        <li>Offizielle Beschäftigung</li>
        <li>Bezahlte Geschäftsreisen</li>
      </ul>

      <button onClick={() => window.location.href = "mailto:hr@yourcompany.com?subject=Отклик на вакансию LKWKranfahrer"}>
      Antwort
      </button>
    </div>
    </div>
  );
}

export default LKWKranfahrer;
