import React from 'react';


const GasolineCalc = ({gallons, purchaseDate, carbonOutput, setCarbonOutput}) => {
  // Access the shared data context
  const carbonTotal = (gallons * 3.7 * 0.87);

  setCarbonOutput(carbonTotal.toFixed(0))

  return (
    <div>
      <h2>Gasoline Calculation Results</h2>
      <p>Gallons: {gallons}</p>
      <p>Purchase Date: {purchaseDate}</p>
      
      {/* Display breakdown of carbon footprint for each energy source */}
      <p>Carbon Footprint Breakdown:</p>
      <p>(Pounds of CO2)</p>
      <p>{carbonOutput}</p>
       

    </div>
  );
};

export default GasolineCalc;