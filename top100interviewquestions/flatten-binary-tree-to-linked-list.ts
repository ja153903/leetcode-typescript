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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  // to transform this into a linked list
  // this means that we'll want to make everything
  // a right node
  // we also want to make sure that this is done
  // using pre-order traversal
  if (!root) {
    return
  }

  const result: TreeNode[] = []
  preOrderTraversal(root, result)

  result[0].left = null

  for (let i = 1; i < result.length; i++) {
    result[i - 1].right = result[i]
    result[i].left = null
  }
}

function preOrderTraversal(
  root: TreeNode | null,
  result: TreeNode[],
) {
  if (root) {
    result.push(root)
    preOrderTraversal(root.left, result)
    preOrderTraversal(root.right, result)
  }
}

export { flatten }
