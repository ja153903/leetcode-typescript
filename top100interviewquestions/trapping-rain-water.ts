function trap(height: number[]): number {
  let result = 0
  let maxLeft = height[0]
  let maxRight = height[height.length - 1]

  let i = 0
  let j = height.length - 1

  while (i < j) {
    // make sure we work on one or the other
    // work on the smaller one
    if (height[i] <= height[j]) {
      if (height[i] <= maxLeft) {
        result += maxLeft - height[i]
      } else {
        maxLeft = Math.max(maxLeft, height[i])
      }
      i += 1
    } else {
      if (height[j] <= maxRight) {
        result += maxRight - height[j]
      } else {
        maxRight = Math.max(maxRight, height[j])
      }
      j -= 1
    }
  }

  return result
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([4, 2, 0, 3, 2, 5]))

export { trap }
