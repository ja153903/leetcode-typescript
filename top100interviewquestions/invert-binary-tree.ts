import { TreeNode } from '../data-structures/index.ts'

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null
  }

  const left = invertTree(root.left)
  const right = invertTree(root.right)

  root.left = right
  root.right = left

  return root
}

export { invertTree }
