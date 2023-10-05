const regex = /['"`]Concatenation['"`]/;
const interpolationRegex = /`.*\${\w+}.*`/;

describe(``, () => {
  let stringConcat;

  before(() => {
    stringConcat = require("./stringConcat").stringConcat;
  });

  it(`Variable 'resultString' should be defined`, () => {
    expect(stringConcat()).toHaveProperty("resultString");
  });

  it(`Variable 'resultString' should have value 'Concatenation'.`, () => {
    expect(stringConcat().resultString).toBe("Concatenation");
  });

  it(`Variable 'resultString' should be assigned value using concatenation
      DO NOT write 'resultString = "Concatenation"'`, () => {
    expect(regex.test(stringConcat.toString())).toBe(false);
  });

  it(`Variable 'resultString' should be assigned value using concatenation
      DO NOT use interpolation'`, () => {
    expect(interpolationRegex.test(stringConcat.toString())).toBe(false);
  });
});
