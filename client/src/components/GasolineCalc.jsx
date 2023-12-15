import React from 'react';

const GasolineCalc = ({gallons, purchaseDate, carbonOutput}) => {

  return (
    <div>
      <h2 id='natGasCSS'>Gasoline Calculation Results</h2>
      <p id='natGasText'>Gallons: {gallons}</p>
      <p id='natGasText'>Purchase Date: {purchaseDate}</p>
      {/* Display breakdown of carbon footprint for each energy source */}
      <p id='natGasText'>Carbon Footprint Breakdown:</p>
      <p id='natGasText'>(Pounds of CO2)</p>
      <p id='natGasText'>{carbonOutput}</p>
    </div>
  );
};

export default GasolineCalc;