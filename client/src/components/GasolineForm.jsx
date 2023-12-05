import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const GasolineForm = () => {
  const [gallon, setGallon] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');

  const handleGallonChange = (event) => {
    setGallon(event.target.value);
  }

  const handlePurchaseDateChange = (event) => {
    setGasBillDate(event.target.value);
  }

  const handleGasolineFormSubmit = (event) => {
    event.preventDefault();

    // Collect the gas form data
    const gasolineFormData = {
      gallon: gallon,
      purchaseDate: purchaseDate,
    };

    // Placeholder: Log the collected data
    console.log('Gasoline Form Data:', gasolineFormData);

    // Reset form fields after submission if needed
    setGallon('');
    setPurchaseDate('');
  }

  return (
    <Form onSubmit={handleGasolineFormSubmit}>
      <FormGroup>
        <Label for="therm">Please enter your number of gallons:</Label>
        <Input type="number" id="therm" value={gallon} onChange={handleGallonChange} />
      </FormGroup>
      <FormGroup>
        <Label for="gasBillDate">Please enter your purchase date:</Label>
        <Input type="date" id="gasBillDate" value={purchaseDate} onChange={handlePurchaseDateChange} />
      </FormGroup>
      <Button type="submit">Submit Gasoline Info</Button>
    </Form>
  );
}

export default GasolineForm;
