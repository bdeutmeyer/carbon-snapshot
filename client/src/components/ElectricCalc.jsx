import React from 'react';
// import useData from './ElectricForm';

const ElectricCalc = ({electricCompany, kwh, electricBillDate}) => {
  // Access the shared data context
  // const { electricData } = useData();

  // Cost factors for each company
  const costFactors = {
    'Mid American': {
      'Coal': 0.23*2.3*kwh,
      'Natural Gas': 0.11*.97*kwh,
      'Nuclear': 0.04*.0717*kwh,
      'Solar': 0.01*.1102*kwh,
      'Wind': 0.61*.0243*kwh,
    },
    'Alliant Energy': {
      'Coal': 0.32*2.3*kwh,
      'Natural Gas': 0.32*.97*kwh,
      'Nuclear': 0.08*.0717*kwh,
      'Solar': 0.01*.1102*kwh,
      'Wind': 0.11*.0243*kwh,
    },
    'Ameren': {
      'Coal': 0.30*2.3*kwh,
      'Natural Gas': 0.36*.97*kwh,
      'Nuclear': 0.15*.0717*kwh,
      'Solar': 0.01*.1102*kwh,
      'Wind': 0.15*.0243*kwh,
    },
    'Commonwealth Edison': {
      'Coal': 0.18*2.3*kwh,
      'Natural Gas': 0.42*.97*kwh,
      'Nuclear': 0.33*.0717*kwh,
      'Solar': 0.01*.1102*kwh,
      'Wind': 0.04*.0243*kwh,
    },
  };



  // Calculate carbon footprint based on the collected data
  const calculateCarbonFootprint = () => {
    const companyCostFactors = costFactors[electricCompany] || {};
    // const energySourceCostFactor = companyCostFactors[electricData.energySource] || 0;
    // const footprintFactor = carbonFootprintFactors[electricData.energySource] || 0;
    
    return companyCostFactors;
  };

  return (
    <div>
      <h2>Electric Calculation Results</h2>
      <p>Electric Company: {electricCompany}</p>
      <p>KWH: {kwh}</p>
      <p>Electric Bill Date: {electricBillDate}</p>
      
      {/* Display breakdown of carbon footprint for each energy source */}
      <p>Carbon Footprint Breakdown:</p>
      <p>(Pounds of CO2)</p>


      {  
       Object.entries(calculateCarbonFootprint()).map(item => (
        <p>{item[0]} = {item[1]}</p>
       ))
      }
      
      {/* Display other calculation results or further user interaction */}
    </div>
  );
};

export default ElectricCalc;
