import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const GasForm = ({therm, gasBillDate, handleThermChange, handleGasBillDateChange, handleGasFormSubmit}) => {



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


