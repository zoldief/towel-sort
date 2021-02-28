

module.exports = function towelSort(matrix) {
  if (arguments.length === 0 || matrix.length === 0) {
    return []
  } else {
    let result = [];
    let isTrue = true;

    for (let i = 0; i < matrix.length; i++) {
      if (isTrue) {
        for (let j = 0; j < matrix[i].length; j++) {
          result.push(matrix[i][j])
        }
        isTrue = false;
      } else {
        for (let j = matrix[i].length - 1; j > -1; j--) {
          result.push(matrix[i][j])
        }
        isTrue = true;
      }
    }

    return result
  }
}
