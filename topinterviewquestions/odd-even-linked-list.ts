import { ListNode } from "../data-structures/index.ts"

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null
  }

  let count = 1

  const odd = new ListNode(-1)
  const even = new ListNode(-1)

  let oddRunner: ListNode | null = odd
  let evenRunner: ListNode | null = even

  while (head) {
    if (count % 2 === 1) {
      oddRunner.next = new ListNode(head.val)
      oddRunner = oddRunner.next
    } else {
      evenRunner.next = new ListNode(head.val)
      evenRunner = evenRunner.next
    }

    head = head.next
    count += 1
  }

  let anotherOddRunner = odd

  while (anotherOddRunner.next) {
    anotherOddRunner = anotherOddRunner.next
  }

  anotherOddRunner.next = even.next

  return odd.next
}

export { oddEvenList }
