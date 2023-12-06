import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ElectricForm = ({electricCompany, kwh, billDate, handleElectricCompanyChange, handleKwhChange, handleElectricBillDateChange, handleElectricFormSubmit}) => {

  return (
    <Form onSubmit={handleElectricFormSubmit}>
      <FormGroup>
        <Label for="electricCompany">Please choose your electric company:</Label>
        <Input type="select" id="electricCompany" value={electricCompany} onChange={handleElectricCompanyChange}>
          <option value="default">Select one</option>
          <option value="Alliant Energy">Alliant Energy</option>
          <option value="Ameren Illinois Energy Company">Ameren Illinois Energy Company</option>
          <option value="Mid American Energy Company">Mid American Energy Company</option>
          <option value="Commonwealth Edison">Commonwealth Edison</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="kwh">Please enter your KWH:</Label>
        <Input type="number" id="kwh" value={kwh} onChange={handleKwhChange} />
      </FormGroup>
      <FormGroup>
        <Label for="electricBillDate">Please enter your electric bill date:</Label>
        <Input type="date" id="electricBillDate" value={billDate} onChange={handleElectricBillDateChange} />
      </FormGroup>
      <Button type="submit">Submit Electric Info</Button>
    </Form>
  );
}

export default ElectricForm;

