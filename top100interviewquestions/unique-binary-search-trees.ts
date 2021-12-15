function numTrees(n: number): number {
  const dp = new Array<number>(n + 1).fill(0)
  dp[0] = dp[1] = 1

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j]
    }
  }

  return dp[n]
}

console.log(numTrees(3))