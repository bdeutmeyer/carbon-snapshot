import React, { useState } from 'react';
import GasCalc from '../GasCalc';
import GasForm from '../GasForm';
import { useMutation } from '@apollo/client';

const NaturalGasCalculation = () => {
  const [therm, setTherm] = useState('');
  const [gasBillDate, setGasBillDate] = useState('');

  const handleThermChange = (event) => {
    setTherm(event.target.value);
  }

  const handleGasBillDateChange = (event) => {
    setGasBillDate(event.target.value);
  }

  const handleGasFormSubmit = (event) => {
    event.preventDefault();

  }
  return (
    <div className='natural-gas'>
      <div className='natural-gas-input'>
        <h1>Natural Gas Use</h1>
        <GasForm
          therm={therm}
          gasBillDate={gasBillDate}
          handleThermChange={handleThermChange}
          handleGasBillDateChange={handleGasBillDateChange}
          handleGasFormSubmit={handleGasFormSubmit}
        />
      </div>
      <div className='natural-gas-footprint'>
        <h2>Natural Gas Footprint</h2>
        <GasCalc
          therm={therm}
          gasBillDate={gasBillDate}
        />
      </div>
    </div>
  );
};

export default NaturalGasCalculation;
