function majorityElement(nums: number[]): number {
  const counter = getCounter(nums)
  let maxKey = 0
  let maxCount = 0

  for (const [key, value] of counter.entries()) {
    if (maxCount < value) {
      maxCount = value
      maxKey = key
    }
  }

  return maxKey
}

function getCounter(nums: number[]): Map<number, number> {
  const map = new Map<number, number>()

  for (const num of nums) {
    const count = map.get(num) ?? 0
    map.set(num, count + 1)
  }

  return map
}

export { majorityElement }
