const { expect } = require("chai");
const { calculateTax } = require("../salCalculator");

describe("Tax Deduction", () => {
  it("calculates tax based on percentage", () => {
    expect(calculateTax(40000, 10)).to.equal(4000);
  });

  it("returns zero tax for zero percent", () => {
    expect(calculateTax(40000, 0)).to.equal(0);
  });
});
