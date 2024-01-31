import React, { useState } from 'react';
import NaturalGasReadout from '../readouts/NaturalGasReadout';
import NaturalGasForm from '../forms/NaturalGasForm';
import { useMutation } from '@apollo/client';
import { ADD_NATGAS_USE } from '../../utils/mutations';
import Auth from '../../utils/auth';
import '../../App.css'

const NaturalGasCalculation = () => {
  const [therms, setTherms] = useState(0);
  const [billDate, setBillDate] = useState('');
  const [carbonOutput, setCarbonOutput] = useState(0);
  const [comment, setComment] = useState('');
  const [addNaturalGasUse, { error }] = useMutation(ADD_NATGAS_USE);

  const handleThermChange = (event) => {
    setTherms(+event.target.value);
    setCarbonOutput(thermTotal.toFixed(0))
  }

  const handleGasBillDateChange = (event) => {
    setBillDate(event.target.value);
  }

  const handleGasCommentChange = (event) => {
    setComment(event.target.value)
  }

  const handleGasFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addNaturalGasUse({
        variables: {
          therms,
          billDate,
          carbonOutput: +carbonOutput,
          comment,
          userId: Auth.getProfile().authenticatedPerson._id
        }
      })
      setTherms(0);
      setBillDate('');
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  // Access the shared data context
  const thermTotal = (therms * 12.08);

  return (
    <div className='natural-gas'>
      <div className='natural-gas-input'>
        <h1 className="natGasCSS">Natural Gas Use</h1>
        <NaturalGasForm
          therms={therms}
          billDate={billDate}
          comment={comment}
          handleThermChange={handleThermChange}
          handleGasBillDateChange={handleGasBillDateChange}
          handleGasCommentChange={handleGasCommentChange}
          handleGasFormSubmit={handleGasFormSubmit}
        />
      </div>
      <div className='natural-gas-footprint'>
        <h2 className="natGasCSS">Natural Gas Footprint</h2>
        <NaturalGasReadout
          therms={therms}
          billDate={billDate}
          carbonOutput={carbonOutput}
          setCarbonOutput={setCarbonOutput}
        />
      </div>
    </div>
  );
};

export default NaturalGasCalculation;
