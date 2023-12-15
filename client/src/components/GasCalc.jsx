import React from 'react';
import '../App.css'

const GasCalc = ({therms, billDate, carbonOutput}) => {

  return (
    <div>
      <h2 id='natGasCSS'> Natural Gas Calculation Results</h2>
      <p id='natGasText'>Therms: {therms}</p>
      <p id='natGasText'>Gas Bill Date: {billDate}</p>
      
      {/* Display breakdown of carbon footprint for each energy source */}
      <p id='natGasText'>Carbon Footprint Breakdown:</p>
      <p id='natGasText'>(Pounds of CO2)</p>
      <p id='natGasText'>{carbonOutput}</p>
    </div>
  );
};

export default GasCalc;