import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../../App.css'

const NaturalGasForm = ({ therms, billDate, comment, handleThermChange, handleGasBillDateChange, handleGasCommentChange, handleGasFormSubmit }) => {

  return (
    <Form onSubmit={handleGasFormSubmit}>
      <FormGroup>
        <Label for="gasBillDate">Please enter your gas bill date:</Label>
        <Input type="date" id="gasBillDate" value={billDate} onChange={handleGasBillDateChange} />
      </FormGroup>
      <FormGroup>
        <Label className='gasFormTxt' for="therms">Please enter the number of Therms billed:</Label>
        <Input type="number" id="therms" value={therms} onChange={handleThermChange} />
      </FormGroup>
      <FormGroup>
        <Label for="elecComment">Comments (optional):</Label>
        <Input type="text" id="elecComment" value={comment} onChange={handleGasCommentChange} />
      </FormGroup>
      <Button className='gasFormTxt' type="submit">Submit Gas Info</Button>
    </Form>
  );
}

export default NaturalGasForm;


