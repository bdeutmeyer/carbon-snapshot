import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ElectricForm = () => {
  const [electricCompany, setElectricCompany] = useState('');
  const [kwh, setKwh] = useState('');
  const [electricBillDate, setElectricBillDate] = useState('');

  const handleElectricCompanyChange = (event) => {
    setElectricCompany(event.target.value);
  }

  const handleKwhChange = (event) => {
    setKwh(event.target.value);
  }

  const handleElectricBillDateChange = (event) => {
    setElectricBillDate(event.target.value);
  }

  const handleElectricFormSubmit = (event) => {
    event.preventDefault();

    // Collect the electric form data
    const electricFormData = {
      electricCompany: electricCompany,
      kwh: kwh,
      electricBillDate: electricBillDate,
    };

    // Placeholder: Log the collected data
    console.log('Electric Form Data:', electricFormData);

    // You can perform additional actions with the collected data, such as updating state or making API calls
    // For now, this example just logs the data to the console

    // Optional: Reset form fields after submission
    setElectricCompany('');
    setKwh('');
    setElectricBillDate('');
  }

  return (
    <Form onSubmit={handleElectricFormSubmit}>
      <FormGroup>
        <Label for="electricCompany">Please choose your electric company:</Label>
        <Input type="select" id="electricCompany" value={electricCompany} onChange={handleElectricCompanyChange}>
          <option value="Alliant Energy">Alliant Energy</option>
          <option value="Ameren">Ameren</option>
          <option value="Mid American">Mid American</option>
          <option value="Commonwealth Edison">Commonwealth Edison</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="kwh">Please enter your KWH:</Label>
        <Input type="number" id="kwh" value={kwh} onChange={handleKwhChange} />
      </FormGroup>
      <FormGroup>
        <Label for="electricBillDate">Please enter your electric bill date:</Label>
        <Input type="date" id="electricBillDate" value={electricBillDate} onChange={handleElectricBillDateChange} />
      </FormGroup>
      <Button type="submit">Submit Electric Info</Button>
    </Form>
  );
}

export default ElectricForm;

