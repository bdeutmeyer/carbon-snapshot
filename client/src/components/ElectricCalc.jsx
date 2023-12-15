import React from 'react';

const ElectricCalc = ({ electricCompany, kwh, billDate, carbonOutput, individualFootprints }) => {

  return (
    <div>
      <h2 id='natGasCSS'>Electric Calculation Results</h2>
      <p id='natGasText'>Electric Company: {electricCompany}</p>
      <p id='natGasText'>KWH: {kwh}</p>
      <p id='natGasText'>Electric Bill Date: {billDate}</p>
      
      {/* Display breakdown of carbon footprint for each energy source */}
      <p id='natGasText'>Carbon Footprint Breakdown:</p>
      <p id='natGasText'>(Pounds of CO2)</p>

      {  
        Object.entries(individualFootprints).map(item => (
          <p id='natGasText' key={item[0]}>{item[0]} = {item[1]}</p>
        ))
      }
      <p id='natGasText'>Total Carbon Footprint: {carbonOutput} pounds of CO2</p>
      {/* Display other calculation results or further user interaction */}
    </div>
  );
};

export default ElectricCalc;
