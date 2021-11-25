import { assertEquals } from "./testing-deps.ts";

import { maxSubArray } from "../maximum-subarray.ts";

Deno.test("Maximum SubArray", () => {
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const expected = 6;

  assertEquals(maxSubArray(nums), expected);
});
