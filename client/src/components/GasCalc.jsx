import React from 'react';
import '../App.css'
import formatDate from '../utils/formatDate'

const GasCalc = ({therms, billDate, carbonOutput}) => {

  const formattedDate = formatDate(billDate)

  return (
    <div>
      <h2 id='natGasCSS'> Natural Gas Calculation Results</h2>
      <p id='natGasText'>Therms: {therms ? therms : ''}</p>
      <p id='natGasText'>Gas Bill Date: {billDate ? formattedDate : ''}</p>
      
      {/* Display breakdown of carbon footprint for each energy source */}
      <p id='natGasText'>Carbon Footprint Breakdown:</p>
      <p id='natGasText'>{carbonOutput ? `${carbonOutput} pounds of CO₂` : ''}</p>
    </div>
  );
};

export default GasCalc;