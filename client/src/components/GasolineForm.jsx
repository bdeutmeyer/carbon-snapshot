import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const GasolineForm = ({gallons, purchaseDate, handleGallonsChange, handlePurchaseDateChange, handleGasolineFormSubmit}) => {



  return (
    <Form onSubmit={handleGasolineFormSubmit}>
      <FormGroup>
        <Label for="gallons">Please enter your number of gallons:</Label>
        <Input type="number" id="gallons" value={gallons} onChange={handleGallonsChange} />
      </FormGroup>
      <FormGroup>
        <Label for="purchaseDate">Please your last gasoline purchase date:</Label>
        <Input type="date" id="purchaseDate" value={purchaseDate} onChange={handlePurchaseDateChange} />
      </FormGroup>
      <Button type="submit">Submit Gasoline Info</Button>
    </Form>
  );
}

export default GasolineForm;
