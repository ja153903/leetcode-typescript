function climbStairs(n: number): number {
  // if we think about this carefully,
  // the number of ways to get to step i
  // depend on whether we came from the previous step
  // or the step before that step.
  // This is because we are told that we can either take
  // 1 or 2 steps up
  // so the number of steps up to step i only depend on
  // the previous state i - 1 and i - 2
  const dp: Array<number> = new Array(n + 1).fill(0)

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}

export { climbStairs }
