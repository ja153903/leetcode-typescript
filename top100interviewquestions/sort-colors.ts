/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const counter = new Array(3).fill(0)

  nums.forEach((num) => {
    counter[num] += 1
  })

  let j = 0
  for (let i = 0; i < nums.length; i++) {
    while (counter[j] === 0) {
      j += 1
    }

    nums[i] = j
    counter[j] -= 1
  }
}

export { sortColors }
