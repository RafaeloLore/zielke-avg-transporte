import React from 'react';
import '../styles/Footer.css'; // Подключаем стили

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>Zielke AVG Transporte</h3>
          <p>Senefelderstraße 1K, 63110 Rodgau</p>
          <p>📞 Tel: +49 (0) 6106 7709228</p>
          <p>📠 Fax: +49 (0) 6106 6674339</p>
          <p>📧 Email: info@zielke-avg-transporte.de</p>
        </div>

        <div className="footer-links">
          <h3>Nützliche Links</h3>
          <ul>
            <li><a href="/jobs">Karriere</a></li>
            <li><a href="/contact">Kontakt</a></li>
            <li><a href="/uberuns">Über uns</a></li>
            <li><a href="/Datenschutz">Datenschutzrichtlinie</a></li>
            <li><a href="/Impressum">Impressum</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Wir sind in sozialen Netzwerken</h3>
          <a href="https://www.facebook.com/ZielkeAVG/" target="_blank" rel="noopener noreferrer">Facebook</a> |
          <a href="https://www.instagram.com/zielkeavg/" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Zielke AVG Transporte.</p>
      </div>
    </footer>
  );
}

export default Footer;
