import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
// import logo from '../path/to/logo.png'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div> */}
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About us</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/our-process">Our Process</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
