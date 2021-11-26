function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) {
    return []
  }

  // to merge intervals, we should make sure that
  // the array is sorted
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }

    return a[0] - b[0]
  })

  const result: number[][] = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    // the end of the interval we stored in result is greater than
    // or equal to the current interval then this means
    // that we can consume this interval
    if (result[result.length - 1][1] >= intervals[i][0]) {
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
