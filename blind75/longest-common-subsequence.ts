// to find the longest common subsequence
// we should keep track of the various subsequences we can form
// dp[i][j] will be the longest common subsequence up to index i in text1 and index j in text2
function longestCommonSubsequence(
  text1: string,
  text2: string,
): number {
  const dp: Array<Array<number>> = []
  for (let i = 0; i <= text1.length; i++) {
    dp.push(new Array(text2.length + 1).fill(0))
  }

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        // if the characters are the same, look at the previous character on the diagonal
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        // otherwise, take the max from above and to its left
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[text1.length][text2.length]
}

export { longestCommonSubsequence }
