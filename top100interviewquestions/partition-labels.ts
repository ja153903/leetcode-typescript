interface Interval {
  start: number
  end: number
}

function partitionLabels(s: string): number[] {
  const map = new Map<string, Interval>()

  for (let i = 0; i < s.length; i++) {
    const currentInterval = map.get(s[i])
    if (currentInterval) {
      const { end } = currentInterval
      if (end < i) {
        currentInterval.end = i
      }
    } else {
      map.set(s[i], { start: i, end: i })
    }
  }

  const intervals = [...map.values()].sort((a, b) => {
    if (a.start === b.start) {
      return a.end - b.end
    }

    return a.start - b.start
  })

  const merge = []

  for (const interval of intervals) {
    if (merge.length === 0) {
      merge.push(interval)
    } else {
      const top = merge[merge.length - 1]

      if (interval.start > top.end) {
        merge.push(interval)
      } else if (top.end < interval.end) {
        top.end = interval.end
      }
    }
  }

  return merge.map((interval) => interval.end - interval.start + 1)
}

const s = 'ababcbacadefegdehijhklij'

console.log(partitionLabels(s))

export { partitionLabels }
