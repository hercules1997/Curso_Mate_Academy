describe("", () => {
  let uncommentCode;

  before(() => {
    uncommentCode = require("./uncommentCode").uncommentCode;
  });

  it(`Variable 'name' should be uncommented`, () => {
    const result = uncommentCode();

    expect(result.name).toBeDefined();
  });

  it(`Variable 'name' shouldn't be modified`, () => {
    const result = uncommentCode();

    expect(result.name).toBe("Alice");
  });

  it(`Variable 'age' should be uncommented`, () => {
    const result = uncommentCode();

    expect(result.age).toBeDefined();
  });

  it(`Variable 'age' shouldn't be modified`, () => {
    const result = uncommentCode();

    expect(result.age).toBe(28);
  });
});
