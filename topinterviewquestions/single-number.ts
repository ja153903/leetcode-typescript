function singleNumber(nums: number[]): number {
  // this problem can be solved as an XOR problem
  let result = 0

  for (const num of nums) {
    result ^= num
  }

  return result
}

export { singleNumber }
