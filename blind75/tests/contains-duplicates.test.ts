import { assert } from "./testing-deps.ts"

import { containsDuplicate } from "../contains-duplicate.ts"

Deno.test("Contains Duplicate", () => {
  const nums = [1, 1, 2, 3, 4]

  assert(containsDuplicate(nums))
})
