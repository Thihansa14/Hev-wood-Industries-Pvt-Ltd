import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css'; 
// import companyLogo from './path/to/logo.png'; 

const Footer = () => {
    return (
        <div className="footer-container">
            {/* <div className="logo-container">
                <img src={companyLogo} alt="Company Logo" className="company-logo" />
            </div> */}
            <div className="content-container">
                <div className="quick-links">
                    <h3>QUICK LINKS</h3>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Products</li>
                        <li>Our Process</li>
                        <li>Contact us</li>
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
                <div className="warehouse">
                    <h3>WAREHOUSE</h3>
                    <p>96/B, Kindelpitiya, Bandaragama.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
