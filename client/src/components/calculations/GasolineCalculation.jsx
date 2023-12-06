

// The stuff below is just copied over from the natural gas calculation thing and then renamed the function - guessing you'd be using it as a template anyway, so just slapped it here so I had something to render and get it linked up. 



import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import GasolineCalc from '../GasolineCalc';
import GasolineForm from '../GasolineForm';

const GasolineCalculation = () => {
  const [gallons, setGallons] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');

  const handleGallonsChange = (event) => {
    setGallons(event.target.value);
  }

  const handlePurchaseDateChange = (event) => {
    setPurchaseDate(event.target.value);
  }

  const handleGasolineFormSubmit = (event) => {
    event.preventDefault();

  }
  return (
    <div>
      <h1>Gasoline Use</h1>
      <GasolineForm 
      gallons = {gallons}
      purchaseDate = {purchaseDate}
      handleGallonsChange = {handleGallonsChange}
      handlePurchaseDateChange = {handlePurchaseDateChange}
      handleGasolineFormSubmit = {handleGasolineFormSubmit}
      />
      <h2>Gasoline Footprint</h2>
      <GasolineCalc 
        gallons = {gallons}
        purchaseDate = {purchaseDate}
      />
    </div>
  );
};

export default GasolineCalculation;
