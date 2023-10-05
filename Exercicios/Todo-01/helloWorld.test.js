describe(`console.log`, () => {
  let helloWorld;
  let passedMessage;
  const logger = console.log;
  const argCapturer = (...args) => {
    passedMessage = args[0];
    logger(...args);
  };

  before(() => {
    helloWorld = require("./helloWorld").helloWorld;
  });

  it(`should be called with a variable`, () => {
    console.log = argCapturer;
    helloWorld();
    expect(passedMessage).toBe("Hello, world!");
  });

  it(`should not be called with a string instead variable`, () => {
    helloWorld();

    const regex = /console.log\(\s*['"`]Hello, world!['"`]\s*\)/;

    expect(regex.test(helloWorld.toString())).toBe(false);
  });
});
