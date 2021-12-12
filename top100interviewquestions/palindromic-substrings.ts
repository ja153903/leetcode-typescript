function countSubstrings(s: string): number {
  let count = 0

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i , j))  {
        count += 1
      }
    }
  }

  return count
}

function isPalindrome(s: string, i: number, j: number): boolean {
  while (i < j) {
    if (s[i] !== s[j]) {
      return false
    }

    i += 1
    j -= 1
  }

  return true
}

export { countSubstrings }