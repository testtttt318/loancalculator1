// src/utils/fileGenerator.js
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const saveAsExcel = (schedule) => {
  const ws = XLSX.utils.json_to_sheet(schedule.map(({ date, amount, principalPayment, interest }) => ({
    Date: date.toDateString(),
    Amount: amount.toFixed(2),
    Principal: principalPayment.toFixed(2),
    Interest: interest.toFixed(2)
  })));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Schedule');
  XLSX.writeFile(wb, 'PaymentSchedule.xlsx');
};

export const saveAsPDF = (schedule) => {
  const doc = new jsPDF();
  const tableColumn = ["Date", "Amount", "Principal", "Interest"];
  const tableRows = [];

  schedule.forEach(payment => {
    const paymentData = [
      payment.date.toDateString(),
      payment.amount.toFixed(2),
      payment.principalPayment.toFixed(2),
      payment.interest.toFixed(2),
    ];
    tableRows.push(paymentData);
  });

  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  doc.text("Payment Schedule", 14, 15);
  doc.save('PaymentSchedule.pdf');
};
