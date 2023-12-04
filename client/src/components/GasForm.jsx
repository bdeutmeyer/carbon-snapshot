import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const GasForm = () => {
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

    // Collect the gas form data
    const gasFormData = {
      therm: therm,
      gasBillDate: gasBillDate,
    };

    // Placeholder: Log the collected data
    console.log('Gas Form Data:', gasFormData);

    // You can perform additional actions with the collected data, such as updating state or making API calls
    // For now, this example just logs the data to the console

    // Reset form fields after submission if needed
    setTherm('');
    setGasBillDate('');
  }

  return (
    <Form onSubmit={handleGasFormSubmit}>
      <FormGroup>
        <Label for="therm">Please enter your number of Therms:</Label>
        <Input type="number" id="therm" value={therm} onChange={handleThermChange} />
      </FormGroup>
      <FormGroup>
        <Label for="gasBillDate">Please enter your gas bill date:</Label>
        <Input type="date" id="gasBillDate" value={gasBillDate} onChange={handleGasBillDateChange} />
      </FormGroup>
      <Button type="submit">Submit Gas Info</Button>
    </Form>
  );
}

export default GasForm;
