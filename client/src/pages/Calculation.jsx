// CalculationPage.jsx
import React, {useState} from 'react';
import ElectricCalc from '../components/ElectricCalc';
import ElectricForm from '../components/ElectricForm';
import GasCalc from '../components/GasCalc';
import GasForm from '../components/GasForm';
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

  }

  const [therm, setTherm] = useState('');
  const [gasBillDate, setGasBillDate] = useState('');



  const handleThermChange = (event) => {
    setTherm(event.target.value);
  }

  const handleGasBillDateChange = (event) => {
    setGasBillDate(event.target.value);
  }

  const handleGasFormSubmit = (event) => {
    event.preventDefault();

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
      <GasCalc 
        therm = {therm}
        gasBillDate = {gasBillDate}
      />
      <GasForm 
      therm = {therm}
      gasBillDate = {gasBillDate}
      handleThermChange = {handleThermChange}
      handleGasBillDateChange = {handleGasBillDateChange}
      handleGasFormSubmit = {handleGasFormSubmit}
      />

    </div>
  );
};



export default CalculationPage;
