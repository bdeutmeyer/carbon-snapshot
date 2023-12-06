import React from 'react';


const GasCalc = ({therm, gasBillDate}) => {
  // Access the shared data context
  const thermTotal = (therm * 0.034121412 * 0.97).toFixed(2);

  return (
    <div>
      <h2>Gas Calculation Results</h2>
      <p>Therms: {therm}</p>
      <p>Gas Bill Date: {gasBillDate}</p>
      
      {/* Display breakdown of carbon footprint for each energy source */}
      <p>Carbon Footprint Breakdown:</p>
      <p>(Pounds of CO2)</p>
      <p>{thermTotal}</p>
       

    </div>
  );
};

export default GasCalc;