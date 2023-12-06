

// The stuff below is just copied over from the natural gas calculation thing and then renamed the function - guessing you'd be using it as a template anyway, so just slapped it here so I had something to render and get it linked up. 



import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import GasCalc from '../GasCalc';
import GasForm from '../GasForm';

const GasolineCalculation = () => {
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
    <div className='gasoline'>
      <div className='gasoline-input'>
      <h1>Natural Gas Use</h1>
      <GasForm 
      therm = {therm}
      gasBillDate = {gasBillDate}
      handleThermChange = {handleThermChange}
      handleGasBillDateChange = {handleGasBillDateChange}
      handleGasFormSubmit = {handleGasFormSubmit}
      />
      </div>
      <div className='gasoline-footprint'>
      <h2>Natural Gas Footprint</h2>
      <GasCalc 
        therm = {therm}
        gasBillDate = {gasBillDate}
      />
      </div>
    </div>
  );
};

export default GasolineCalculation;
