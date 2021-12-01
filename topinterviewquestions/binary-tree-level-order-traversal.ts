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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }

  const result: number[][] = []
  const queue: Array<TreeNode | null> = []

  queue.push(root)
  queue.push(null)

  let subresult: number[] = []

  while (queue.length > 0) {
    const front: TreeNode | null = queue.shift() ?? null

    if (!front) {
      result.push([...subresult])

      if (queue.length !== 0) {
        subresult = []
        queue.push(null)
      }
    } else {
      subresult.push(front.val)

      if (front?.left) {
        queue.push(front.left)
      }

      if (front?.right) {
        queue.push(front.right)
      }
    }
  }

  return result
}

export { levelOrder, TreeNode }
