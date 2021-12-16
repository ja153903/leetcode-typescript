function findDisappearedNumbers(nums: number[]): number[] {
  const unique = new Set<number>([...nums])

  const result: number[] = []

  for (let i = 1; i <= nums.length; i++) {
    if (!unique.has(i)) {
      result.push(i)
    }
  }

  return result
}

export { findDisappearedNumbers }
