// src/utils/paymentSchedule.js
export const generatePaymentSchedule = (principal, annualRate, term) => {
    const monthlyRate = annualRate / 100 / 12;
    const months = term * 12;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  
    const schedule = [];
    let remainingPrincipal = principal;
    let currentDate = new Date();
  
    for (let i = 0; i < months; i++) {
      const interest = remainingPrincipal * monthlyRate;
      const principalPayment = emi - interest;
      remainingPrincipal -= principalPayment;
  
      schedule.push({
        date: new Date(currentDate.setMonth(currentDate.getMonth() + 1)),
        amount: emi,
        principalPayment,
        interest
      });
    }
  
    return schedule;
  };
  