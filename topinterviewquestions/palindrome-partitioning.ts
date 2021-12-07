function partition(s: string): string[][] {
  const result: string[][] = []

  const subresult: string[] = []

  backtrack(s, result, subresult, 0)

  return result
}

function backtrack(
  s: string,
  result: string[][],
  subresult: string[],
  index: number,
) {
  if (s.length === index) {
    if (
      containsAllPalindrome(subresult) &&
      getTotalPartitionLength(subresult) === s.length
    ) {
      result.push([...subresult])
    }
  } else {
    const len = subresult.length

    subresult.push(s[index])

    backtrack(s, result, subresult, index + 1)

    subresult.pop()

    const originalString = subresult[len - 1]

    subresult[len - 1] += s[index]

    backtrack(s, result, subresult, index + 1)

    subresult[len - 1] = originalString
  }
}

function containsAllPalindrome(words: string[]): boolean {
  if (words.length === 0) {
    return false
  }

  return words
    .map((word) => isPalindrome(word))
    .every((isPalindrome) => isPalindrome)
}

function isPalindrome(word: string): boolean {
  for (let i = 0, j = word.length - 1; i < j; i++, j--) {
    if (word[i] !== word[j]) {
      return false
    }
  }

  return true
}

function getTotalPartitionLength(words: string[]): number {
  return words
    .map((word) => word.length)
    .reduce((acc, len) => acc + len)
}

console.log(partition('aab'))
console.log(partition('a'))

export { partition }
