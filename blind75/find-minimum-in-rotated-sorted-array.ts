function findMin(nums: number[]): number {
  // since the array is rotated to by some pivot, we can use binary search still
  // to find the minimum
  let lo = 0
  let hi = nums.length - 1

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2)

    if (nums[mid] > nums[hi]) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }

  return nums[lo]
}

export { findMin }
