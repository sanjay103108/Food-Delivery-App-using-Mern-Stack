import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import MenuComponent from './MenuComponent';
import ServicesComponent from './ServicesComponent';
import AboutUsComponent from './AboutUsComponent';
import SigninComponent from './SigninComponent';
import SignupComponent from './SignupComponent';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/menu" element={<MenuComponent />} />
          <Route path="/services" element={<ServicesComponent />} />
          <Route path="/about" element={<AboutUsComponent />} />
          <Route path="/signin" element={<SigninComponent/>} />
          <Route path="/signup" element={<SignupComponent/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
