import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import Products from './Products/Products';
import OurProcess from './OurProcess/OurProcess';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';

// Custom component to handle redirection to home on refresh
const RedirectToHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
};

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/our-process" element={<OurProcess />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* Catch-all route for refresh */}
        <Route path="*" element={<RedirectToHome />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
