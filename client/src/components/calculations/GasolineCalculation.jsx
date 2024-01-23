import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import GasolineCalc from '../GasolineCalc';
import GasolineForm from '../GasolineForm';
import { ADD_GASOLINE_USE } from '../../utils/mutations';
import Auth from '../../utils/auth';

import '../../App.css'

const GasolineCalculation = () => {
  const [gallons, setGallons] = useState(0);
  const [purchaseDate, setPurchaseDate] = useState('');
  const [carbonOutput, setCarbonOutput] = useState(0);
  const [comment, setComment] = useState('');
  const [addGasolineUse, { error }] = useMutation(ADD_GASOLINE_USE)

  const handleGallonsChange = (event) => {
    setGallons(+event.target.value);
    setCarbonOutput(carbonTotal.toFixed(0))
  }

  const handlePurchaseDateChange = (event) => {
    setPurchaseDate(event.target.value);
  }

  const handleGasolineCommentChange = (event) => {
    setComment(event.target.value)
  }

  const handleGasolineFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addGasolineUse({
        variables: {
          gallons,
          purchaseDate,
          carbonOutput: +carbonOutput,
          comment,
          userId: Auth.getProfile().authenticatedPerson._id
        }
      })
      setGallons(0);
      setPurchaseDate('');
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }
  // Access the shared data context
  const carbonTotal = (gallons * 3.7 * 0.87);
  return (
    <div className='gasoline'>
      <div className='gasoline-input'>
        <h1 id='petrolFont'>Gasoline Use</h1>
        <GasolineForm
          gallons={gallons}
          purchaseDate={purchaseDate}
          comment={comment}
          handleGallonsChange={handleGallonsChange}
          handlePurchaseDateChange={handlePurchaseDateChange}
          handleGasolineCommentChange={handleGasolineCommentChange}
          handleGasolineFormSubmit={handleGasolineFormSubmit}
        />
      </div>
      <div className='gasoline-footprint'>
        <h2 id='petrolFont'>Gasoline Footprint</h2>
        <GasolineCalc
          gallons={gallons}
          purchaseDate={purchaseDate}
          carbonOutput={carbonOutput}
          setCarbonOutput={setCarbonOutput}
        />
      </div>
    </div>
  );
};

export default GasolineCalculation;
