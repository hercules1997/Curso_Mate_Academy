describe(``, () => {
  let numbersOperators;

  before(() => {
    numbersOperators = require("./numbersOperators").numbersOperators;
  });

  it(`Variable 'a' should be defined`, () => {
    expect(numbersOperators()).toHaveProperty("a");
  });

  it(`Variable 'a' should equal 10`, () => {
    expect(numbersOperators().a).toBe(10);
  });

  it(`Variable 'b' should be defined`, () => {
    expect(numbersOperators()).toHaveProperty("b");
  });

  it(`Variable 'b' should equal 2`, () => {
    expect(numbersOperators().b).toBe(2);
  });

  it(`Variable 'addition' should be defined`, () => {
    expect(numbersOperators()).toHaveProperty("addition");
  });

  it(`Variable 'subtraction' should be defined`, () => {
    expect(numbersOperators()).toHaveProperty("subtraction");
  });

  it(`Variable 'division' should be defined`, () => {
    expect(numbersOperators()).toHaveProperty("division");
  });

  it(`Variable 'multiplication' should be defined`, () => {
    expect(numbersOperators()).toHaveProperty("multiplication");
  });

  it(`Variable 'addition' should contain the result of adding 'a' and 'b'`, () => {
    const regex = /a\s*\+\s*b/;
    expect(numbersOperators.toString()).toMatch(regex);
  });

  it(`Variable 'addition' should equal 12`, () => {
    expect(numbersOperators().addition).toBe(12);
  });

  it(`Variable 'subtraction' should contain the result of subtracting 'b' from 'a'`, () => {
    const regex = /a\s*-\s*b/;
    expect(numbersOperators.toString()).toMatch(regex);
  });

  it(`Variable 'subtraction' should equal 8`, () => {
    expect(numbersOperators().subtraction).toBe(8);
  });

  it(`Variable 'division' should contain the result of dividing 'a' by 'b'`, () => {
    const regex = /a\s*\/\s*b/;
    expect(numbersOperators.toString()).toMatch(regex);
  });

  it(`Variable 'division' should equal 5`, () => {
    expect(numbersOperators().division).toBe(5);
  });

  it(`Variable 'multiplication' should contain the result of multiplicating 'a' and 'b'`, () => {
    const regex = /a\s*\*\s*b/;
    expect(numbersOperators.toString()).toMatch(regex);
  });

  it(`Variable 'multiplication' should equal 20`, () => {
    expect(numbersOperators().multiplication).toBe(20);
  });
});
