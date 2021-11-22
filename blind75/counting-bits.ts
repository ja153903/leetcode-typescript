function countBits(n: number): number[] {
  const dp: Array<number> = new Array(n + 1).fill(0)

  // dp[0] = 0 | 0000
  // dp[1] = 1 | 0001
  // dp[2] = 1 | 0010
  // dp[3] = 2 | 0011
  // dp[4] = 1 | 0100
  // dp[5] = 2 | 0101
  // dp[6] = 2 | 0110
  // dp[7] = 3 | 0111
  // dp[8] = 1 | 1000
  // what is the relationship for some generic i?
  // dp[i] = dp[i >>> 1] + (i & 1 === 1 ? 1 : 0)
  for (let i = 1; i <= n; i++) {
    // the idea here is that we can look to the current value i logically bitshift
    // to the right and we would add 1 if the rightmost bit of i is currently 1
    dp[i] = dp[i >>> 1] + ((i & 1) === 1 ? 1 : 0)
  }

  return dp
}

export { countBits }
