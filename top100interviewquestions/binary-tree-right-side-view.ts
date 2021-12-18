import { TreeNode } from "../data-structures/index.ts"

function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }

  // for this problem, we can do a level order traversal
  // and then just return the last values on each level
  const result: number[][] = []
  let current: number[] = []

  const queue: Array<TreeNode | null> = []
  queue.push(root)
  queue.push(null)

  while (queue.length) {
    const front: TreeNode | null = queue.shift() ?? null

    if (!front) {
      // if this is null, this is means we're on a next level
      if (queue.length) {
        queue.push(null)
      }

      result.push([...current])
      current = []
    } else {
      current.push(front.val)

      if (front.left) {
        queue.push(front.left)
      }

      if (front.right) {
        queue.push(front.right)
      }
    }
  }

  return result.map((row) => row[row.length - 1])
}

export { rightSideView }
