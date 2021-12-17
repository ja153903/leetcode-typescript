import { TreeNode } from '../data-structures/index.ts'

function buildTree(
  preorder: number[],
  inorder: number[],
): TreeNode | null {
  if (!preorder.length || !inorder.length) {
    return null
  }

  const root = new TreeNode(preorder.shift())
  const rootIndex = inorder.findIndex((val) => val === root.val) ?? -1

  const leftSubtree = inorder.filter(
    (_value, index) => index < rootIndex,
  )
  const rightSubtree = inorder.filter(
    (_value, index) => index > rootIndex,
  )

  root.left = buildTree(preorder, leftSubtree)
  root.right = buildTree(preorder, rightSubtree)

  return root
}

export { buildTree }
