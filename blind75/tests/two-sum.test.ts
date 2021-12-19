import { assertEquals } from './testing-deps.ts'

import { twoSum } from '../two-sum.ts'

Deno.test('Two Sum', () => {
  const nums: number[] = [2, 3, 7, 11]
  const target = 9

  assertEquals(twoSum(nums, target), [0, 2])
})
