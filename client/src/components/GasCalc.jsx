import React from 'react';


const GasCalc = ({therms, billDate, carbonOutput, setCarbonOutput}) => {
  // Access the shared data context
  const thermTotal = (therms * 0.034121412 * 0.97);

  setCarbonOutput(thermTotal.toFixed(0))

  return (
    <div>
      <h2>Gas Calculation Results</h2>
      <p>Therms: {therms}</p>
      <p>Gas Bill Date: {billDate}</p>
      
      {/* Display breakdown of carbon footprint for each energy source */}
      <p>Carbon Footprint Breakdown:</p>
      <p>(Pounds of CO2)</p>
      <p>{carbonOutput}</p>
       

    </div>
  );
};

export default GasCalc;