class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(
    val?: number,
    left?: TreeNode | null,
    right?: TreeNode | null,
  ) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

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
