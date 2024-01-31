import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const GasolineForm = ({ gallons, purchaseDate, comment, handleGallonsChange, handlePurchaseDateChange, handleGasolineCommentChange, handleGasolineFormSubmit }) => {

  return (
    <Form onSubmit={handleGasolineFormSubmit}>
      <FormGroup>
        <Label for="purchaseDate">Please enter your gasoline purchase date:</Label>
        <Input type="date" id="purchaseDate" value={purchaseDate} onChange={handlePurchaseDateChange} />
      </FormGroup>
      <FormGroup>
        <Label for="gallons">Please enter the number of gallons purchased:</Label>
        <Input type="number" id="gallons" value={gallons} onChange={handleGallonsChange} />
      </FormGroup>
      <FormGroup>
        <Label for="gasolineComment">Comments (optional):</Label>
        <Input type="text" id="gasolineComment" value={comment} onChange={handleGasolineCommentChange} />
      </FormGroup>
      <Button type="submit">Submit Gasoline Info</Button>
    </Form>
  );
}

export default GasolineForm;
