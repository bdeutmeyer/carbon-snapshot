import React from 'react';
// import ElectricForm from '../components/ElectricForm';
import GasForm from '../components/GasForm';
import Calculation from './Calculation'
const Utilities = () => {
  return (
    <main className="utilities-page">
      <h1>Utilities Information</h1>
      {/* <ElectricForm /> */}
      <Calculation />
      <GasForm />

      {/* You can add more forms or components as needed */}
    </main>
  );
};

export default Utilities;




