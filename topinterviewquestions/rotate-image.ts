/**
 Do not return anything, modify matrix in-place instead.
 To rotate the matrix, we should reverse each row
 and do a transpose
 */
function rotate(matrix: number[][]): void {
  // reverse the rows
  for (let i = 0, j = matrix.length - 1; i < j; i++, j--) {
    ;[matrix[i], matrix[j]] = [matrix[j], matrix[i]]
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      ;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
}

export { rotate }
