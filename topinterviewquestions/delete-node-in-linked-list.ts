import { ListNode } from '../data-structures/index.ts'

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(root: ListNode | null): void {
  if (!root) {
    return
  }

  const next = root?.next ?? null

  if (next) {
    root.val = next.val
    root.next = next.next
  }
}

export { deleteNode }
