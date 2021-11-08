import { assertEquals } from './testing-deps.ts';

import { maxProfit } from '../best-time-to-buy-and-sell-stock.ts';

Deno.test('Best Time to Buy and Sell Stock', () => {
  const prices = [7, 1, 5, 3, 6, 4];
  assertEquals(maxProfit(prices), 5);
});
