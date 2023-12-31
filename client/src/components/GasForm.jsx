import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../App.css'

const GasForm = ({therms, billDate, handleThermChange, handleGasBillDateChange, handleGasFormSubmit}) => {


  return (
    <Form onSubmit={handleGasFormSubmit}>
      <FormGroup>
        <Label id='gasFormTxt' for="therms">Please enter your number of Therms:</Label>
        <Input type="number" id="therms" value={therms} onChange={handleThermChange} />
      </FormGroup>
      <FormGroup>
        <Label for="gasBillDate">Please enter your gas bill date:</Label>
        <Input type="date" id="gasBillDate" value={billDate} onChange={handleGasBillDateChange} />
      </FormGroup>
      <Button id='gasFormTxt' type="submit">Submit Gas Info</Button>
    </Form>
  );
}

export default GasForm;


