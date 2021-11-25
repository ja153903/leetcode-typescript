function coinChange(coins: number[], amount: number): number {
  // return the fewest number of coins you need to achieve an amount
  // so given that our end result is the minimum number of coins needed to
  // come up with some amount, we know that our state will depend on
  // some amount i from 0 until amount
  // to model the recurrence relation we can say that:
  // f(i) ~ the minimum number of coins needed to achieve the amount
  // in this case we should set our base case to 0, since it will take 0 coins to achieve 0 dollars
  // f(i) = min(f(i - coin) + 1 for coin in coin)

  const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);

  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
}

coinChange([1, 2, 5], 11);

export { coinChange };
