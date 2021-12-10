class Solution {
  original: number[];

  constructor(nums: number[]) {
    this.original = nums;
  }

  reset(): number[] {
    return this.original;
  }

  shuffle(): number[] {
    const copy = [...this.original]

    for (let i = 0; i < copy.length; i++) {
      const rand = Math.floor(Math.random() * (copy.length - i) + i);
      [copy[i], copy[rand]] = [copy[rand], copy[i]];
    }

    return copy;
  }
}

export { Solution }