const map: any = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function romanToInt(s: string): number {
  if (s.length === 0) {
    return 0
  }

  let result: number = map[s[s.length - 1]] ?? 0

  for (let i = s.length - 2; i >= 0; i--) {
    const prev: number = map[s[i + 1]]
    const current: number = map[s[i]]

    if (prev > current) {
      result -= current
    } else {
      result += current
    }
  }

  return result
}

export { romanToInt }
