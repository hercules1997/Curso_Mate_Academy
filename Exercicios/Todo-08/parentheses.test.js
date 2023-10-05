describe("", () => {
  let parentheses;
  const regex = /10.*\*.*7.*\+.*8.*-.*11.*\/.*4/;

  before(() => {
    parentheses = require("./parentheses").parentheses;
  });

  it("Do not change numbers. Only add parentheses to the expression.", () => {
    expect(regex.test(parentheses.toString())).toBe(true);
  });

  it(`Variable 'expression' should be of type 'number'`, () => {
    expect(typeof parentheses()).toBe("number");
  });

  it(`expected output: expression === 10`, () => {
    expect(parentheses()).toBe(10);
  });
});
