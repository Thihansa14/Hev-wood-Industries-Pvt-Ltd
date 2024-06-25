import React from 'react';
import './Home.css';
import featuredProduct1 from './featuredProduct1.jpg'; // replace with actual paths
import featuredProduct2 from './featuredProduct2.jpg'; // replace with actual paths
import featuredProduct3 from './featuredProduct3.jpg'; // replace with actual paths
import featuredProduct4 from './featuredProduct4.jpg'; // replace with actual paths
import featuredProduct5 from './featuredProduct5.jpg'; // replace with actual paths
import featuredProduct6 from './featuredProduct6.jpg'; // replace with actual paths
import aboutImage from './AboutImage.jpg'; // replace with actual path
import deliveryIcon from './Transport.png';
import salesTeamIcon from './TeamSales.png';
import warrantyIcon from './Warrenty.png';
import customerSatisfactionIcon from './CustomerService.png';

const Home = () => {
    const scrollLeft = () => {
        document.getElementById('product-carousel').scrollLeft -= 300;
    };

    const scrollRight = () => {
        document.getElementById('product-carousel').scrollLeft += 300;
    };

    return (
        <div className="home-container">
            <section className="intro">
                <h1>Crafting Excellence in Plywood Doors - Hev-wood Industries</h1>
                <p>Discover the finest plywood doors, crafted with precision and quality, right here Bandaragama</p>
                <button>Contact Us</button>
            </section>
            <section className="about-us">
                <div className="about-image">
                    <img src={aboutImage} alt="About Us" />
                </div>
                <div className="about-text">
                    <h2>About Us</h2>
                    <p>At HEV-Wood Industries, we combine innovation and craftsmanship to bring you the finest plywood doors. Located in Bandaragama, our integrated head office, factory, and showroom ensure quality control at every step. Discover our range and elevate your space with doors crafted to perfection.</p>
                </div>
            </section>
            <section className="featured-products">
                <h2>Featured Products</h2>
                <div className="carousel-container">
                    <button className="prev" onClick={scrollLeft}>&lt;</button>
                    <div className="product-carousel" id="product-carousel">
                        <div className="product" style={{ backgroundImage: `url(${featuredProduct1})` }}></div>
                        <div className="product" style={{ backgroundImage: `url(${featuredProduct2})` }}></div>
                        <div className="product" style={{ backgroundImage: `url(${featuredProduct3})` }}></div>
                        <div className="product" style={{ backgroundImage: `url(${featuredProduct4})` }}></div>
                        <div className="product" style={{ backgroundImage: `url(${featuredProduct5})` }}></div>
                        <div className="product" style={{ backgroundImage: `url(${featuredProduct6})` }}></div>
                    </div>
                    <button className="next" onClick={scrollRight}>&gt;</button>
                </div>
            </section>
            <section className="why-choose-us">
                <h2>Why Choose Us?</h2>
                <div className="reasons">
                    <div className="reason">
                        <img src={deliveryIcon} alt="Delivery" />
                        <p>Island wide delivery for a low cost</p>
                    </div>
                    <div className="reason">
                        <img src={salesTeamIcon} alt="Sales Team" />
                        <p>Dedicated sales team</p>
                    </div>
                    <div className="reason">
                        <img src={warrantyIcon} alt="Warranty" />
                        <p>8 years warranty</p>
                    </div>
                    <div className="reason">
                        <img src={customerSatisfactionIcon} alt="Customer Satisfaction" />
                        <p>Highest customer satisfaction guaranteed</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
