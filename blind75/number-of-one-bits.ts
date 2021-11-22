function hammingWeight(n: number): number {
  let count = 0

  while (n > 0) {
    // if the rightmost bit is a 1, then increase the count
    if ((n & 1) === 1) {
      count++
    }

    // do logical right bitshift
    n = n >>> 1
  }

  return count
}

export { hammingWeight }
