import { TreeNode } from '../data-structures/index.ts'

// there is only one entrance (it's through the root)
// we have to skip one node
// max amount you can rob per step is the prev[i - 2] + curr, prev[i - 1]
// since we know that we have to go into the root, we know for sure that we cannot
function rob(root: TreeNode | null): number {
  if (!root) {
    return 0
  }

  let val = 0

  if (root.left) {
    val += rob(root.left.left) + rob(root.left.right)
  }

  if (root.right) {
    val += rob(root.right.left) + rob(root.right.right)
  }

  // return the max between using the root and not using the root
  return Math.max(root.val + val, rob(root.right) + rob(root.left))
}

function robOptimal(root: TreeNode | null): number {
  const res = tryRobbingThis(root)
  return Math.max(...res)
}

function tryRobbingThis(root: TreeNode | null): number[] {
  if (!root) {
    return new Array(2).fill(0)
  }

  const left = tryRobbingThis(root.left)
  const right = tryRobbingThis(root.right)
  const res = new Array(2).fill(0)

  res[0] = Math.max(...left) + Math.max(...right)
  res[1] = root.val + left[0] + right[0]

  return res
}

export { rob }
