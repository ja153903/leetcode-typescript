function maxArea(height: number[]): number {
  let area = 0

  let i = 0
  let j = height.length - 1

  while (i < j) {
    const currentArea = Math.min(height[i], height[j]) * (j - i)
    area = Math.max(area, currentArea)

    if (height[i] > height[j]) {
      j--
    } else {
      i++
    }
  }

  return area
}

export { maxArea }
