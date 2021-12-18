function numIslands(grid: string[][]): number {
  let result = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        dfs(grid, i, j)
        result++
      }
    }
  }

  return result
}

function dfs(grid: string[][], x: number, y: number) {
  if (
    x < 0 ||
    y < 0 ||
    x >= grid.length ||
    y >= grid[0].length ||
    grid[x][y] !== "1"
  ) {
    return
  }

  grid[x][y] = "2"

  dfs(grid, x + 1, y)
  dfs(grid, x - 1, y)
  dfs(grid, x, y + 1)
  dfs(grid, x, y - 1)
}

export { numIslands }
