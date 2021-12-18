// Not ideal solution, but somewhat works because
// we're caching already existing palindromes
function countSubstrings(s: string): number {
  let count = 0

  const existingPalindromes = new Set<string>()

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const substring = s.substring(i, j + 1)
      if (existingPalindromes.has(substring)) {
        count += 1
      } else if (isPalindrome(substring)) {
        existingPalindromes.add(substring)
        count += 1
      }
    }
  }

  return count
}

// another solution we can use is to expand around each index

function isPalindrome(s: string): boolean {
  return s.split("").reverse().join("") === s
}

console.log(countSubstrings("aaa"))

export { countSubstrings }
