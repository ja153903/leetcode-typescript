class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function hasCycleSetSolution(head: ListNode | null): boolean {
  const set = new Set<ListNode>()

  while (head) {
    if (set.has(head)) {
      return true
    }

    set.add(head)

    head = head.next
  }

  return false
}

// Trying to get O(1) Solution going
function hasCycle(head: ListNode | null): boolean {
  // to do this, we can implement fast and slow pointers
  let slow = head
  let fast = head

  while (fast?.next?.next) {
    slow = slow?.next ?? null
    fast = fast.next.next

    if (fast === slow) {
      return true
    }
  }

  return false
}

export { hasCycleSetSolution, hasCycle, ListNode }
