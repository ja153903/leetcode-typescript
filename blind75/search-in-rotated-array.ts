function search(nums: number[], target: number): number {
  if (!nums.length) {
    return -1;
  }

  // use algorithm to find min using binary search
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  const pivot = left;

  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const realMid = (mid + pivot) % nums.length;

    if (nums[realMid] === target) {
      return realMid;
    } else if (nums[realMid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

export { search };
