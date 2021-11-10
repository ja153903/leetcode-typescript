function maxProduct(nums: number[]): number {
  // this problem can take advantage of the same concept with maxSubArray
  // the only difference here is that, we have to keep track of
  // the minimum product as well because in the case that we have a negative integer,
  // the minimum number which can be negative and product a larger positive integer
  let minSoFar = nums[0];
  let maxSoFar = nums[0];
  let currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const tempMinSoFar = minSoFar;
    minSoFar = Math.min(nums[i], nums[i] * maxSoFar, nums[i] * minSoFar);
    maxSoFar =  Math.max(nums[i], nums[i] * maxSoFar, nums[i] * tempMinSoFar); 

    currentMax = Math.max(currentMax, maxSoFar);
  }

  return currentMax;
}

export { maxProduct };
