describe("", () => {
  let assignValues;

  before(() => {
    assignValues = require("./assignValues").assignValues;
  });

  it(`Variable 'brand' should be defined`, () => {
    expect(assignValues()).toHaveProperty("brand");
  });

  it(`Variable 'brand' should have value 'Toyota'`, () => {
    expect(assignValues().brand).toBe("Toyota");
  });

  it(`Variable 'price' should be defined`, () => {
    expect(assignValues()).toHaveProperty("price");
  });

  it(`Variable 'price' should have value '22500'`, () => {
    expect(assignValues().price).toBe(22500);
  });

  it(`Variable 'isSedan' should be defined`, () => {
    expect(assignValues()).toHaveProperty("isSedan");
  });

  it(`Variable 'isSedan' should have value 'true'`, () => {
    expect(assignValues().isSedan).toBe(true);
  });

  it(`Variable 'wings' should be defined`, () => {
    expect(assignValues()).toHaveProperty("wings");
  });

  it(`Variable 'wings' should have value 'undefined'`, () => {
    expect(assignValues().wings).toBeUndefined();
  });

  it(`Variable 'owner' should be defined`, () => {
    expect(assignValues()).toHaveProperty("owner");
  });

  it(`Variable 'owner' should have value 'null'`, () => {
    expect(assignValues().owner).toBeNull();
  });
});
