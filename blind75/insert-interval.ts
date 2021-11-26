function insert(
  intervals: number[][],
  newInterval: number[],
): number[][] {
  const result: number[][] = []

  let i = 0

  // push all intervals that are less than the new interval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i])
    i += 1
  }

  // modify the newInterval we should insert
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval = [
      Math.min(newInterval[0], intervals[i][0]),
      Math.max(newInterval[1], intervals[i][1]),
    ]

    i += 1
  }

  result.push(newInterval)

  // add the rest of the intervals
  while (i < intervals.length) {
    result.push(intervals[i])
    i += 1
  }

  return result
}

export { insert }
