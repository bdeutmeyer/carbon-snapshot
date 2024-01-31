import React from 'react';
import formatDate from '../../utils/formatDate'

const GasolineReadout = ({gallons, purchaseDate, carbonOutput}) => {

  const formattedDate = formatDate(purchaseDate)

  return (
    <div>
      <h2 className='natGasCSS'>Gasoline Calculation Results</h2>
      <p className='natGasText'>Gallons: {gallons ? gallons : ''}</p>
      <p className='natGasText'>Purchase Date: {purchaseDate ? formattedDate : ''}</p>
      {/* Display breakdown of carbon footprint for each energy source */}
      <p className='natGasText'>Carbon Footprint Breakdown:</p>
      <p className='natGasText'>{carbonOutput ? `${carbonOutput} pounds of CO₂` : '' }</p>
    </div>
  );
};

export default GasolineReadout;