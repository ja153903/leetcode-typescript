function firstUniqChar(s: string): number {
  const counter = new Map<string, number>()

  for (const ch of s) {
    const count = counter.get(ch) ?? 0
    counter.set(ch, count + 1)
  }

  const candidates = [...counter.entries()]
    .filter(([_key, value]) => value === 1)
    .map(([key, _value]) => key)

  if (candidates.length === 0) {
    return -1
  }

  return s.split('').findIndex((ch) => ch === candidates[0]) ?? -1
}

export { firstUniqChar }
