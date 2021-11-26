class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

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

export { ListNode, deleteNode }
