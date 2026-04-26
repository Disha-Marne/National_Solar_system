import React from 'react';
import './House.css';

// Placeholder image imports
// Replace these with your actual local image paths
import residentialInstallation1 from "../pics/realon.jpg"; // Example 1
import residentialInstallation2 from "../pics/realon1.jpg"; // Example 2
import residentialInstallation3 from "../pics/realon2.jpg";
import Who_we_are from "../pics/Who_are_we.jpg";

const ProjectCard = ({ imageSrc, clientName, sector, capacity, annualSavings, roi, co2Offset }) => (
  <div className="project-card-details">
    <div className="details-image-wrapper">
      <img src={imageSrc} alt="Solar Installation" className="details-image" />
    </div>
    <table className="details-table">
      <tbody>
        <tr className="table-row-green">
          <td>Client name</td>
          <td>{clientName}</td>
        </tr>
        <tr>
          <td>Sector</td>
          <td>{sector}</td>
        </tr>
        <tr className="table-row-green">
          <td>Project Capacity</td>
          <td>{capacity}</td>
        </tr>
        <tr>
          <td>Annual Savings</td>
          <td>{annualSavings}</td>
        </tr>
        <tr className="table-row-green">
          <td>ROI</td>
          <td>{roi}</td>
        </tr>
        <tr>
          <td>CO2 offset</td>
          <td>{co2Offset}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const House = () => {
  return (
    <section className="residential-details-section">
      <div className="residential-details-container">
        <h2 className="residential-details-title">Residential Solar panel Installation</h2>
        <p className="residential-details-subtitle">
          A Residential solar panel installation for a homeowner, society lowering electricity bill.
        </p>

        <div className="project-details-grid">
          <ProjectCard
            imageSrc={residentialInstallation1}
            clientName="Babulal Solanki"
            sector="Bungalow"
            capacity="4 kW"
            annualSavings="₹ 72,000"
            roi="4 year"
            co2Offset="6 Ton"
          />
          <ProjectCard
            imageSrc={residentialInstallation2}
            clientName="Sandipan Ugale"
            sector="Bungalow"
            capacity="6 kW"
            annualSavings="₹ 80,000"
            roi="4 year"
            co2Offset="9 Ton"
          />
          <ProjectCard
            imageSrc={Who_we_are}
            clientName="Dnyaneshwar Marne"
            sector="Bungalow"
            capacity="10 kW"
            annualSavings="₹ 1,92,000"
            roi="3 year"
            co2Offset="15 Ton"
          />
          <ProjectCard
            imageSrc={residentialInstallation3}
            clientName="Vilma Gudinho"
            sector="Bungalow"
            capacity="4 kW"
            annualSavings="₹ 72,000"
            roi="4 year"
            co2Offset="6 Ton"
          />
        </div>
      </div>
    </section>
  );
};

export default House;