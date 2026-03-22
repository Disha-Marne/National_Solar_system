import React from 'react';
// 1. Import useNavigate to handle navigation
import { useNavigate } from 'react-router-dom'; 
import './Projects.css';

// Placeholder image imports
import homehouse from '../pics/homehouse.png';
import shop from '../pics/shop.png';
import industry from '../pics/industry.png';

const Projects = () => {
  // 2. Initialize the navigate function
  const navigate = useNavigate();

  // 3. Create a single, reusable handler function
  const handleProjectClick = (path) => {
    navigate(path);
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-main-title">Projects</h2>
        <p className="projects-subtitle">
          Discover our completed solar energy projects and learn how
          we're helping society embrace renewable energy
        </p>

        {/* Residential Project */}
        <div className="project-item">
          <div className="project-image-wrapper">
            <img 
              src={homehouse} 
              alt="Residential Solar Panel Installation" 
              className="project-image" 
            />
          </div>
          <div className="project-content">
            {/* 4. Use the reusable handler for the house link */}
            <h3 
              className="project-type-title clickable" 
              // FIX: Changed '/House' to '/house' to match the route in App.jsx
              onClick={() => handleProjectClick('/house')}
            >
              Residential Solar panel Installation
            </h3>
            <p className="project-description">
              A Residential solar panel installation for a homeowner, society lowering electricity bill.
            </p>
          </div>
        </div>

        {/* Commercial Project */}
        <div className="project-item">
          <div className="project-image-wrapper">
            <img 
              src={shop} 
              alt="Commercial Solar Panel Installation" 
              className="project-image" 
            />
          </div>
          <div className="project-content">
            <h3 
              className="project-type-title clickable"
            >
              Commercial Solar Installation
            </h3>
            <p className="project-description">
              A Commercial solar panel installation for a Shops, Small Malls lowering electricity bill.
            </p>
          </div>
        </div>

        {/* Industrial Project */}
        <div className="project-item">
          <div className="project-image-wrapper">
            <img 
              src={industry} 
              alt="Industrial Solar Panel Installation" 
              className="project-image" 
            />
          </div>
          <div className="project-content">
            <h3 
              className="project-type-title clickable"
            >
              Industrial Solar Installation
            </h3>
            <p className="project-description">
              A Industrial solar panel installation for a industries lowering electricity bill.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;

