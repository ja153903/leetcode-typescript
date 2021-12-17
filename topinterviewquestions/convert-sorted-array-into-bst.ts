import { TreeNode } from '../data-structures/index.ts'

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null
  }

  const root = constructTree(nums, 0, nums.length - 1)

  return root
}

function constructTree(
  nums: number[],
  start: number,
  end: number,
): TreeNode | null {
  if (start > end) {
    return null
  }

  const mid = Math.floor((start + end) / 2)

  const root = new TreeNode(nums[mid])
  root.left = constructTree(nums, start, mid - 1)
  root.right = constructTree(nums, mid + 1, end)

  return root
}

export { sortedArrayToBST }
