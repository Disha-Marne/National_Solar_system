import React from 'react';
import { useNavigate } from "react-router-dom";
import './About.css';
// Import any necessary local images/icons (placeholders used here)
import homehouse from '../pics/homehouse.png'; // Placeholder for the main house image
import vision from '../pics/vision.png'; // Placeholder for the "hand holding solar panels" image
import eco from '../pics/eco.png'; // Placeholder for CEO image/icon
import solar from '../pics/solar.png'; // Icon for '50+ panels'
import housei from '../pics/housei.png';       // Icon for '20+ homes'
import co2 from '../pics/co2.png';           // Icon for '1000+ tons'


const About = () => {

const navigate = useNavigate(); // Add this

  const goToServices = () => {
    navigate("/services"); // Navigate to Services page
  };
  const goToContact = () => {
    navigate("/Contact"); // Navigate to Services page
  };

  return (
    <div className="about-page-wrapper">

      {/* 1. HERO SECTION (Updated Style from image) */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${homehouse})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>National Solar System</h1>
          <p>“Powering the future with Solar”</p>
          <p className="hero-subtagline">Clean • Reliable • Sustainable Energy</p>
          <div className="hero-buttons">
            <button className="btn-explore" onClick={goToServices}>Explore</button>
          </div>
        </div>
      </section>

      {/* 2. MISSION, VISION, STORY SECTION */}
      <section className="mission-story-section">
        <div className="mission-story-container">

          {/* LEFT SIDE – Image */}
          <div className="mission-image-wrapper">
            <img
              src={vision} // <-- put your actual image path here
              alt="Vision"
              className="mission-image"
            />
          </div>

          {/* RIGHT SIDE – Text Content */}
          <div className="mission-content">
            <div className="mission-vision-box">
              <h2>Our Mission</h2>
              <p>Helping homes and businesses switch to clean energy.</p>
            </div>

            <div className="mission-vision-box">
              <h2>Vision</h2>
              <p>A world powered by renewable energy, reducing carbon footprint.</p>
            </div>

            <div className="story-box">
              <h2 className="story-title">Our Story</h2>
              <div className="timeline-wrapper">
                <div className="timeline-item year-2024">
                  <div className="timeline-year">2024</div>
                  <p>Founded with the goal of making solar accessible.</p>
                </div>
                <div className="timeline-item year-2025">
                  <div className="timeline-year">2025</div>
                  <p>Installed 50+ panels and made government subsidies available.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. CEO PROFILE SECTION */}
      <section className="ceo-profile-section">
  <div className="ceo-container">
    {/* CEO Image */}
    <div className="ceo-avatar-wrapper">
      <img src={eco} alt="Aditya Gopale" className="ceo-avatar" />
    </div>

    {/* CEO Info */}
    <div className="ceo-content">
      <h2>Meet Our CEO</h2>
      <h3>Aditya Gopale</h3>
      <p className="ceo-title">Founder & CEO, National Solar System</p>

      <p className="ceo-bio">
        Aditya Gopale is the young and passionate Founder & CEO of National Solar System. 
        With over 2+ years of experience in the solar industry, he leads the company 
        with a vision to promote clean and sustainable energy across India. 
        Under his leadership, National Solar System has delivered reliable and efficient 
        solar installations for residential, commercial, and industrial clients. 
        His dedication and innovative approach continue to drive the company toward a greener future.
      </p>

      <p className="ceo-qualification">
        <strong>Qualification:</strong> B.E. in Mechanical Engineering
      </p>

      <p className="ceo-message">
        “At National Solar System, our mission is to make solar energy simple, 
        accessible, and impactful — one home at a time.”
      </p>
      <p className="ceo-signature">— Aditya Gopale</p>
    </div>
  </div>
</section>


      {/* 4. OUR IMPACT SECTION */}
      <section className="our-impact-section">
        <h2>Our Impact</h2>

        <div className="impact-grid">

          <div className="impact-item">
            <img src={solar} alt="Solar Panels" className="impact-icon" />
            <p><strong>50+</strong> panels installed</p>
          </div>

          <div className="impact-item">
            <img src={housei} alt="House" className="impact-icon" />
            <p><strong>20+</strong> Homes Powered</p>
          </div>

          <div className="impact-item">
            <img src={co2} alt="CO2 Reduced" className="impact-icon" />
            <p><strong>1000+</strong> Tons of CO₂ Reduced</p>
          </div>

          <div className="impact-item consult-btn-wrapper">
            <button className="btn-consultation" onClick={goToContact}>Get Free Consultation</button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;