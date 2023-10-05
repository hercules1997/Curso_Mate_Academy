const regex = /['"`]Hello, world!['"`]/;
const concatRegex = /(\w+\s*\+\s*', '\s*\+\s*\w+\s*\+\s*'!')|(\.concat)/;

describe(``, () => {
  let stringInterpolation;

  before(() => {
    stringInterpolation = require("./stringInterpolation").stringInterpolation;
  });

  it(`Variable 'resultString' should be assigned value using interpolation
      DO NOT write 'resultString = "Hello, world!"'`, () => {
    expect(regex.test(stringInterpolation.toString())).toBe(false);
  });

  it(`Variable 'resultString' should be assigned value using interpolation
      DO NOT write 'resultString = a + b'`, () => {
    expect(concatRegex.test(stringInterpolation.toString())).toBe(false);
  });

  it(`Variable 'resultString' should be defined`, () => {
    expect(stringInterpolation()).toHaveProperty("resultString");
  });

  it(`Variable 'resultString' should have a value 'Hello, world!'`, () => {
    expect(stringInterpolation().resultString).toBe("Hello, world!");
  });
});
