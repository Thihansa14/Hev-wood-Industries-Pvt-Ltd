import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';
import headerImage from './ContactHeader.png'; // Replace with your image path
import contactImage from './ContactImg.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_pi9a49n', 
      'template_ukebsyt', 
      formData, 
      'XGusARa0OhTyE6V0X'
    ).then((result) => {
        alert('Message sent successfully!');
    }).catch((error) => {
        alert('Failed to send message, please try again later.');
    });

    setFormData({
      name: '',
      contactNumber: '',
      message: '',
      to_name: 'Hev-wood Industries(Pvt) Ltd'
    });
  };

  return (
    <div className="contact-us-container">
      <div className="header">
        <img src={headerImage} alt="Header" />
        <div className="header-text">
          <h1>Contact Us</h1>
          <p>"We are here to help and answer any questions you might have. We look forward to hearing from you!"</p>
        </div>
      </div>
      <div className="contact-info">
        <div className="info-item location">
          <h2>Location</h2>
          <p>96/B, Kindelpitiya, Bandaragama.</p>
        </div>
        <div className="info-item phone">
          <h2>Phone</h2>
          <p>+94 772 397 939<br /><br/> +94 777 875 509</p>
        </div>
        <div className="info-item email">
          <h2>Email</h2>
          <p>hevwood.industries@gmail.com</p>
        </div>
      </div>
      <div className="contact-form-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <label>
                
              <input type="text" placeholder='Enter your Name/Company : ' name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
            
              <input type="text" placeholder='Enter your contact number :' name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
            </label>
            <label>
              
              <textarea name="message" placeholder='Message' value={formData.message} onChange={handleChange} required></textarea>
            </label>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-image">
          <img src={contactImage} alt="Contact" />
        </div>
      </div>
      <div className="map">
        <h2>Made with love, right here in Bandaragama.</h2>
        <p>Come visit our friendly team at our head office</p>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.4569948549597!2d79.98898261467394!3d6.747555494382738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24fd88f937d27%3A0xc4b0f9632eae90e7!2sBandaragama!5e0!3m2!1sen!2slk!4v1625292767607!5m2!1sen!2slk" 
          width="600" 
          height="450" 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

