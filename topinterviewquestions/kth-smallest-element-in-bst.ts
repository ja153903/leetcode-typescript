import { TreeNode } from '../data-structures/index.ts'

function kthSmallest(root: TreeNode | null, k: number): number {
  function inorder(root: TreeNode | null, result: number[]): void {
    if (root) {
      inorder(root.left, result)
      result.push(root.val)
      inorder(root.right, result)
    }
  }

  if (!root) {
    return -1
  }

  const result: number[] = []
  inorder(root, result)

  return result[k - 1]
}

export { kthSmallest }
