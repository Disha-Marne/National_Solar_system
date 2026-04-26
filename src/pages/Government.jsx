import React from 'react';
import './Government.css'; 
import homehouse from "../pics/homehouse.png";

const Government = () => {
  return (
    <section 
      className="subsidy-section"
      // FIX: The style prop was moved inside the opening <section> tag
      style={{ backgroundImage: `url(${homehouse})`,backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center' }}
    >
      <div className="subsidy-container">
        
        <h2 className="subsidy-main-title">
          Government Subsidy Scheme for the Solar Energy
        </h2>
        
        <h3 className="subsidy-subtitle">
          Subsidy for Residential Household
        </h3>

        {/* Row 1: Subsidy Cards */}
        <div className="subsidy-cards-grid">
          <div className="subsidy-card">
            <p className="subsidy-amount">Rs. 30,000 per kW</p>
            <p className="subsidy-description">up to 2kW</p>
          </div>
          <div className="subsidy-card">
            <p className="subsidy-amount">Rs. 18,000 per kW</p>
            <p className="subsidy-description">up to 3kW</p>
          </div>
          <div className="subsidy-card">
            <p className="subsidy-amount">Rs. 78,000</p>
            <p className="subsidy-description">Total subsidy for systems larger than 3kW capped at</p>
          </div>
        </div>

        {/* Row 2: GHS/RWA Info */}
        <div className="subsidy-ghs-card">
          <h4>Subsidy for GHS/RWA</h4>
          <p>(Group Housing Society / Resident Welfare Association)</p>
          <p className="subsidy-amount-ghs">Rs. 18,000 per kW</p>
          <p>for common facilities, including EV charging, up to 500 kW Capacity</p>
        </div>

        {/* Row 3: Consumption Table */}
        <div className="subsidy-table-wrapper">
          <table className="subsidy-table">
            <tbody>
              <tr className="table-row-green">
                <td className="table-label">Average Monthly Electricity Consumption (units)</td>
                <td>0-150</td>
                <td>150-300</td>
                <td>&gt;300</td>
              </tr>
              <tr>
                <td className="table-label">Suitable Rooftop Solar Plant Capacity</td>
                <td>1-2 kw</td>
                <td>2-3 kw</td>
                <td>Above 3 kw</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default Government;