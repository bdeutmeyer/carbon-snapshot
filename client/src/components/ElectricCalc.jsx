import React from 'react';
import formatDate from '../utils/formatDate'

const ElectricCalc = ({ electricCompany, kwh, billDate, carbonOutput, individualFootprints }) => {

  const formattedDate = formatDate(billDate)

  return (
    <div>
      <h2 id='natGasCSS'>Electric Calculation Results</h2>
      <p id='natGasText'>Electric Company: {electricCompany}</p>
      <p id='natGasText'>kWh: {kwh ? kwh : ''}</p>
      <p id='natGasText'>Electric Bill Date: {billDate ? formattedDate : ''}</p>
      
      {/* Display breakdown of carbon footprint for each energy source */}
      <p id='natGasText'>Carbon Footprint Breakdown:</p>

      {  
        Object.entries(individualFootprints).map(item => (
          <p id='natGasText' key={item[0]}>{item[0]} = {kwh ? item[1] : ''}</p>
        ))
      }
      <p id='natGasText'>Total Carbon Footprint: {carbonOutput ? `${carbonOutput} pounds of CO₂` : '' } </p>
      {/* Display other calculation results or further user interaction */}
    </div>
  );
};

export default ElectricCalc;
