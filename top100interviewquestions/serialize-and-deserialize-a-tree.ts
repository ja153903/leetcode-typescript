import { TreeNode } from '../data-structures/index.ts'

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  function helper(root: TreeNode | null) {
    if (root) {
      values.push(root.val.toString())
      helper(root.left)
      helper(root.right)
    } else {
      values.push("#")
    }
  }
  const values: Array<string> = []

  helper(root)

  return values.join(" ")
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const values = data.split(" ")
  function helper(): TreeNode | null {
    const value = values.shift() ?? null
    if (value === "#") {
      return null
    } else if (value) {
      const node = new TreeNode(parseInt(value))
      node.left = helper()
      node.right = helper()

      return node
    }

    return null
  }

  return helper()
}

export { serialize, deserialize }