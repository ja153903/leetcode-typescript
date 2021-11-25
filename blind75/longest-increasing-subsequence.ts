// the idea with LIS is that we want to find the optimal subsequence
// up to some index i when we're iterating
// this means that for some f(i) we can say that
// f(i) = max(f(j) for j in [0, i - 1]) + 1
function lengthOfLIS(nums: number[]): number {
  const dp: number[] = new Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
  }

  return Math.max(...dp)
}

export { lengthOfLIS }
