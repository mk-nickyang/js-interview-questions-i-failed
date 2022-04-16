const solution = require("./index");

describe("parentheses-check", () => {
  test("example 1: ()", () => {
    const input = "()";
    expect(solution(input)).toBe(true);
  });

  test("example 2: ()()", () => {
    const input = "()()";
    expect(solution(input)).toBe(true);
  });

  test("example 3: (())", () => {
    const input = "(())";
    expect(solution(input)).toBe(true);
  });

  test("example 4: ()(())", () => {
    const input = "()(())";
    expect(solution(input)).toBe(true);
  });

  test("example 5: )(", () => {
    const input = ")(";
    expect(solution(input)).toBe(false);
  });

  test("example 6: (())(", () => {
    const input = "(())(";
    expect(solution(input)).toBe(false);
  });

  test("example 7: (", () => {
    const input = "(";
    expect(solution(input)).toBe(false);
  });
});
