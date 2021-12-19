import { TreeNode } from '../data-structures/index.ts'

function diameterOfBinaryTree(root: TreeNode | null): number {
  let result = 0

  function depth(root: TreeNode | null): number {
    if (!root) {
      return 0
    }

    const left = depth(root.left)
    const right = depth(root.right)

    result = Math.max(result, left + right)

    return Math.max(left, right) + 1
  }

  if (!root) {
    return 0
  }

  depth(root)

  return result
}

export { diameterOfBinaryTree }
