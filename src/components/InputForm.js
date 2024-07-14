// src/components/InputForm.js
import React, { useState } from 'react';
import { generatePaymentSchedule } from '../utils/paymentSchedule';
import { saveAsExcel, saveAsPDF } from '../utils/fileGenerator';

const InputForm = ({ calculateEMI, clearResults }) => {
  const [principal, setPrincipal] = useState('');
  const [annualRate, setAnnualRate] = useState('');
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emi = calculateEMI(parseFloat(principal), parseFloat(annualRate), parseFloat(term));
    const schedule = generatePaymentSchedule(parseFloat(principal), parseFloat(annualRate), parseFloat(term));
    setSchedule(schedule);
  };

  const handleClear = () => {
    setPrincipal('');
    setAnnualRate('');
    setTerm('');
    clearResults();
  };

  const [schedule, setSchedule] = useState([]);

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
      <div className="button-container">
        <button type="submit">Calculate EMI</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </div>
      {schedule.length > 0 && (
        <div>
          <h3>Payment Schedule Preview</h3>
          <ul>
            {schedule.slice(0, 5).map((payment, index) => (
              <li key={index}>
                {payment.date.toDateString()}: ${payment.amount.toFixed(2)}
              </li>
            ))}
          </ul>
          <button onClick={() => saveAsExcel(schedule)}>Download as Excel</button>
          <button onClick={() => saveAsPDF(schedule)}>Download as PDF</button>
        </div>
      )}
    </form>
  );
};

export default InputForm;
