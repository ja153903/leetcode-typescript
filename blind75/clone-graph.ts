class Node {
  val: number
  neighbors: Node[]
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val
    this.neighbors = neighbors === undefined ? [] : neighbors
  }
}

function cloneGraph(node: Node | null): Node | null {
  // iterate over all the graph nodes
  // create copies of each graph node and store them in a hashmap
  if (!node) {
    return null
  }

  const hashmap = new Map<number, Node>()

  let seen = new Set<number>()
  let queue: Array<Node> = []
  queue.push(node)

  while (queue.length) {
    const front: Node | undefined = queue.shift()

    if (front === undefined)
      break

    if (!seen.has(front.val)) {
      seen.add(front?.val)
      hashmap.set(front.val, new Node(front.val))

      for (const neighbor of front.neighbors) {
        queue.push(neighbor)
      }
    }
  }


  seen = new Set<number>()
  queue = []
  queue.push(node)

  while (queue.length) {
    const front: Node | undefined = queue.shift()

    if (front === undefined)
      break

    if (!seen.has(front.val)) {
      seen.add(front?.val)

      const current = hashmap.get(front.val)
      if (current === undefined) {
        break
      }

      for (const neighbor of front.neighbors) {
        const currentNeighbor = hashmap.get(neighbor.val)
        if (currentNeighbor !== undefined) {
          current.neighbors.push(currentNeighbor)
        }

        queue.push(neighbor)
      }
    }
  }

  return hashmap.get(node.val) ?? null
}

export { cloneGraph }
