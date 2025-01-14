import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
        <Link to="/" style={{ marginRight: '10px' }}>HOME</Link>
        <Link to="/contact">CONTACKT</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
