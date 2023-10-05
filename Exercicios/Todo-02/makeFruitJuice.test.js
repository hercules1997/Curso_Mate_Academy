describe("", () => {
  let makeFruitJuice;

  beforeEach(() => {
    makeFruitJuice = require("./makeFruitJuice").makeFruitJuice;
  });

  it(`The 'apples' variable should be declared`, () => {
    const result = makeFruitJuice();

    expect(result.apples).toBeDefined();
  });

  it(`The 'apples' variable should equal 4`, () => {
    const result = makeFruitJuice();

    expect(result.apples).toBe(4);
  });

  it(`The 'pears' variable should be declared`, () => {
    const result = makeFruitJuice();

    expect(result.pears).toBeDefined();
  });

  it(`The 'pears' variable should equal 3`, () => {
    const result = makeFruitJuice();

    expect(result.pears).toBe(3);
  });

  it(`The 'fruits' variable should be declared`, () => {
    const result = makeFruitJuice();

    expect(result.fruits).toBeDefined();
  });

  it(`The 'fruits' variable should equal 7`, () => {
    const result = makeFruitJuice();

    expect(result.fruits).toBe(7);
  });
});
