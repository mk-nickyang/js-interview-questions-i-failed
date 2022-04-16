const solution = require("./index");

describe("binary-tree-to-array", () => {
  test("example 1", () => {
    const input = {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: { value: 3, left: null, right: null },
      },
      right: {
        value: 4,
        left: { value: 5, left: null, right: null },
        right: null,
      },
    };
    expect(solution(input)).toEqual([1, 2, 4, 3, 5]);
  });

  test("example 2", () => {
    const input2 = {
      value: 6,
      left: {
        value: 3,
        left: { value: 1, left: null, right: null },
        right: { value: 5, left: null, right: null },
      },
      right: {
        value: 9,
        left: { value: 7, left: null, right: null },
        right: { value: 11, left: null, right: null },
      },
    };
    expect(solution(input2)).toEqual([6, 3, 9, 1, 5, 7, 11]);
  });
});
