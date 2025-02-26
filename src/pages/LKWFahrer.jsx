import React from 'react';
import '../styles/JobDetails.css'; // Подключаем стили

function LKWFahrer() {
  return (
    <div className="background-container">
    <div className="job-details">
      <h1>Stellenangebot: LKW-Fahrer/in</h1>
      <p><strong>Standort:</strong> Deutschland,Rhein-Main-Gebiet</p>
      
      <h2>Deine Qualifikationen und Fähigkeiten:</h2>
      <ul>
        <li>• Deutschkenntnisse – zur sicheren Kommunikation</li>
        <li>• Belastbarkeit und Flexibilität – auch in herausfordernden Situationen</li>
        <li>• Selbstständiges und eigenverantwortliches Arbeiten – du packst an und findest Lösungen</li>
        <li>• Technische Grundkenntnisse – für den sicheren Umgang mit Fahrzeugen</li>
        <li>• Fahrerlaubnis CE – Voraussetzung für den Einsatz im Schwerlastverkehr</li>
      </ul>

      <h2>Das bieten wir dir:</h2>
      <ul>
        <li>• Spannende und abwechslungsreiche Aufgaben in einer stetig wachsenden Branche</li>
        <li>• Leistungsgerechte Vergütung – deine Arbeit wird fair entlohnt</li>
        <li>• Moderner Fuhrpark – mit gut ausgestatteten Fahrzeugen und neuester Technik</li>
      </ul>

      <button onClick={() => window.location.href = "mailto:info@zielke-avg-transporte.de?subject=Отклик на вакансию LKWFahrer"}>
      Antwort
      </button>
      
    </div>
    </div>

    
  );
}

export default LKWFahrer;
