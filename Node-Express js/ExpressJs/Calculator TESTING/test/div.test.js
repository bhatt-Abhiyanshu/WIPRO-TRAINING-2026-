const { expect } = require("chai");
const { divide } = require("../calculator");

describe("Division", () => {
  it("divides two numbers", () => {
    expect(divide(20, 4)).to.equal(5);
  });

});
