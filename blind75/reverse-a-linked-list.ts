import { ListNode } from "../data-structures/index.ts"

function reverseList(head: ListNode | null): ListNode | null {
  let current: ListNode | null = head
  let prev: ListNode | null = null

  while (current !== null) {
    const next: ListNode | null = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}

export { reverseList }
