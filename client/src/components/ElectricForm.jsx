import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import '../App.css'

const ElectricForm = ({ electricCompany, kwh, electricBillDate, comment, handleElectricCompanyChange, handleKwhChange, handleElectricBillDateChange, handleElecCommentChange, handleElectricFormSubmit }) => {

  return (
    <Form onSubmit={handleElectricFormSubmit}>
      <FormGroup>
        <Label className='elecFormTxt' for="electricCompany">Please choose your electric company:</Label>
        <Input type="select" id="electricCompany" value={electricCompany} onChange={handleElectricCompanyChange}>
          <option value="default">Select one</option>
          <option value="Alliant Energy">Alliant Energy</option>
          <option value="Ameren Illinois Energy Company">Ameren Illinois Energy Company</option>
          <option value="Mid American Energy Company">Mid American Energy Company</option>
          <option value="Commonwealth Edison">Commonwealth Edison</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label className='elecFormTxt' for="electricBillDate">Please enter your electric bill date:</Label>
        <Input type="date" id="electricBillDate" value={electricBillDate} onChange={handleElectricBillDateChange} />
      </FormGroup>
      <FormGroup>
        <Label className='elecFormTxt' for="kwh">Please enter your billed kWh:</Label>
        <Input type="integer" id="kwh" value={kwh} onChange={handleKwhChange} />
      </FormGroup>
      <FormGroup>
        <Label className='elecFormTxt' for="elecComment">Comments (optional):</Label>
        <Input type="text" id="elecComment" value={comment} onChange={handleElecCommentChange} />
      </FormGroup>
      <Button className='elecFormTxt' type="submit">Submit Electric Info</Button>
    </Form>
  );
}

export default ElectricForm;

