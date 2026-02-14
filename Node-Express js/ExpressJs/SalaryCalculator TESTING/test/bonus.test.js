const { expect } = require("chai");
const { calculateGrossSalary } = require("../salCalculator");

describe("Bonus Calculation", () => {
  it("adds bonus to basic pay", () => {
    expect(calculateGrossSalary(30000, 5000)).to.equal(35000);
  });
});
