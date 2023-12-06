import React, {useState} from 'react';
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
  const [addGasolineUse, { error }] = useMutation(ADD_GASOLINE_USE)

  const handleGallonsChange = (event) => {
    setGallons(+event.target.value);
  }

  const handlePurchaseDateChange = (event) => {
    setPurchaseDate(event.target.value);
  }

  const handleGasolineFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addGasolineUse({
          variables: {
              gallons,
              purchaseDate,
              carbonOutput: +carbonOutput,
              userId: Auth.getProfile().authenticatedPerson._id
          }  
      })
  } catch (err) {
      console.error(err);
  }
  }
  return (
    <div>
      <h1 id='petrolFont'>Gasoline Use</h1>
      <GasolineForm 
      gallons = {gallons}
      purchaseDate = {purchaseDate}
      handleGallonsChange = {handleGallonsChange}
      handlePurchaseDateChange = {handlePurchaseDateChange}
      handleGasolineFormSubmit = {handleGasolineFormSubmit}
      />
      <h2 id='petrolFont'>Gasoline Footprint</h2>
      <GasolineCalc 
        gallons = {gallons}
        purchaseDate = {purchaseDate}
        carbonOutput={carbonOutput}
        setCarbonOutput={setCarbonOutput}
      />
    </div>
  );
};

export default GasolineCalculation;
