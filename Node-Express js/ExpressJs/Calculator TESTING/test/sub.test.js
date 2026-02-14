const { expect } = require("chai");
const { subtract } = require("../calculator");

describe("Subtraction", () => {
  it("subtracts two numbers", () => {
    expect(subtract(10, 5)).to.equal(5);
  });
});