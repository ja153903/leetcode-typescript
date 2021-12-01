function isAnagram(s: string, t: string): boolean {
  const counter: Map<string, number> = new Map()

  for (const ch of s) {
    const currentCount = counter.get(ch) ?? 0
    counter.set(ch, currentCount + 1)
  }

  for (const ch of t) {
    if (!counter.has(ch)) {
      return false
    }

    const currentCount = counter.get(ch) ?? 0
    if (currentCount <= 0) {
      return false
    }

    counter.set(ch, currentCount - 1)
  }

  return (
    [...counter.values()].reduce((acc, count) => acc + count) === 0
  )
}

export { isAnagram }
