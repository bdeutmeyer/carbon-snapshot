import '../App.css';
import React, { useState } from 'react';

const ElectricCompanyForm = () => {
  const [electricCompany, setElectricCompany] = useState('Mid American');

  const handleElectricCompanyChange = (event) => {
    setElectricCompany(event.target.value);
  }

  const handleElectricCompanySubmit = (event) => {
    event.preventDefault();
    // You can do something with the selected electric company if needed
  }

  return (
    <form onSubmit={handleElectricCompanySubmit}>
      <label>
        Please choose your electric company:
        <select value={electricCompany} onChange={handleElectricCompanyChange}>
          <option value="Alliant Energy">Alliant Energy</option>
          <option value="Ameren">Ameren</option>
          <option value="Mid American">Mid American</option>
          <option value="Commonwealth Edison">Commonwealth Edison</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

const KWHInputForm = () => {
  const [kwh, setKwh] = useState('');

  const handleKwhChange = (event) => {
    setKwh(event.target.value);
  }

  const handleKwhSubmit = (event) => {
    event.preventDefault();
    // You can do something with the entered KWH value if needed
  }

  return (
    <form onSubmit={handleKwhSubmit}>
      <label>
        Please enter your KWH:
        <input type="number" value={kwh} onChange={handleKwhChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

const ThermInputForm = () => {
    const [therm, setTherm] = useState('');
  
    const handleThermChange = (event) => {
      setTherm(event.target.value);
    }
  
    const handleThermSubmit = (event) => {
      event.preventDefault();
      // You can do something with the entered Therm value if needed
    }
  
    return (
      <form onSubmit={handleThermSubmit}>
        <label>
          Please enter your number of Therms:
          <input type="number" value={therm} onChange={handleThermChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
    }
    const MonthYearInputForm = () => {
        const [month, setMonth] = useState('');
        const [year, setYear] = useState('');
      
        const handleMonthChange = (event) => {
          setMonth(event.target.value);
        }
      
        const handleYearChange = (event) => {
          setYear(event.target.value);
        }
      
        const handleMonthYearSubmit = (event) => {
          event.preventDefault();
          // You can do something with the entered month and year if needed
        }
      
        return (
          <form onSubmit={handleMonthYearSubmit}>
            <label>
              Please enter your electric bill date
              <input type="date" onChange={handleMonthChange} />
            </label>
            <label>
              Please enter the 2 gas bill date:
              <input type="date"  onChange={handleYearChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }

  

const Utilities = () => {
  return (
    <main className="utilities-page">
      <ElectricCompanyForm />
      <KWHInputForm />
      <ThermInputForm />
      <MonthYearInputForm />
    </main>
  );
};

export default Utilities;
