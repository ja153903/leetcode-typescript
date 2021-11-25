type Graph = Map<number, Array<number>>
/**
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 * Return true if you can finish all courses. Otherwise, return false.
 *
 * Approach:
 * The solution requires us to figure out if there exists a cycle
 * if there is a cycle, then its impossible to finish all classes
 *
 *
 * The solution involves a topic called topological sorting in order to identify cycles
 *
 * Topological Sort Algorithms:
 * Step 1: Identify vertices that have no incoming edges (the in-degree of these vertices are 0)
 * Step 2: Delete this vertex of in-degree 0 and all its outgoing edges from the graph. Place it on the output
 * Repeat these steps until the graph is empty
 */
function canFinish(
  numCourses: number,
  prerequisites: number[][],
): boolean {
  // keep track of node and its prerequisites
  const graph: Graph = new Map()
  for (let i = 0; i < numCourses; i++) {
    graph.set(i, [])
  }

  const degree: Array<number> = new Array(numCourses).fill(0)

  for (const [course, prereq] of prerequisites) {
    graph.get(prereq)?.push(course)
    degree[course]++
  }

  // output array
  const bfs: Array<number> = []

  // find the vertices with in-degree 0
  degree.forEach((d, index) => {
    if (d === 0) {
      bfs.push(index)
    }
  })

  while (bfs.length > 0) {
    // using the vertext of in-degree 0, we find
    // all its outgoing edges
    const front = bfs.shift() ?? 0

    for (const prereq of graph.get(front) ?? []) {
      // remove degree as we remove it from the graph
      degree[prereq]--
      // if degree is now 0, we add it to bfs (the output array)
      if (degree[prereq] === 0) {
        bfs.push(prereq)
      }
    }
  }

  // we check that the graph is empty
  // if the graph is not empty, then this means we have a cycle
  return Math.max(...degree) == 0
}

export { canFinish }
