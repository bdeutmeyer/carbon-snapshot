import React from 'react';


const GasolineCalc = ({gallons, purchaseDate}) => {
  // Access the shared data context
  const gallonsTotal = (gallons * 3.7 * 0.87).toFixed(2);

  return (
    <div>
      <h2>Gasoline Calculation Results</h2>
      <p>Gallons: {gallons}</p>
      <p>Purchase Date: {purchaseDate}</p>
      
      {/* Display breakdown of carbon footprint for each energy source */}
      <p>Carbon Footprint Breakdown:</p>
      <p>(Pounds of CO2)</p>
      <p>{gallonsTotal}</p>
       

    </div>
  );
};

export default GasolineCalc;