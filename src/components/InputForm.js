import React, { useState } from 'react';

const InputForm = ({ calculateEMI, clearResults }) => {
  const [principal, setPrincipal] = useState('');
  const [annualRate, setAnnualRate] = useState('');
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateEMI(parseFloat(principal), parseFloat(annualRate), parseFloat(term));
  };

  const handleClear = () => {
    setPrincipal('');
    setAnnualRate('');
    setTerm('');
    clearResults();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Loan Amount:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Annual Interest Rate (%):</label>
        <input
          type="number"
          value={annualRate}
          onChange={(e) => setAnnualRate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Term (years):</label>
        <input
          type="number"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </div>
      <button type="submit">Calculate EMI</button>
      <button type="button" onClick={handleClear} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>Clear</button>
    </form>
  );
};

export default InputForm;
