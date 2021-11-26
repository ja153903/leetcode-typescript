function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) {
    return []
  }

  // to merge intervals, we should make sure that
  // the array is sorted
  // once we know its sorted, we can then implement
  // some logic and process each one by one
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }

    return a[0] - b[0]
  })

  const result: number[][] = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    if (result[result.length-1][1] >= intervals[i][0]) {
      // this means we can possible merge the intervals
      result[result.length - 1] = [
        Math.min(result[result.length - 1][0], intervals[i][0]),
        Math.max(result[result.length - 1][1], intervals[i][1]),
      ]
    } else {
      result.push(intervals[i])
    }
  }

  return result
}

export { merge }
