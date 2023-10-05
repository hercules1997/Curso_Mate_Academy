describe("", () => {
  let singleLineComment;
  const singleLineCommentName = /\/\/ *?const name = 'Bob';/;
  const singleLineCommentAge = /\/\/ *?const age = 37;/;

  before(() => {
    singleLineComment = require("./singleLineComment").singleLineComment;
  });

  it(`Variable 'name' should be commented with single-line comment`, () => {
    expect(singleLineCommentName.test(singleLineComment.toString())).toBe(true);
  });

  it(`Variable 'age' should be commented with single-line comment`, () => {
    expect(singleLineCommentAge.test(singleLineComment.toString())).toBe(true);
  });
});
