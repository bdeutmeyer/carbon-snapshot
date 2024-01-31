import React from 'react';
import '../../App.css'
import formatDate from '../../utils/formatDate'

const NaturalGasReadout = ({therms, billDate, carbonOutput}) => {

  const formattedDate = formatDate(billDate)

  return (
    <div>
      <h2 className='natGasCSS'> Natural Gas Calculation Results</h2>
      <p className='natGasText'>Therms: {therms ? therms : ''}</p>
      <p className='natGasText'>Gas Bill Date: {billDate ? formattedDate : ''}</p>
      
      {/* Display breakdown of carbon footprint for each energy source */}
      <p className='natGasText'>Carbon Footprint Breakdown:</p>
      <p className='natGasText'>{carbonOutput ? `${carbonOutput} pounds of CO₂` : ''}</p>
    </div>
  );
};

export default NaturalGasReadout;