// ideally we want to implement a heap here. There is no built-in
// data structure to support a solution like that

function kthSmallest(matrix: number[][], k: number): number {
  return matrix.flat().sort((a, b) => a - b)[k - 1]
}

export { kthSmallest }
