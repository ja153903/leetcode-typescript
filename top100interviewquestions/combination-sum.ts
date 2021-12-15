function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = []

  backtrack(candidates, target, result, [])

  return result
}

function backtrack(candidates: number[], target: number, result: number[][], current: number[]) {
  if (target === 0) {
    const candidate = [...current].sort((a, b) => a - b)
    const candidateAsStr = candidate.map(num => num.toString()).join(',')
    let exists = false

    for (const res of result) {
      const resAsStr = res.map(num => num.toString()).join(',')
      if (resAsStr === candidateAsStr) {
        exists = true
        break
      }
    }

    if (!exists) {
      result.push(candidate)
    }
  } else {
    for (const candidate of candidates) {
      if (target - candidate >= 0) {
        current.push(candidate)
        backtrack(candidates, target - candidate, result, current)
        current.pop()
      }
    }
  }
}

const candidates = [2,3,6,7]
const target = 7

console.log(combinationSum(candidates, target))

export { combinationSum }