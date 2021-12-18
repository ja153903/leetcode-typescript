import { assertEquals } from "./testing-deps.ts"
import { maxProduct } from "../maximum-product-subarray.ts"

Deno.test("Maximum Product Subarray Case 1", () => {
  const nums = [2, 3, -2, 4]
  const expected = 6

  assertEquals(maxProduct(nums), expected)
})

Deno.test("Maximum Product Subarray Case 2", () => {
  const nums = [-2, 0, -1]
  const expected = 0

  assertEquals(maxProduct(nums), expected)
})
