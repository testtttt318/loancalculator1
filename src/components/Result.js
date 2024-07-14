import React from 'react';

const Result = ({ emi, totalRepayment }) => (
  <div>
    <h2>Monthly EMI: ${emi.toFixed(2)}</h2>
    <h3>Total Repayment Amount: ${totalRepayment.toFixed(2)}</h3>
  </div>
);

export default Result;
