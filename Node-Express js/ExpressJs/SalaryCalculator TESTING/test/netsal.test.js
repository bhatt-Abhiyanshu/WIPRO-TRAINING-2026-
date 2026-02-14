const { expect } = require("chai");
const { calculateNetSalary } = require("../salCalculator");

describe("Net Salary Calculation", () => {
  it("calculates net salary after tax deduction", () => {
    expect(calculateNetSalary(30000, 5000, 10)).to.equal(31500);
  });

  it("calculates net salary with no tax", () => {
    expect(calculateNetSalary(30000, 5000, 0)).to.equal(35000);
  });
});
