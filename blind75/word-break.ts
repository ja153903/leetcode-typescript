function wordBreak(s: string, wordDict: string[]): boolean {
  const set = new Set([...wordDict])
  const dp = new Array(s.length + 1).fill(false)

  dp[0] = true // i guess we can assume here that the empty string is possible to construct

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (dp[j] && set.has(s.substring(j, i))) {
        dp[i] = true
        break
      }
    }
  }

  return dp[s.length]
}

export { wordBreak }
