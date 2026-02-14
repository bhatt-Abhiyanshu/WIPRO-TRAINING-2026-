function calculateGrossSalary(basicPay, bonus) {
  return basicPay + bonus;
}

function calculateTax(grossSalary, taxPercent) {
  return (grossSalary * taxPercent) / 100;
}

function calculateNetSalary(basicPay, bonus, taxPercent) {
  const grossSalary = calculateGrossSalary(basicPay, bonus);
  const tax = calculateTax(grossSalary, taxPercent);
  return grossSalary - tax;
}

module.exports = {
  calculateGrossSalary,
  calculateTax,
  calculateNetSalary
};
