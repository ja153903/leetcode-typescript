function maxProfit(prices: number[]): number {
  let profit = 0
  let currentMin = Number.MAX_SAFE_INTEGER

  for (const price of prices) {
    if (price < currentMin) {
      currentMin = price
    } else {
      profit += price - currentMin
      currentMin = price
    }
  }

  return profit
}

export { maxProfit }
