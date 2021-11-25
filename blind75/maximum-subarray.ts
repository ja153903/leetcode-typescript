function maxSubArray(nums: number[]): number {
  let maxSoFar = nums[0];
  let currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxSoFar = Math.max(nums[i], nums[i] + maxSoFar);
    currentMax = Math.max(currentMax, maxSoFar);
  }

  return currentMax;
}

export { maxSubArray };
