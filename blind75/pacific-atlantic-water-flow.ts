const directions = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
]
/**
 * There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean.
 * The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
 * The island is partitioned into a grid of square cells.
 * You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
 * The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west
 * if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.
 *
 * Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.
 */
function pacificAtlantic(heights: number[][]): number[][] {
  const result: number[][] = []

  const pacificQueue: number[][] = []
  const atlanticQueue: number[][] = []

  const rows = heights.length
  const columns = heights[0].length

  const pacificVisited: boolean[][] = generateBooleanMatrix(
    rows,
    columns,
  )
  const atlanticVisited: boolean[][] = generateBooleanMatrix(
    rows,
    columns,
  )

  for (let i = 0; i < rows; i++) {
    pacificQueue.push([i, 0])
    atlanticQueue.push([i, columns - 1])

    pacificVisited[i][0] = true
    atlanticVisited[i][columns - 1] = true
  }

  for (let i = 0; i < columns; i++) {
    pacificQueue.push([0, i])
    atlanticQueue.push([rows - 1, i])

    pacificVisited[0][i] = true
    atlanticVisited[rows - 1][i] = true
  }

  bfs(heights, pacificQueue, pacificVisited)
  bfs(heights, atlanticQueue, atlanticVisited)

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (pacificVisited[i][j] && atlanticVisited[i][j]) {
        result.push([i, j])
      }
    }
  }

  return result
}

function bfs(
  heights: number[][],
  queue: number[][],
  visited: boolean[][],
) {
  const rows = heights.length
  const columns = heights[0].length

  while (queue.length > 0) {
    const front = queue.shift() ?? [-1, -1]

    for (const direction of directions) {
      const dx = front[0] + direction[0]
      const dy = front[1] + direction[1]

      if (
        dx < 0 ||
        dx > rows - 1 ||
        dy < 0 ||
        dy > columns - 1 ||
        visited[dx][dy] ||
        heights[dx][dy] < heights[front[0]][front[1]]
      ) {
        continue
      }

      visited[dx][dy] = true
      queue.push([dx, dy])
    }
  }
}

function generateBooleanMatrix(
  rows: number,
  columns: number,
): boolean[][] {
  const matrix: boolean[][] = new Array(rows)
  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(columns).fill(false)
  }

  return matrix
}

export { pacificAtlantic }
