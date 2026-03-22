import React from 'react';
import './Services.css';

// Placeholder image imports
// Replace these with your actual local image paths
import ongrid from "../pics/ongrid.png";   // Assuming you have this image
import Offgrid from "../pics/Offgrid.png"; // Assuming you have this image
import hybrid from "../pics/hybrid.jpg";   // Assuming you have this image

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-main-title">Services</h2>
        <p className="services-subtitle">
          Learn about the different solar solution we offer
        </p>

        {/* On-Grid System */}
        <div className="service-item">
          <div className="service-image-wrapper">
            <img src={ongrid} alt="On-Grid Solar System" className="service-image" />
          </div>
          <div className="service-content">
            <h3 className="service-type-title">On - Grid</h3>
            <p className="service-description">
              On-grid systems are connected directly to the utility grid. They supply solar
              power to your home first, and any excess is exported to the grid under net
              metering, reducing your electricity bills.
            </p>
            <ul className="service-features">
              <li className="feature-pro">Low installation cost</li>
              <li className="feature-pro">Easy maintenance</li>
              <li className="feature-pro">Government Subsidy available</li>
              <li className="feature-con">No power during blackouts</li>
            </ul>
          </div>
        </div>

        {/* Off-Grid System */}
        <div className="service-item">
          <div className="service-image-wrapper">
            <img src={Offgrid} alt="Off-Grid Solar System" className="service-image" />
          </div>
          <div className="service-content">
            <h3 className="service-type-title">Off - Grid</h3>
            <p className="service-description">
              Off-grid systems are independent from the grid and use battery storage to
              provide electricity day and night. These are ideal for remote areas or places with
              unreliable power supply.
            </p>
            <ul className="service-features">
              <li className="feature-pro">Works without grid support</li>
              <li className="feature-pro">Provides backup during outages</li>
              <li className="feature-con">Higher cost due to batteries</li>
            </ul>
          </div>
        </div>

        {/* Hybrid System */}
        <div className="service-item">
          <div className="service-image-wrapper">
            <img src={hybrid} alt="Hybrid Solar System" className="service-image" />
          </div>
          <div className="service-content">
            <h3 className="service-type-title">Hybrid</h3>
            <p className="service-description">
              Hybrid systems combine the benefits of on-grid and off-grid. They use the grid
              when needed, while also storing excess energy in batteries for backup during
              blackouts.
            </p>
            <ul className="service-features">
              <li className="feature-pro">Savings + reliable backup</li>
              <li className="feature-pro">Future-ready smart solution</li>
              <li className="feature-con">More expensive than on-grid</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;