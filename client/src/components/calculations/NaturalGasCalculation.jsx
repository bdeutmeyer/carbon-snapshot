import React, {useState} from 'react';
import GasCalc from '../GasCalc';
import GasForm from '../GasForm';
import { useMutation } from '@apollo/client';

import '../../App.css'

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
    <div>
      <h1 id="natGasCSS">Natural Gas Use</h1>
      <GasForm 
      therm = {therm}
      gasBillDate = {gasBillDate}
      handleThermChange = {handleThermChange}
      handleGasBillDateChange = {handleGasBillDateChange}
      handleGasFormSubmit = {handleGasFormSubmit}
      />
      <h2 id="natGasCSS">Natural Gas Footprint via</h2>
      <GasCalc 
        therm = {therm}
        gasBillDate = {gasBillDate}
      />
    </div>
  );
};

export default NaturalGasCalculation;
