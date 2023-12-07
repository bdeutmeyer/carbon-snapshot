import React, {useEffect} from 'react';

const ElectricCalc = ({electricCompany, kwh, billDate, carbonOutput, setCarbonOutput}) => {

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
    let totalCarbonFootprint = 0;
    const individualFootprints = {};

    // Iterate over predefined sources and calculate the footprint
    ['Coal', 'Natural Gas', 'Nuclear', 'Solar', 'Wind'].forEach(source => {
      const costFactor = companyCostFactors[source] || 0;
      const footprint = costFactor
      individualFootprints[source] = footprint;
      totalCarbonFootprint += parseFloat(footprint);
    });

    return { individualFootprints, totalCarbonFootprint};
  };

  const { individualFootprints, totalCarbonFootprint } = calculateCarbonFootprint();

  // useEffect(()=>{
    setCarbonOutput(totalCarbonFootprint.toFixed(0))
  // },[])
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
