const solution = (input) => {
  const inputArr = input.split("");
  let result = true;

  for (const [index, value] of inputArr.entries()) {
    if (value === ")") {
      result = false;
      break;
    }

    if (value === "") {
      continue;
    }

    const nextBackBracketIndex = inputArr
      .slice(index)
      .findIndex((val) => val === ")");

    if (nextBackBracketIndex === -1) {
      result = false;
      break;
    }

    inputArr[index + nextBackBracketIndex] = "";
    continue;
  }

  return result;
};

const solutionWithReduce = (input) => {
  const inputArr = input.split("");

  const nextBackBracketIndexArr = [];

  const result = inputArr.reduce((prev, value, index) => {
    if (prev === false) {
      return false;
    }

    if (value === ")") {
      if (nextBackBracketIndexArr.includes(index)) {
        return prev;
      }
      return false;
    }

    const backBracketIndex = inputArr.findIndex(
      (val, valIndex) =>
        val === ")" && !nextBackBracketIndexArr.includes(valIndex)
    );

    if (backBracketIndex === -1) {
      return false;
    }

    nextBackBracketIndexArr.push(backBracketIndex);

    return prev;
  }, true);

  return result;
};

module.exports = solution;
