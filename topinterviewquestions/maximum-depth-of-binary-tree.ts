import { TreeNode } from "../data-structures/index.ts"

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

export { maxDepth }
