import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ElectricCompanyForm = () => {
  const [electricCompany, setElectricCompany] = useState('Mid American');

  const handleElectricCompanyChange = (event) => {
    setElectricCompany(event.target.value);
  }

  const handleElectricCompanySubmit = (event) => {
    event.preventDefault();
    // You can do something with the selected electric company if needed
  }

  return (
    <Form onSubmit={handleElectricCompanySubmit}>
      <FormGroup>
        <Label for="electricCompany">Please choose your electric company:</Label>
        <Input type="select" id="electricCompany" value={electricCompany} onChange={handleElectricCompanyChange}>
          <option value="Alliant Energy">Alliant Energy</option>
          <option value="Ameren">Ameren</option>
          <option value="Mid American">Mid American</option>
          <option value="Commonwealth Edison">Commonwealth Edison</option>
        </Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

const KWHInputForm = () => {
  const [kwh, setKwh] = useState('');

  const handleKwhChange = (event) => {
    setKwh(event.target.value);
  }

  const handleKwhSubmit = (event) => {
    event.preventDefault();
    // You can do something with the entered KWH value if needed
  }

  return (
    <Form onSubmit={handleKwhSubmit}>
      <FormGroup>
        <Label for="kwh">Please enter your KWH:</Label>
        <Input type="number" id="kwh" value={kwh} onChange={handleKwhChange} />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

const ThermInputForm = () => {
  const [therm, setTherm] = useState('');

  const handleThermChange = (event) => {
    setTherm(event.target.value);
  }

  const handleThermSubmit = (event) => {
    event.preventDefault();
    // You can do something with the entered Therm value if needed
  }

  return (
    <Form onSubmit={handleThermSubmit}>
      <FormGroup>
        <Label for="therm">Please enter your number of Therms:</Label>
        <Input type="number" id="therm" value={therm} onChange={handleThermChange} />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

const MonthYearInputForm = () => {
  const [electric, setElectric] = useState('');
  const [gas, setGas] = useState('');

  const handleElectricChange = (event) => {
    setElectric(event.target.value);
  }

  const handleGasChange = (event) => {
    setGas(event.target.value);
  }

  const handleBillSubmit = (event) => {
    event.preventDefault();
    // You can do something with the entered month and year if needed
  }

  return (
    <Form onSubmit={handleBillSubmit}>
      <FormGroup>
        <Label for="electricBillDate">Please enter your electric bill date:</Label>
        <Input type="date" id="electricBillDate" value={electric} onChange={handleElectricChange} />
      </FormGroup>
      <FormGroup>
        <Label for="gasBillDate">Please enter your gas bill date:</Label>
        <Input type="date" id="gasBillDate" value={gas} onChange={handleGasChange} />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

const Utilities = () => {
  return (
    <main className="utilities-page">
      <ElectricCompanyForm />
      <KWHInputForm />
      <ThermInputForm />
      <MonthYearInputForm />
    </main>
  );
};

export default Utilities;

