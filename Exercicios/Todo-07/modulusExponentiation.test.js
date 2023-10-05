describe(``, () => {
  let modulusExponentiation;

  before(() => {
    modulusExponentiation =
      require("./modulusExponentiation").modulusExponentiation;
  });

  it(`Variable 'a' should be defined`, () => {
    expect(modulusExponentiation()).toHaveProperty("a");
  });

  it(`Variable 'a' should equal 7`, () => {
    expect(modulusExponentiation().a).toBe(7);
  });

  it(`Variable 'b' should be defined`, () => {
    expect(modulusExponentiation()).toHaveProperty("b");
  });

  it(`Variable 'b' should equal 2`, () => {
    expect(modulusExponentiation().b).toBe(2);
  });

  it(`Variable 'exp' should be defined`, () => {
    expect(modulusExponentiation()).toHaveProperty("exp");
  });

  it(`Variable 'mod' should be defined`, () => {
    expect(modulusExponentiation()).toHaveProperty("mod");
  });

  it(`Variable 'exp' should contain the result 'a' raised to the power 'b'`, () => {
    const regex = /a\s*\*\*\s*b/;
    expect(modulusExponentiation.toString()).toMatch(regex);
  });

  it(`Variable 'exp' should equal 49`, () => {
    expect(modulusExponentiation().exp).toBe(49);
  });

  it(`Variable 'mod' should contain the result of calculating a remainder from dividing 'a' by 'b'`, () => {
    const regex = /a\s*%\s*b/;
    expect(modulusExponentiation.toString()).toMatch(regex);
  });

  it(`Variable 'mod' should equal 1`, () => {
    expect(modulusExponentiation().mod).toBe(1);
  });
});
