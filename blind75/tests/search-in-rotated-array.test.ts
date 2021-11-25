import { assertEquals } from "./testing-deps.ts";

import { search } from "../search-in-rotated-array.ts";

Deno.test("Search in Rotated Sorted Array", () => {
  const nums = [4, 5, 6, 7, 0, 1, 2];
  const target = 0;

  assertEquals(search(nums, target), 4);
});
