// what is the base case here? to get to dp[0][0] there is only 1 unique path
// this means that our base case should be 1
function uniquePaths(m: number, n: number): number {
  // we can let dp[i][j] denote the number of unique paths up to that combination of i and j
  // given we can only move in horizontal and vertical directions, we know that
  // dp[i][j] depends on the elements above and to its left
  const dp: Array<Array<number>> = [];
  for (let i = 0; i < m; i++) {
    dp.push(new Array(n).fill(1));
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

export { uniquePaths };
