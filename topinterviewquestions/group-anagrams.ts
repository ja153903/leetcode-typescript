function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>()

  for (const str of strs) {
    const sortedKey = str.split('').sort().join('')
    if (!groups.has(sortedKey)) {
      groups.set(sortedKey, [])
    }

    groups.get(sortedKey)?.push(str)
  }

  return [...groups.values()]
}

export { groupAnagrams }
