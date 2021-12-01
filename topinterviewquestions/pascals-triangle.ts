function generate(numRows: number): number[][] {
  const result: number[][] = []

  for (let i = 0; i < numRows; i++) {
    const subresult: number[] = []

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        subresult.push(1)
      } else {
        const sum = result[i - 1][j] + result[i - 1][j - 1]
        subresult.push(sum)
      }
    }

    result.push(subresult)
  }

  return result
}

export { generate }
