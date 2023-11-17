import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import MenuComponent from './MenuComponent';
import ServicesComponent from './ServicesComponent';
import AboutUsComponent from './AboutUsComponent';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/menu" element={<MenuComponent />} />
          <Route path="/services" element={<ServicesComponent />} />
          <Route path="/about" element={<AboutUsComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
