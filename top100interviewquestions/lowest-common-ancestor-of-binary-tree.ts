import { TreeNode } from '../data-structures/index.ts'

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  if (!root) {
    return null
  }

  // if the root is either p or q, then we return this root
  // as its the lca
  if (root === p || root === q) {
    return root
  }

  // go into left subtree and check if the lca exists there
  const left = lowestCommonAncestor(root.left, p, q)

  // go into right subtree and check if the lca exists there
  const right = lowestCommonAncestor(root.right, p, q)

  // if both exist, then this means we can return the root as the lca
  if (left && right) {
    return root
  }

  // otherwise we can assume that one of them will return null
  // as they can be both located in strictly the left or right subtree
  if (!left) {
    return right
  }

  return left
}

export { lowestCommonAncestor }
