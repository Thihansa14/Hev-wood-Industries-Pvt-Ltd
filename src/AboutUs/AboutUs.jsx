import React, { useState } from 'react';
import './AboutUs.css';
import visionMissionImage from '../AboutUs/visionMissionImage.png'; // Update the path if necessary
import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';
import founderImage from '../AboutUs/founder.png';


const testimonials = [
    {
        title: "Meet Client1!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: ""
    },
    {
        title: "Meet Client2!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: ""
    }
];

const About = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const handlePrev = () => {
        setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="about-container">
            <section className="about-us">
                <h1>ABOUT US</h1>
                <p>
                    Welcome to HEV-Wood Industries (Pvt) Ltd, your trusted partner in
                    crafting high-quality plywood doors. Located in the heart of
                    Bandaragama, our head office, factory, and showroom serve as the
                    cornerstone of our commitment to excellence in woodworking and
                    sustainable practices. Our journey began with a vision to blend
                    craftsmanship with innovation, ensuring every door we create meets
                    the highest standards of quality, durability, and aesthetic appeal.
                </p>
            </section>
            <section className="vision-mission">
                <img src={visionMissionImage} alt="Vision and Mission" className="vision-mission-image" />
            </section>
            <section className="our-story">
                <h2>OUR STORY</h2>
                <div className="founder">
                    { <img src={founderImage} alt="Founder" className="founder-image" /> }
                    <p className="founder-name">U. M. Akmeemana <br /> (Founder & Director)</p>
                </div>
                <div className="story-content">
                    <p>
                        Journey with us through decades of dedication, innovation, and
                        excellence. Since the inception of HEV-Wood Industries (Pvt) Ltd,
                        we have become a pioneering force in the plywood door 
                        manufacturing industry, known for our commitment to quality and
                        sustainability.
                    </p>
                    <p>
                        With our roots firmly planted in Bandaragama, HEV-WOOD Industries
                        began as a vision of transforming the woodworking industry. Our
                        founders, driven by a passion for craftsmanship and an eye for
                        detail, laid the groundwork for what would become a beacon of
                        excellence in the industry.
                    </p>
                    <p>
                        Our story starts with a commitment to sustainability. We source
                        timber from rubber trees that have completed their latex
                        production cycle. After the trees have provided rubber milk for
                        years, they are repurposed into high-quality timber, ensuring
                        that no part of the tree goes to waste. This eco-friendly
                        practice not only supports the regeneration of rubber plantations
                        but also aligns with our dedication to environmental stewardship.
                    </p>
                    <p>
                        In our early days, we quickly gained recognition for our superior
                        craftsmanship and innovative processes. By collaborating with
                        leading architects and builders, we established a reputation for
                        producing doors that are not only durable but also beautifully
                        crafted. Each door is a testament to our attention to detail,
                        from the initial wood cutting and chemical treatment to the final
                        finishing touches.
                    </p>
                    <p>
                        Our product range expanded to meet the diverse needs of our
                        customers. We offer a variety of door types and finishes,
                        utilizing high-quality imported sheets such as teak and mahogany.
                        Our doors are crafted to meet the highest standards, combining
                        aesthetic appeal with long-lasting performance.
                    </p>
                    <p>
                        Today, HEV-Wood Industries stands as a leader in the plywood door
                        manufacturing industry. Our commitment to eco-friendly practices
                        and superior craftsmanship has earned us the trust and respect of
                        customers across Sri Lanka. We offer island-wide delivery, a
                        dedicated sales team, and an 8-year warranty, ensuring the
                        highest level of customer satisfaction. Our story is a
                        celebration of our journey and the unwavering dedication of our
                        team.
                    </p>
                </div>
                <div className="vertical-rectangle"></div> {/* Added vertical rectangle */}
            </section>
            <section className="testimonial-wrapper">
                <h2>Our Clients</h2>
                <h3>TESTIMONIAL</h3>
                <div className="testimonial">
                    <button className="arrow left-arrow" onClick={handlePrev}>
                        <img src={leftArrow} alt="Previous" />
                    </button>
                    <div className="testimonial-content">
                        <div className="text-column">
                            <h4>{testimonials[currentTestimonial].title}</h4>
                            <p>{testimonials[currentTestimonial].text}</p>
                        </div>
                        <div className="image-column">
                            <div className="client-image-placeholder"></div>
                        </div>
                    </div>
                    <button className="arrow right-arrow" onClick={handleNext}>
                        <img src={rightArrow} alt="Next" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;
