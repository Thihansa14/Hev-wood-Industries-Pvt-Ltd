import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css'; 
import companyLogo from './Logo.png'; 

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="logo-container">
                <img src={companyLogo} alt="Company Logo" className="company-logo" />
            </div>
            <div className="content-container">
                <div className="quick-links">
                    <h3>QUICK LINKS</h3>
                    <ul>
                        <li>
                            <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about-us" onClick={() => window.scrollTo(0, 0)}>About us</Link>
                        </li>
                        <li>
                            <Link to="/products" onClick={() => window.scrollTo(0, 0)}>Products</Link>
                        </li>
                        <li>
                            <Link to="/our-process" onClick={() => window.scrollTo(0, 0)}>Our Process</Link>
                        </li>
                        <li>
                            <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>Contact us</Link>
                        </li>
                    </ul>
                </div>
                <div className="follow-us">
                    <h3>FOLLOW US</h3>
                    <ul>
                        <li>
                            <FaInstagram className="icon" /> Instagram
                        </li>
                        <li>
                            <FaFacebook className="icon" /> Facebook
                        </li>
                    </ul>
                </div>
                <div className="contact-us">
                    <h3>CONTACT US</h3>
                    <p>
                        <FaPhone className="icon" /> <a href="tel:+94382289000">+94 382 289 000</a><br/> <a href="tel:+94772397939">+94 772 397 939</a>
                    </p>
                    <p>
                        <FaEnvelope className="icon" /><a href="mailto:hevwood.industries@gmail.com">hevwood.industries@gmail.com</a>
                    </p>
                </div>
                <div className="warehouse">
                    <h3>WAREHOUSE</h3>
                    <p>96/B, Kindelpitiya, Bandaragama.</p>
                </div>          
            </div>
            <hr className="footer-line"/>
            <div className="footer-bottom">
                <p>
                    &copy;{new Date().getFullYear()} Hev-Wood Industries(Pvt) Ltd | All Rights Reserved. 
                </p>
            </div>
        </div>
    );
};

export default Footer;
