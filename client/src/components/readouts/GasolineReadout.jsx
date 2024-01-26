import React from 'react';
import formatDate from '../../utils/formatDate'

const GasolineReadout = ({gallons, purchaseDate, carbonOutput}) => {

  const formattedDate = formatDate(purchaseDate)

  return (
    <div>
      <h2 id='natGasCSS'>Gasoline Calculation Results</h2>
      <p id='natGasText'>Gallons: {gallons ? gallons : ''}</p>
      <p id='natGasText'>Purchase Date: {purchaseDate ? formattedDate : ''}</p>
      {/* Display breakdown of carbon footprint for each energy source */}
      <p id='natGasText'>Carbon Footprint Breakdown:</p>
      <p id='natGasText'>{carbonOutput ? `${carbonOutput} pounds of CO₂` : '' }</p>
    </div>
  );
};

export default GasolineReadout;