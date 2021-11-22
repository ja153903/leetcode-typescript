function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0]
  }
  // the idea that this problem extends to something circular means 
  // that we can try to do the house robber problems
  // from two different points
  // from 0 to nums.length - 2
  // and from 1 to nums.length - 1
  // we can compare the maximum amounts we get from these two ranges
  return Math.max(robHelper(nums, 0, nums.length - 2), robHelper(nums, 1, nums.length - 1))
}

function robHelper(nums: number[], i: number, j: number): number {
  const dp = new Array(j - i + 1).fill(0)
  dp[0] = nums[i]
  dp[1] = Math.max(nums[i + 1], nums[i])

  for (let k = 2; k < j - i + 1; k++) {
    dp[k] = Math.max(dp[k - 1], dp[k - 2] + nums[i + k])
  }

  return dp[j - i]
}

export { rob }
