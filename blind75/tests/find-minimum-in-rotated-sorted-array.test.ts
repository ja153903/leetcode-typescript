import { assertEquals } from "./testing-deps.ts";
import { findMin } from "../find-minimum-in-rotated-sorted-array.ts";

Deno.test("Find Minimum in Rotated Sorted Array", () => {
  const nums = [3,4,5,1,2];
  const expected = 1;

  assertEquals(findMin(nums), expected);
});
