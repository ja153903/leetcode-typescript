/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  for (let i = 0, j = s.length - 1; i < j; i += 1, j -= 1) {
    ;[s[i], s[j]] = [s[j], s[i]]
  }
}

export { reverseString }
