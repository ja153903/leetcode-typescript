// this is a similar subset problem
function subsets(nums: number[]): number[][] {
  const result: number[][] = []

  backtrack(nums, result, [], 0)

  return result
}

function backtrack(nums: number[], result: number[][], current: number[], start: number) {
  result.push([...current])

  for (let i = start; i < nums.length; i++) {
    current.push(nums[i])
    backtrack(nums, result, current, i + 1)
    current.pop()
  }
}

export { subsets }
