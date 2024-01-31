import React from 'react';
import formatDate from '../../utils/formatDate'
import { Table } from 'reactstrap'

const ElectricReadout = ({ electricCompany, kwh, billDate, carbonSum, calcArray }) => {

  const formattedDate = formatDate(billDate)

  return (
    <div>
      {/* <h2 id='natGasCSS'>Electric Calculation Results</h2> */}
      {/* <p id='natGasText'>Electric Company: {electricCompany}</p>
      <p id='natGasText'>kWh: {kwh ? kwh : ''}</p>
      <p id='natGasText'>Electric Bill Date: {billDate ? formattedDate : ''}</p> */}
      <h2 className='elecFont'>Electricity Footprint</h2>
      {electricCompany !== '' && kwh !== 0 && billDate !== ''? <Table bordered className='m-2 natGasText'>
      <thead>
          <tr>
            <th colSpan="2">Electricity Source Breakdown</th>
          </tr>
          <tr>
            <td colSpan="2">{kwh} kWh through {electricCompany} on {formattedDate}</td>
          </tr>
          <tr>
            <th>Source</th>
            <th>Carbon Output (pounds)</th>
          </tr>
        </thead>
        <tbody>
        {calcArray.map((obj, index) => {
          const key = Object.keys(obj)[0];
          const value = Object.values(obj)[0];

          return (
            <tr key={index}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          );
        })}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="2" className='font-weight-bold'>Total Carbon Footprint: {carbonSum ? `${carbonSum.toFixed(0)} pounds of CO₂` : ''}</th>
          </tr>
        </tfoot>
      </Table> : <h5>Please specify electric company, bill date, and billed kWh</h5>}
    </div>
  );
};

export default ElectricReadout;
