import React, { useState } from 'react';
// import ElectricCalc from '../ElectricCalc';
import ElectricForm from '../ElectricForm';
import { useMutation } from '@apollo/client';
import { ADD_ELECTRIC_USE } from '../../utils/mutations';
import Auth from '../../utils/auth'

const ElectricCalculation = () => {
    const [electricCompany, setElectricCompany] = useState('');
    const [kwh, setKwh] = useState('');
    const [billDate, setBillDate] = useState('');
    const [addElectricUse, { error }] = useMutation(ADD_ELECTRIC_USE)

    const handleElectricCompanyChange = (event) => {
        setElectricCompany(event.target.value);
    }

    const handleKwhChange = (event) => {
        setKwh(event.target.value);
    }

    const handleElectricBillDateChange = (event) => {
        setBillDate(event.target.value);
    }
    const userId = Auth.getProfile().authenticatedPerson._id
    console.log(userId)

    const handleElectricFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addElectricUse({
                variables: {
                    kwh,
                    billDate,
                    // carbonOutput,
                    userId: Auth.getProfile().authenticatedPerson._id
                }    
            })
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <h1>Electricity Use</h1>
            <ElectricForm
                electricCompany={electricCompany}
                kwh={kwh}
                billDate={billDate}
                handleElectricCompanyChange={handleElectricCompanyChange}
                handleKwhChange={handleKwhChange}
                handleElectricBillDateChange={handleElectricBillDateChange}
                handleElectricFormSubmit={handleElectricFormSubmit}
            />
            <h2>Electricity Footprint</h2>
            {/* <ElectricCalc
                electricCompany={electricCompany}
                kwh={kwh}
                electricBillDate={electricBillDate}
            /> */}
        </div>
    );
};



export default ElectricCalculation;
