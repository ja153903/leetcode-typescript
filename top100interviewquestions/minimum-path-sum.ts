function minPathSum(grid: number[][]): number {
  const dp: number[][] = new Array(grid.length)
  for (let i = 0; i < grid.length; i++) {
    dp[i] = new Array(grid[i].length).fill(0)
  }

  dp[0][0] = grid[0][0]

  for (let i = 1; i < grid.length; i++) {
    dp[i][0] += dp[i - 1][0] + grid[i][0]
  }

  for (let i = 1; i < grid[0].length; i++) {
    dp[0][i] += dp[0][i - 1] + grid[0][i]
  }

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[i].length; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }

  return dp[grid.length - 1][grid[0].length - 1]
}

console.log(minPathSum([[1, 2, 3], [4, 5, 6]]))

export { minPathSum }