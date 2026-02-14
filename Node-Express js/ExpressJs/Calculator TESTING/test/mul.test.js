const { expect } = require("chai");
const { multiply } = require("../calculator");

describe("Multiplication", () => {
  it("multiplies two numbers", () => {
    expect(multiply(4, 5)).to.equal(20);
  });
});
