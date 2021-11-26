// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.
function longestConsecutive(nums: number[]): number {
  const set = new Set(nums)
  let best = 0

  for (const num of nums) {
    if (!set.has(num - 1)) {
      let y = num + 1
      while (set.has(y)) {
        y++
      }
      best = Math.max(best, y - num)
    }
  }

  return best
}

export { longestConsecutive }
