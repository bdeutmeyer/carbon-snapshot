import React, {useState} from 'react';
import GasCalc from '../GasCalc';
import GasForm from '../GasForm';
import { useMutation } from '@apollo/client';
import { ADD_NATGAS_USE } from '../../utils/mutations';
import Auth from '../../utils/auth';

import '../../App.css'

const NaturalGasCalculation = () => {
  const [therms, setTherms] = useState(0);
  const [billDate, setBillDate] = useState('');
  const [carbonOutput, setCarbonOutput] = useState(0);
  const [addNaturalGasUse, { error }] = useMutation(ADD_NATGAS_USE);

  const handleThermChange = (event) => {
    setTherms(+event.target.value);
  }

  const handleGasBillDateChange = (event) => {
    setBillDate(event.target.value);
  }

  const handleGasFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addNaturalGasUse({
          variables: {
              therms,
              billDate,
              carbonOutput: +carbonOutput,
              userId: Auth.getProfile().authenticatedPerson._id
          }  
      })
      setTherms(0);
      setBillDate('');
  } catch (err) {
      console.error(err);
  }
  }
  return (
    <div>
      <h1 id="natGasCSS">Natural Gas Use</h1>
      <GasForm 
      therms = {therms}
      billDate = {billDate}
      handleThermChange = {handleThermChange}
      handleGasBillDateChange = {handleGasBillDateChange}
      handleGasFormSubmit = {handleGasFormSubmit}
      />
      <h2 id="natGasCSS">Natural Gas Footprint via</h2>
      <GasCalc 
        therms = {therms}
        billDate = {billDate}
        carbonOutput={carbonOutput}
        setCarbonOutput={setCarbonOutput}
      />
    </div>
  );
};

export default NaturalGasCalculation;
