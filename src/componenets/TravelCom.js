import React from 'react';
import './TravelCom.css';

const TravelPlan = () => {
  return (
    <div className="travel-plan-container">
      <h2>Travel Plan</h2>
      <div className="plan-details">
        <div className="destination">
          <h3>Destination:</h3>
          <p>Paris, France</p>
        </div>
        <div className="dates">
          <h3>Dates:</h3>
          <p>June 15 - June 22, 2023</p>
        </div>
        <div className="budget">
          <h3>Budget:</h3>
          <p>$2000</p>
        </div>
      </div>
    </div>
  );
};

export default TravelPlan;
