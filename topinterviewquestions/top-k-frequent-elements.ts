function topKFrequent(nums: number[], k: number): number[] {
  const counter = getCounter<number>(nums)
  const mostCommon = [...counter.entries()].sort(
    (a, b) => b[1] - a[1],
  )

  return mostCommon.map((entry) => entry[0]).slice(0, k)
}

function getCounter<T>(items: T[]): Map<T, number> {
  const map = new Map<T, number>()

  for (const item of items) {
    const currentCount = map.get(item) ?? 0
    map.set(item, currentCount + 1)
  }

  return map
}

export { topKFrequent }
