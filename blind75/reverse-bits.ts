function reverseBits(n: number): number {
  let result = 0

  for (let i = 0; i < 32; i++) {
    result = (result << 1) + (n & 1)
    n >>= 1
  }

  // turn this into unsigned bitshifted integer
  return result >>> 0
}

export { reverseBits }
