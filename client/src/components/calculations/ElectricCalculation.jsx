import React, { useState, useEffect } from 'react';
import ElectricReadout from '../readouts/ElectricReadout';
import ElectricForm from '../forms/ElectricForm';
import { enableExperimentalFragmentVariables, useMutation, useQuery } from '@apollo/client';
import { ELEC_SOURCES } from '../../utils/queries';
import { ADD_ELECTRIC_USE } from '../../utils/mutations';
import Auth from '../../utils/auth'
import '../../App.css'

const ElectricCalculation = () => {
  const [electricCompany, setElectricCompany] = useState('');
  const [kwh, setKwh] = useState(0);
  const [billDate, setBillDate] = useState('');
  const [comment, setComment] = useState('');
  const [sourceArray, setSourceArray] = useState([]);
  const [addElectricUse, { error }] = useMutation(ADD_ELECTRIC_USE);

  const { loading, err, data } = useQuery(ELEC_SOURCES, {
    variables: { companyName: electricCompany }
  });

  useEffect(() => {
    if (data && data.elecSources) {
      const source = data.elecSources.sourceBreakdown;
      const newSourceArray = [
        { 'Coal: ': source.coal },
        { 'Hydro: ': source.hydro },
        { 'Natural Gas: ': source.naturalGas },
        { 'Nuclear: ': source.nuclear },
        { 'Oil: ': source.oil },
        { 'Other (est): ': source.other },
        { 'Renewables: ': source.renewables },
        { 'Solar: ': source.solar },
        { 'Wind: ': source.wind }
      ].filter(obj => Object.values(obj)[0] !== null && Object.values(obj)[0] !== undefined);

      setSourceArray(newSourceArray);
    }
  }, [data, electricCompany]);

  const calcsIntoValues = (key, value) => {
    switch (key) {
      case 'Coal: ':
        return (value * 2.3 * kwh).toFixed(2);
      case 'Hydro: ':
        return (value * 0.0529 * kwh).toFixed(2);
      case 'Natural Gas: ':
        return (value * 0.97 * kwh).toFixed(2);
      case 'Nuclear: ':
        return (value * 0.0717 * kwh).toFixed(2);
      case 'Oil: ':
        return (value * 0.54 * kwh).toFixed(2);
      case 'Other (est): ':
        return (value * .517 * kwh).toFixed(2);
      case 'Renewables: ':
        return (value * 0.09 * kwh).toFixed(2);
      case 'Solar: ':
        return (value * 0.0904 * kwh).toFixed(2);
      case 'Wind: ':
        return (value * 0.0243 * kwh).toFixed(2);
    }
  }

  let calcArray = [];
  if (sourceArray.length > 0 && kwh !== 0) {
    calcArray = sourceArray.map((obj) => {
      const key = Object.keys(obj)[0];
      const value = Object.values(obj)[0];
      const sourceFootprint = calcsIntoValues(key, value);

      return { [key]: sourceFootprint }
    })
  }

  let carbonSum = 0;
  if (calcArray.length > 0) {
    carbonSum = calcArray.reduce((acc, obj) => {
      const value = parseFloat(Object.values(obj)[0]);
      return isNaN(value) ? acc : acc + value;
    }, 0);
  }
  const carbonSumToInt = carbonSum.toFixed(0)

  // Event handlers for form changes and submission
  const handleElectricCompanyChange = (event) => {
    setElectricCompany(event.target.value);
  }
  const handleKwhChange = (event) => {
    setKwh(+event.target.value);
  }
  const handleElectricBillDateChange = (event) => {
    setBillDate(event.target.value);
  }
  const handleElecCommentChange = (event) => {
    setComment(event.target.value)
  }
  const handleElectricFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addElectricUse({
        variables: {
          electricCompany,
          kwh,
          billDate,
          carbonOutput: +carbonSumToInt,
          comment,
          userId: Auth.getProfile().authenticatedPerson._id
        }
      })
      setElectricCompany('');
      setKwh(0);
      setBillDate('');
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className='electricity'>
      <div className='electricity-input'>
        <h1 id='elecFont'>Electricity Use</h1>
        <ElectricForm
          electricCompany={electricCompany}
          kwh={kwh}
          billDate={billDate}
          comment={comment}
          handleElectricCompanyChange={handleElectricCompanyChange}
          handleKwhChange={handleKwhChange}
          handleElectricBillDateChange={handleElectricBillDateChange}
          handleElecCommentChange={handleElecCommentChange}
          handleElectricFormSubmit={handleElectricFormSubmit}
        />
      </div>
      <div className='electricity-footprint'>
        <h2 id='elecFont'>Electricity Footprint</h2>
        <ElectricReadout
          electricCompany={electricCompany}
          kwh={kwh}
          billDate={billDate}
          calcArray={calcArray}
          carbonSum={carbonSum}
        />
      </div>
    </div >
  );
};



export default ElectricCalculation;
