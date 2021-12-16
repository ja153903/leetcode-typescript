class LinkedHashSet {
  set: Set<number>
  order: Array<number>
  capacity: number

  constructor(capacity: number) {
    this.set = new Set<number>()
    this.order = []
    this.capacity = capacity
  }

  contains(value: number): boolean {
    return this.set.has(value)
  }

  removeFront() {
    const value = this.order.shift()
    if (value) {
      this.set.delete(value)
    }
  }

  addValue(value: number) {
    if (this.contains(value)) {
      return
    }

    if (this.order.length === this.capacity) {
      this.removeFront()
    }

    this.order.push(value)
    this.set.add(value)
  }
}

// think about edge cases here
function getMaximumEatenDishCount(
  N: number,
  D: number[],
  K: number,
): number {
  let count = 0

  const hashSet = new LinkedHashSet(K)

  for (let i = 0; i < N; i++) {
    const canEat = !hashSet.contains(D[i])

    if (canEat) {
      // this means they are unique
      hashSet.addValue(D[i])
      count += 1
    }
  }

  return count
}

// console.log(getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 1))
console.log(getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 2))
// console.log(getMaximumEatenDishCount(7, [1, 2, 1, 2, 1, 2, 1], 2))
// console.log(getMaximumEatenDishCount(0, [], 2))
console.log(getMaximumEatenDishCount(5, [1, 1, 1, 1, 1], 1))
console.log(getMaximumEatenDishCount(5, [1, 1, 1, 1, 1], 2))
console.log(getMaximumEatenDishCount(5, [1, 1, 1, 1, 1], 3))
console.log(getMaximumEatenDishCount(5, [1, 1, 1, 1, 1], 4))
console.log(getMaximumEatenDishCount(5, [1, 1, 1, 1, 1], 5))

function generateDataset(N: number): { N: number; D: number[] } {
  const items = new Array<number>(N).fill(0)

  for (let i = 0; i < N; i++) {
    items[i] = Math.floor(Math.random() * 1_000_000)
  }

  return { N, D: items }
}

let { N, D } = generateDataset(500_000)

console.log(getMaximumEatenDishCount(N, D, 500_000))
