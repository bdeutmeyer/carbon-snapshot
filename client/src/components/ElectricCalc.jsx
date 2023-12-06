import React, {useEffect} from 'react';

const ElectricCalc = ({electricCompany, kwh, billDate, totalCarbonFootprint,setTotalCarbonFootprint}) => {

  // Cost factors for each company
  const costFactors = {
    'Mid American Energy Company': {
      'Coal': (0.23 * 2.3 * kwh).toFixed(2),
      'Natural Gas': (0.11 * 0.97 * kwh).toFixed(2),
      'Nuclear': (0.04 * 0.0717 * kwh).toFixed(2),
      'Solar': (0.01 * 0.1102 * kwh).toFixed(2),
      'Wind': (0.61 * 0.0243 * kwh).toFixed(2),
    },
    'Alliant Energy': {
      'Coal': (0.32 * 2.3 * kwh).toFixed(2),
      'Natural Gas': (0.32 * 0.97 * kwh).toFixed(2),
      'Nuclear': (0.08 * 0.0717 * kwh).toFixed(2),
      'Solar': (0.01 * 0.1102 * kwh).toFixed(2),
      'Wind': (0.11 * 0.0243 * kwh).toFixed(2),
    },
    'Ameren Illinois Energy Company': {
      'Coal': (0.30 * 2.3 * kwh).toFixed(2),
      'Natural Gas': (0.36 * 0.97 * kwh).toFixed(2),
      'Nuclear': (0.15 * 0.0717 * kwh).toFixed(2),
      'Solar': (0.01 * 0.1102 * kwh).toFixed(2),
      'Wind': (0.15 * 0.0243 * kwh).toFixed(2),
    },
    'Commonwealth Edison': {
      'Coal': (0.18 * 2.3 * kwh).toFixed(2),
      'Natural Gas': (0.42 * 0.97 * kwh).toFixed(2),
      'Nuclear': (0.33 * 0.0717 * kwh).toFixed(2),
      'Solar': (0.01 * 0.1102 * kwh).toFixed(2),
      'Wind': (0.04 * 0.0243 * kwh).toFixed(2),
    },
  };

  // Calculate carbon footprint based on the collected data
  const calculateCarbonFootprint = () => {
    const companyCostFactors = costFactors[electricCompany] || {};
    let totalCarbonFootprintLocal = 0;
    const individualFootprints = {};

    // Iterate over predefined sources and calculate the footprint
    ['Coal', 'Natural Gas', 'Nuclear', 'Solar', 'Wind'].forEach(source => {
      const costFactor = companyCostFactors[source] || 0;
      const footprint = costFactor
      individualFootprints[source] = footprint;
      totalCarbonFootprintLocal += parseFloat(footprint);
    });

    return { individualFootprints, totalCarbonFootprintLocal};
  };

  const { individualFootprints, totalCarbonFootprintLocal } = calculateCarbonFootprint();

  // useEffect(()=>{
    setTotalCarbonFootprint(totalCarbonFootprintLocal)
  // },[])
  return (
    <div>
      <h2>Electric Calculation Results</h2>
      <p>Electric Company: {electricCompany}</p>
      <p>KWH: {kwh}</p>
      <p>Electric Bill Date: {billDate}</p>
      
      {/* Display breakdown of carbon footprint for each energy source */}
      <p>Carbon Footprint Breakdown:</p>
      <p>(Pounds of CO2)</p>

      {  
        Object.entries(individualFootprints).map(item => (
          <p key={item[0]}>{item[0]} = {item[1]}</p>
        ))
      }
      <p>Total Carbon Footprint: {totalCarbonFootprint} pounds of CO2</p>
      {/* Display other calculation results or further user interaction */}
    </div>
  );
};

export default ElectricCalc;
