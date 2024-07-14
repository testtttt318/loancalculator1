// src/components/Result.js
import React from 'react';

const Result = ({ emi, totalRepayment, months }) => (
  <div className="result">
    <h2>Monthly EMI: ${emi.toFixed(2)}</h2>
    <h3>Total Repayment Amount: ${totalRepayment.toFixed(2)}</h3>
    <h3>Number of Months: {months}</h3>
  </div>
);

export default Result;
