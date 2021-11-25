// You are given an integer array nums. You are initially positioned at the array's first index,
// and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.
function canJump(nums: number[]): boolean {
  // similar pattern to word break here
  const dp = new Array(nums.length).fill(false);
  dp[nums.length - 1] = true;

  for (let i = nums.length - 2; i >= 0; i--) {
    for (let j = 0; j <= nums[i] && i + j < nums.length; j++) {
      if (dp[i + j]) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[0];
}

export { canJump };
