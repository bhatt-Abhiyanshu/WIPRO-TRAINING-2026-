const { expect } = require("chai");
const { calculateGrossSalary } = require("../salCalculator");

describe("Basic Pay Calculation", () => {
  it("returns basic pay when bonus is zero", () => {
    expect(calculateGrossSalary(30000, 0)).to.equal(30000);
  });
});
