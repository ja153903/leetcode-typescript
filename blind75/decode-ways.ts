function numDecodings(s: string): number {
  // let's say that dp[i] ~ the number of ways
  // to decode string of length i
  const dp: number[] = new Array(s.length + 1).fill(0);

  dp[0] = 1;

  dp[1] = s[0] === "0" ? 0 : 1;

  for (let i = 2; i <= s.length; i++) {
    const current = parseInt(s[i - 1], 10);
    const before = parseInt(s.substring(i - 2, i), 10);

    if (current >= 1 && current <= 9) {
      dp[i] += dp[i - 1];
    }

    if (before >= 10 && before <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[s.length];
}

export { numDecodings };
