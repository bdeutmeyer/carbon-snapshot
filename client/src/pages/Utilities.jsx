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
    // Perform actions with the collected electric data
    console.log('Electric Company:', electricCompany);
    console.log('KWH:', kwh);
    console.log('Electric Bill Date:', electricBillDate);
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
    // Perform actions with the collected gas data
    console.log('Therm:', therm);
    console.log('Gas Bill Date:', gasBillDate);
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

const Utilities = () => {
  return (
    <main className="utilities-page">
      <ElectricForm />
      <GasForm />
    </main>
  );
};

export default Utilities;



