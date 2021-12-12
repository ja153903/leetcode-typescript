const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [-1, -1],
  [-1, 1],
  [1, -1],
]

function gameOfLife(board: number[][]): void {
  const copy = createCopy(board)

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const numNeighbors = countNeighbors(board, i, j)

      if (board[i][j] === 1) {
        if (numNeighbors < 2 || numNeighbors > 3) {
          copy[i][j] = 0
        }
      } else {
        if (numNeighbors === 3) {
          copy[i][j] = 1
        }
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = copy[i][j]
    }
  }
}

function countNeighbors(
  board: number[][],
  i: number,
  j: number,
): number {
  let numNeighbors = 0

  for (const [dx, dy] of directions) {
    const cx = i + dx
    const cy = j + dy

    if (
      cx < 0 ||
      cx >= board.length ||
      cy < 0 ||
      cy >= board[0].length ||
      board[cx][cy] === 0
    ) {
      continue
    }

    numNeighbors += 1
  }

  return numNeighbors
}

function createCopy(matrix: number[][]): number[][] {
  const result: number[][] = []

  for (let i = 0; i < matrix.length; i++) {
    const columns: number[] = []
    for (let j = 0; j < matrix[i].length; j++) {
      columns.push(matrix[i][j])
    }

    result.push(columns)
  }

  return result
}

const state = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
]

console.log(gameOfLife(state))

console.log(state)

export { gameOfLife }
