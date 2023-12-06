import React from 'react';


import '../App.css'

const GasCalc = ({therms, billDate, carbonOutput, setCarbonOutput}) => {

  // Access the shared data context
  const thermTotal = (therms * 0.034121412 * 0.97);

  setCarbonOutput(thermTotal.toFixed(0))

  return (
    <div>
      <h2 id='natGasCSS'>Gas Calculation Results</h2>
      <p id='natGasText'>Therms: {therm}</p>
      <p id='natGasText'>Gas Bill Date: {gasBillDate}</p>
      
      {/* Display breakdown of carbon footprint for each energy source */}
      <p id='natGasText'>Carbon Footprint Breakdown:</p>
      <p id='natGasText'>(Pounds of CO2)</p>
      <p id='natGasText'>{thermTotal}</p>
    </div>
  );
};

export default GasCalc;