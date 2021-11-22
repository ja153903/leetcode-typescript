function productExceptSelf(nums: number[]): number[] {
  const result: Array<number> = new Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1]
  }

  let right = 1

  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= right
    right *= nums[j]
  }

  return result
}

export { productExceptSelf }
