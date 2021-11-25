function twoSum(nums: number[], target: number): number[] {
  const seen: Map<number, number> = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(target - nums[i])) {
      return [seen?.get(target - nums[i]) ?? -1, i]
    }

    seen.set(nums[i], i)
  }

  return []
}

export { twoSum }
