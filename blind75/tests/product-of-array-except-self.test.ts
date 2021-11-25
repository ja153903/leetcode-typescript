import { assertEquals } from "./testing-deps.ts";

import { productExceptSelf } from "../product-of-array-except-self.ts";

Deno.test("Product of Array Except Self", () => {
  const nums = [1, 2, 3, 4];
  const expected = [24, 12, 8, 6];

  assertEquals(productExceptSelf(nums), expected);
});
