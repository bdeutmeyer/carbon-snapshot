import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import '../App.css'

const ElectricForm = ({electricCompany, kwh, electricBillDate, handleElectricCompanyChange, handleKwhChange, handleElectricBillDateChange, handleElectricFormSubmit}) => {

  return (
    <Form onSubmit={handleElectricFormSubmit}>
      <FormGroup>
        <Label id='elecFormTxt' for="electricCompany">Please choose your electric company:</Label>
        <Input type="select" id="electricCompany" value={electricCompany} onChange={handleElectricCompanyChange}>
          <option value="Alliant Energy">Alliant Energy</option>
          <option value="Ameren">Ameren</option>
          <option value="Mid American">Mid American</option>
          <option value="Commonwealth Edison">Commonwealth Edison</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label id='elecFormTxt' for="kwh">Please enter your KWH:</Label>
        <Input type="integer" id="kwh" value={kwh} onChange={handleKwhChange} />
      </FormGroup>
      <FormGroup>
        <Label id='elecFormTxt' for="electricBillDate">Please enter your electric bill date:</Label>
        <Input type="date" id="electricBillDate" value={electricBillDate} onChange={handleElectricBillDateChange} />
      </FormGroup>
      <Button id='elecFormTxt' type="submit">Submit Electric Info</Button>
    </Form>
  );
}

export default ElectricForm;

