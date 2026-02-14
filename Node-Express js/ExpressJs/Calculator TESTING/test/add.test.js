const { expect } = require("chai");
const { add } = require("../calculator");

describe("Addition", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).to.equal(5);
  });
});
