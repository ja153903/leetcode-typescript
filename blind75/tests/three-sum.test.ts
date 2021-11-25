import { assertEquals } from "./testing-deps.ts";
import { threeSum } from "../three-sum.ts";

Deno.test("Three Sum", () => {
  const nums = [-1, 0, 1, 2, -1, -4];
  const expected = [
    [-1, -1, 2],
    [-1, 0, 1],
  ];

  assertEquals(threeSum(nums), expected);
});
