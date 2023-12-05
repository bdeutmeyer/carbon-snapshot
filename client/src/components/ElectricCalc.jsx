import React from 'react';
import { useData } from '../DataContext';

const ElectricCalc = () => {
  // Access the shared data context
  const { electricData } = useData();

  // Cost factors for each company
  const costFactors = {
    'Mid American': {
      'Coal': 0.23,
      'Natural Gas': 0.11,
      'Nuclear': 0.04,
      'Solar': 0.01,
      'Wind': 0.61,
    },
    'Alliant Energy': {
      'Coal': 0.32,
      'Natural Gas': 0.32,
      'Nuclear': 0.08,
      'Solar': 0.01,
      'Wind': 0.11,
    },
    'Ameren': {
      'Coal': 0.30,
      'Natural Gas': 0.36,
      'Nuclear': 0.15,
      'Solar': 0.01,
      'Wind': 0.15,
    },
    'Commonwealth Edison': {
      'Coal': 0.18,
      'Natural Gas': 0.42,
      'Nuclear': 0.33,
      'Solar': 0.01,
      'Wind': 0.04,
    },
  };

  // Carbon footprint factors for each energy source
  const carbonFootprintFactors = {
    'Coal': 2.3,
    'Natural Gas': 0.97,
    'Nuclear': 0.0717,
    'Solar': 0.1102,
    'Wind': 0.0243,
  };

  // Calculate carbon footprint based on the collected data
  const calculateCarbonFootprint = () => {
    const companyCostFactors = costFactors[electricData.electricCompany] || {};
    const energySourceCostFactor = companyCostFactors[electricData.energySource] || 0;
    const footprintFactor = carbonFootprintFactors[electricData.energySource] || 0;
    
    return electricData.kwh * energySourceCostFactor * footprintFactor;
  };

  return (
    <div>
      <h2>Electric Calculation Results</h2>
      <p>Electric Company: {electricData.electricCompany}</p>
      <p>Energy Source: {electricData.energySource}</p>
      <p>KWH: {electricData.kwh}</p>
      <p>Electric Bill Date: {electricData.electricBillDate}</p>
      
      {/* Display breakdown of carbon footprint for each energy source */}
      <p>Carbon Footprint Breakdown:</p>
      <ul>
        {Object.entries(carbonFootprintFactors).map(([source, factor]) => (
          <li key={source}>
            {source}: {electricData.kwh * factor} kg CO2
          </li>
        ))}
      </ul>

      {/* Display total carbon footprint */}
      <p>Total Carbon Footprint: {calculateCarbonFootprint().toFixed(2)} kg CO2</p>
      {/* Display other calculation results or further user interaction */}
    </div>
  );
};

export default ElectricCalc;
