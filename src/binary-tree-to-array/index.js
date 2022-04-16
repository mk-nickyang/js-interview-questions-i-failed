// This is the only solution i can think of so far
const solution = (binaryTreeObj) => {
  const result = [];

  const getBinaryTreeValue = (obj, level = 0) => {
    result.push({ value: obj.value, level });
    if (obj.left) {
      getBinaryTreeValue(obj.left, level + 1);
    }
    if (obj.right) {
      getBinaryTreeValue(obj.right, level + 1);
    }
  };

  getBinaryTreeValue(binaryTreeObj);

  result.sort((a, b) => a.level - b.level);

  return result.map((obj) => obj.value);
};

module.exports = solution;
