function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length === 0) {
    return 0
  }

  // This is code to find out the maximum number of non-overlapping intervals
  intervals.sort((a: number[], b: number[]) => a[1] - b[1])
  let end = intervals[0][1]
  let count = 1

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= end) {
      end = intervals[i][1]
      count += 1
    }
  }

  // find the complement
  return intervals.length - count
}

export { eraseOverlapIntervals }
