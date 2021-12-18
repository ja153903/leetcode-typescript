import { assertEquals } from "./testing-deps.ts"

import { canFinish } from "../course-scheduler.ts"

Deno.test("Course Schedule", () => {
  const prerequisites = [
    [1, 4],
    [2, 4],
    [3, 1],
    [3, 2],
  ]
  const numCourses = 5

  assertEquals(canFinish(numCourses, prerequisites), true)
})
