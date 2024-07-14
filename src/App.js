import React, { useState } from 'react';
import InputForm from './components/InputForm';
import Result from './components/Result';
import './App.css';

const App = () => {
  const [emi, setEmi] = useState(null);
  const [totalRepayment, setTotalRepayment] = useState(null);

  const calculateEMI = (principal, annualRate, term) => {
    const monthlyRate = annualRate / 100 / 12;
    const months = term * 12;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalRepayment = emi * months;

    setEmi(emi);
    setTotalRepayment(totalRepayment);
  };

  const clearResults = () => {
    setEmi(null);
    setTotalRepayment(null);
  };

  return (
    <div className="App">
      <h1>Loan EMI Calculator</h1>
      <InputForm calculateEMI={calculateEMI} clearResults={clearResults} />
      {emi !== null && totalRepayment !== null && (
        <Result emi={emi} totalRepayment={totalRepayment} />
      )}
    </div>
  );
};

export default App;
