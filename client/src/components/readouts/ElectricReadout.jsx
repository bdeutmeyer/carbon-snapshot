import React from 'react';
import formatDate from '../../utils/formatDate'

const ElectricReadout = ({ electricCompany, kwh, billDate, carbonSum, calcArray }) => {

  const formattedDate = formatDate(billDate)

  return (
    <div>
      <h2 id='natGasCSS'>Electric Calculation Results</h2>
      <p id='natGasText'>Electric Company: {electricCompany}</p>
      <p id='natGasText'>kWh: {kwh ? kwh : ''}</p>
      <p id='natGasText'>Electric Bill Date: {billDate ? formattedDate : ''}</p>

      {/* Display breakdown of carbon footprint for each energy source */}
      <p id='natGasText'>Carbon Footprint Breakdown:</p>
      <div>
        {calcArray.map((obj, index) => {
          const key = Object.keys(obj)[0];
          const value = Object.values(obj)[0];

          return (
            <div key={index}>
              <p>{key}{value}</p>
            </div>
          );
        })}
      </div>
      <p id='natGasText'>Total Carbon Footprint: {carbonSum ? `${carbonSum.toFixed(0)} pounds of CO₂` : ''} </p>
      {/* Display other calculation results or further user interaction */}
    </div>
  );
};

export default ElectricReadout;
