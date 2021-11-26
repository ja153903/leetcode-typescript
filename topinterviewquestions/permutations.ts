// We should consider this a fundamental backtracking question
function permute(nums: number[]): number[][] {
  const result: number[][] = []

  backtrack(nums, result, [])

  return result
}

function backtrack(nums: number[], result: number[][], current: number[]) {
  if (current.length === nums.length) {
    result.push([...current])
  } else {
    for (let i = 0; i < nums.length; i++) {
      // if the number is in here, then we ignore it
      if (current.includes(nums[i])) { continue }

      // include number backtrack then remove
      current.push(nums[i])
      backtrack(nums, result, current)
      current.pop()
    }
  }
}

export { permute }
