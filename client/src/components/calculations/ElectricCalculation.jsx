import React, { useState, useEffect } from 'react';
import ElectricCalc from '../ElectricCalc';
import ElectricForm from '../ElectricForm';
import { useMutation } from '@apollo/client';
import { ADD_ELECTRIC_USE } from '../../utils/mutations';
import Auth from '../../utils/auth'

import '../../App.css'

const ElectricCalculation = () => {
  const [electricCompany, setElectricCompany] = useState('');
  const [kwh, setKwh] = useState(0);
  const [billDate, setBillDate] = useState('');
  const [carbonOutput, setCarbonOutput] = useState(0);
  const [addElectricUse, { error }] = useMutation(ADD_ELECTRIC_USE);

  const handleElectricCompanyChange = (event) => {
    setElectricCompany(event.target.value);
  }

  const handleKwhChange = (event) => {
    setKwh(+event.target.value);
    setCarbonOutput(totalCarbonFootprint.toFixed(0))
  }

  const handleElectricBillDateChange = (event) => {
    setBillDate(event.target.value);
  }

  const handleElectricFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addElectricUse({
        variables: {
          electricCompany,
          kwh,
          billDate,
          carbonOutput: +carbonOutput,
          userId: Auth.getProfile().authenticatedPerson._id
        }
      })
      setElectricCompany('');
      setKwh(0);
      setBillDate('');
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

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

    return { individualFootprints, totalCarbonFootprint };
  };

  const { individualFootprints, totalCarbonFootprint } = calculateCarbonFootprint();

  return (
    <div className='electricity'>
      <div className='electricity-input'>
        <h1 id='elecFont'>Electricity Use</h1>
        <ElectricForm
          electricCompany={electricCompany}
          kwh={kwh}
          billDate={billDate}
          handleElectricCompanyChange={handleElectricCompanyChange}
          handleKwhChange={handleKwhChange}
          handleElectricBillDateChange={handleElectricBillDateChange}
          handleElectricFormSubmit={handleElectricFormSubmit}
        />
      </div>
      <div className='electricity-footprint'>
        <h2 id='elecFont'>Electricity Footprint</h2>
        <ElectricCalc
          electricCompany={electricCompany}
          kwh={kwh}
          billDate={billDate}
          individualFootprints={individualFootprints}
          carbonOutput={carbonOutput}
          setCarbonOutput={setCarbonOutput}
        />
      </div>
    </div >
  );
};



export default ElectricCalculation;
