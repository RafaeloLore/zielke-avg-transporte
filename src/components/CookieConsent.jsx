import React, { useState, useEffect } from "react";
import "../styles/CookieConsent.css";

function CookieConsent() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (cookieConsent === "true") {
      setConsentGiven(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setConsentGiven(true);
  };

  if (consentGiven) return null; // Если уже принято, не показываем

  return (
    <div className="cookie-banner">
      <p>Мы используем cookies для улучшения работы сайта. Подтвердите использование.</p>
      <button onClick={handleAcceptCookies}>Принять</button>
    </div>
  );
}

export default CookieConsent;
