// CalculationPage.jsx
import React, {useState} from 'react';
import ElectricCalc from '../components/ElectricCalc';
import ElectricForm from '../components/ElectricForm';
// import GasCalc from './GasCalc';

const CalculationPage = () => {
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

    // Collect the electric form data
    const electricFormData = {
      electricCompany: electricCompany,
      kwh: kwh,
      electricBillDate: electricBillDate,
    };

    // Placeholder: Log the collected data
    console.log('Electric Form Data:', electricFormData);

   

    // // Optional: Reset form fields after submission
    // setElectricCompany('');
    // setKwh('');
    // setElectricBillDate('');
  }

  return (
    <div>
      <h1>Calculation Page</h1>
      <ElectricCalc 
        electricCompany = {electricCompany}
        kwh = {kwh}
        electricBillDate = {electricBillDate}
      />
      <ElectricForm 
      electricCompany = {electricCompany}
      kwh = {kwh}
      electricBillDate = {electricBillDate}
      handleElectricCompanyChange = {handleElectricCompanyChange}
      handleKwhChange = {handleKwhChange}
      handleElectricBillDateChange = {handleElectricBillDateChange}
      handleElectricFormSubmit = {handleElectricFormSubmit}
      />
      {/* <GasCalc /> */}
      {/* Add other calculation components as needed */}
    </div>
  );
};

export default CalculationPage;
