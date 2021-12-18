function titleToNumber(columnTitle: string): number {
  columnTitle = columnTitle.toLowerCase()

  const map = new Map<string, number>()

  for (let i = 97, j = 1; i <= 123; i++, j++) {
    map.set(String.fromCharCode(i), j)
  }

  let result = 0

  for (const ch of columnTitle) {
    const current = map.get(ch) ?? 0

    result = result * 26 + current
  }

  return result
}

console.log(titleToNumber("A"))
console.log(titleToNumber("AB"))
console.log(titleToNumber("ZY"))

export { titleToNumber }
