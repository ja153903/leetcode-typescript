function getSum(a: number, b: number): number {
  let c

  while (b !== 0) {
    c = a & b
    a ^= b
    b = c << 1
  }

  return a
}

export { getSum }
