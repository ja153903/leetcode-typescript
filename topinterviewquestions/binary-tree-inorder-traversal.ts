import { TreeNode } from "../data-structures/index.ts"

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []

  traverse(root, result)

  return result
}

function traverse(root: TreeNode | null, result: number[]) {
  if (root) {
    traverse(root.left, result)
    result.push(root.val)
    traverse(root.right, result)
  }
}

export { inorderTraversal, TreeNode }
