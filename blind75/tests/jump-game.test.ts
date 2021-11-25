import { assertEquals } from "./testing-deps.ts";

import { canJump } from "../jump-game.ts";

Deno.test("Jump Game", () => {
  const nums = [3, 2, 1, 0, 4];

  assertEquals(canJump(nums), false);
});
